import { KNOWN_LANGUAGES } from './config';

export { KNOWN_LANGUAGES };
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);
const langCodeRegex = new RegExp(`^/(${KNOWN_LANGUAGE_CODES.join('|')})/`);

export function getLanguageFromURL(pathname: string) {
  const langCodeMatch = pathname.match(langCodeRegex);
  return langCodeMatch ? langCodeMatch[1] : 'en';
}
