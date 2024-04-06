import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix} from './config';

export default createMiddleware({
  defaultLocale: 'ru',
  locales,
  pathnames,
  localePrefix
});

export const config = {
  matcher: [
    '/',
    '/(en|ru|kz)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};