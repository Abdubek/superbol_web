import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix} from './config';

export default createMiddleware({
  defaultLocale: 'kz',
  locales,
  pathnames,
  localePrefix
});

export const config = {
  matcher: [
    '/',
    '/(ru|kz|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};