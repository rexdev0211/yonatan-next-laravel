import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import Nprogress from 'nprogress';
import { useState } from 'react';
import logo from "../../public/logo.png";
import Theme from './Theme';
import { navigation } from '/data/navigation';



Router.onRouteChangeStart = () => Nprogress.start();
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter()
  const { locale: activeLocale } = router

  const [active, setActive] = useState(false);
  const closeMenuItem = () => setActive(false);


  return (
    <header className="py-3 z-50">
      <nav className="md:flex items-center px-2  md:flex-row md:justify-center md:mx-auto w-screen max-w-screen-xl flex-wrap bg-gray-50">
        <div className="md:inline-flex md:flex-row w-screen md:items-center justify-between flex flex-col items-start  py-6 md:py-0">
          <div className="flex items-center">
            {navigation.map((nav) => (
              <Link href={nav.href} key={nav.title}>
                <a
                  onClick={closeMenuItem}
                  className="text-slate-500 rounded focus:text-black md:ml-4 px-2 py-2 md:px-3 hover:text-black"
                >
                  {t(`${nav.title}`)}
                </a>
              </Link>
            ))}
            <Link href="/">
              <a
                onClick={closeMenuItem}
                className="text-slate-500 rounded focus:text-black ml-10 px-2 py-2 mb-5 md:px-3 hover:text-black"
              >
                <div className="rounded-lg w-52 relative">
                  <Image
                    alt="Ahmed jadan"
                    layout="responsive"
                    objectFit="cover"
                    src={logo}
                    priority
                    className="rounded-lg z-50"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/login">
              <a
                onClick={closeMenuItem}
                className="text-slate-500 rounded focus:text-black md:ml-4 px-2 py-2 md:px-3 hover:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#64748b" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>
              </a>
            </Link>
            <Link href="/login">
              <a
                onClick={closeMenuItem}
                className="text-slate-500 rounded focus:text-black md:ml-4 px-2 py-2 md:px-3 hover:text-black"
              >
                {t(`Login`)}
              </a>
            </Link>
            <Link href="/Cart">
              <a
                onClick={closeMenuItem}
                className="text-slate-500 rounded focus:text-black md:ml-4 px-2 py-2 md:px-3 hover:text-black"
              >
                {t(`Cart`)}
              </a>
            </Link>
            <div className="text-slate-500 hidden md:flex  bg-gray-100 rounded-md">
              <Theme />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
