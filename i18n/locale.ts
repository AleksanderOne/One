'use server';

import {cookies} from 'next/headers';
import {Locale, defaultLocale, locales} from '@/i18n/config'
import { headers } from 'next/headers'

import {parse, pick} from 'accept-language-parser';

const COOKIE_NAME = 'LOCALE';

export async function getUserLocale() {
  let browserLocale;
  const cookieLocale = (await cookies()).get(COOKIE_NAME)?.value;
  if (!cookieLocale) {
    const headersList = await headers();
    browserLocale = pick(locales, parse(headersList.get('accept-language')||''), {loose: true});
  }
    return cookieLocale || browserLocale || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
