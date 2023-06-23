import * as cdk from "aws-cdk-lib";
import {
  CachePolicy,
  Distribution,
  OriginAccessIdentity,
  PriceClass,
} from "aws-cdk-lib/aws-cloudfront";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const domainName = props.tags!.website;
    const subdomains = ["www." + domainName, "info." + domainName];

    const bucket = new Bucket(this, "hosting", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      "OriginAccessIdentity"
    );
    bucket.grantRead(originAccessIdentity);

    /*
    const certificate = new cdk.aws_certificatemanager.Certificate(
      this,
      "certificate",
      {
        domainName: domainName,
        subjectAlternativeNames: [subdomain],
        validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(),
      }
    );
*/

    const cfFunction = new cloudfront.Function(this, "IndexRouting", {
      code: cloudfront.FunctionCode.fromInline(`
        function handler(event) {
          var request = event.request;
          var uri = request.uri;
          // legacy app NFC code, redirect to new app
          if (uri.match(/^\\/app\\/.*/)) {
            var newPath = "https://app.btree.at" + uri.replace("/app", "");
            return {
              statusCode: 301,
              statusDescription: 'Found',
              headers:
                { "location": { "value": newPath } }
            };
          }

          // Check whether the URI is missing a file name.
          if (uri.endsWith('/')) {
            request.uri += 'index.html';
          } 
          // Check whether the URI is missing a file extension.
          else if (!uri.includes('.')) {
            request.uri += '/index.html';
          }

          return request;
        }
      `),
    });

    new Distribution(this, "distribution", {
      defaultBehavior: {
        origin: new S3Origin(bucket, {
          originAccessIdentity,
        }),
        functionAssociations: [
          {
            function: cfFunction,
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
        cachePolicy: CachePolicy.CACHING_OPTIMIZED,
        viewerProtocolPolicy:
          cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: "index.html",
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: "/404.html",
        },
      ],
      //domainNames: subdomains,
      priceClass: PriceClass.PRICE_CLASS_100,
    });
  }
}
