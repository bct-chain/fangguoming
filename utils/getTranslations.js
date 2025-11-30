import { translations as enTranslations } from './translations/en';
import { translations as zhTranslations } from './translations/zh';

export function getTranslations(language) {
  return language === 'zh' ? zhTranslations : enTranslations;
}

