# Yonatan Frontend

## Features

All of the main repo Features &

- Sub-path routing with locale(s)

- Multi-langage post support

- Optimized & flexible multi-locale SEO

## Quick Start Guide

This repository is furnished with `en` as defaultLocale and with `fr` as additional locale. You can provide as many locales as you want, you'll just add the corresponding translation.

If you add a new translations in `locales` folder, please PR this repo. That might help next users / forks.

1. Checkout the `demo/next-translate` branch on this repo. `Master` is kept up to date with [`timlrx/yonatan`](https://github.com/timlrx/yonatan)
2. Add your own locales and default locale in `i18n.json`
3. Add a folder for every locale in the `locales` folder.
4. For each `.json` files (`404.json`, `common.json`, `headerNavLink.json`, ...) in your `/locales/[locale]` folder, provide a translation
5. Complete `data/siteMetadata.js`, adding the localized version for certain field (like `title` or `description`, for example.)
6. Complete the localization of `data/projectData.js`
7. Voilà ! You're done !

## Post

To have localized version for post, please follow this naming convention:

`myPost.md` : default locale

`myPost.[locale].md`: additional locales

Post can be provided in only one locale (that doesn't need to be defaultLocale).

The API routes used in the newsletter component cannot be used in a static site export. You will need to use a form API endpoint provider and substitute the route in the newsletter component accordingly. Other hosting platforms such as Netlify also offer alternative solutions - please refer to their docs for more information.

## Licence

[MIT]
