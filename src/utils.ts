import type { Graph, Thing, WithContext } from 'schema-dts';

type JsonLdValue = string | boolean | number | JsonLdValue[] | { [key: string]: JsonLdValue };

/**
 * HTML entities that need to be escaped in JSON-LD script elements
 * to comply with W3C JSON-LD 1.1 specification
 */
const HTML_ENTITIES_MAP = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&apos;',
} as const;

/**
 * Creates a regex pattern to match HTML entities that need escaping
 */
function createEscapePattern(): RegExp {
  const chars = Object.keys(HTML_ENTITIES_MAP).join('');
  return new RegExp(`[${chars}]`, 'g');
}

/**
 * Escapes HTML entities in a string for safe JSON-LD output
 */
function escapeHtmlEntities(text: string): string {
  const pattern = createEscapePattern();
  return text.replace(pattern, (match) => {
    return HTML_ENTITIES_MAP[match as keyof typeof HTML_ENTITIES_MAP];
  });
}

/**
 * Sanitizes JSON values for safe inclusion in JSON-LD script elements
 * Removes null values and escapes HTML entities in strings
 */
function sanitizeJsonValue(_key: string, value: JsonLdValue): JsonLdValue | undefined {
  if (value === null) {
    return undefined;
  }

  if (typeof value === 'string') {
    return escapeHtmlEntities(value);
  }

  if (typeof value === 'object' || typeof value === 'number' || typeof value === 'boolean') {
    return value;
  }

  // Handle unexpected types
  return undefined;
}

/**
 * Converts schema.org structured data to a safe JSON-LD string
 * Ensures compliance with W3C JSON-LD 1.1 restrictions for script element contents
 */
export function stringifyJsonLd(
  structuredData: Graph | WithContext<Thing>,
  formatting?: string | number,
): string {
  return JSON.stringify(structuredData, sanitizeJsonValue, formatting);
}
