#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { InfraStack } from "../lib/infra-stack";
import * as dotenv from "dotenv";

dotenv.config();

const app = new cdk.App();
new InfraStack(app, "StackBtreeAt", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  tags: {
    repo: "https://github.com/HannesOberreiter/btree_info",
    website: "btree.at",
  },
});
