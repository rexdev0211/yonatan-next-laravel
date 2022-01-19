import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Theme() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  return (
    <div className="flex items-center justify-between  px-2" >
      <div className="px-2">
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <Link href={{ pathname, query }} as={asPath} locale={locale} key={locale}>
              <a className={`text-gray-700 dark:text-gray-100 text-sm ${locale === 'en' ? '' : ''}`}>{locale === "ar" ? 'AR' : 'EN'} </a>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
