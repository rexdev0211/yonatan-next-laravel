import Link from 'next/link';
import { useMemo } from 'react';
import ScrollTop from './ScrollTop';

export default function Footer() {
  const year = useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);
  return (
    <footer>
      <div className="bg-neutral-800">
        <div className="flex justify-end max-w-screen-xl mx-auto h-24">
          <div className="flex items-center">
            <Link
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <a className="mr-2.5 mb-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="-204.79995 -341.33325 1774.9329 2047.9995">
                  <path d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373" fill="#262626"/>
                  <path d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4" fill="#fff"/>
                </svg>
              </a>
            </Link>
            <Link
              href="https://instagram.com"
              rel="noopener noreferrer"
              target="_blank"
              prefetch={false}
            >
              <a className="mr-4">
                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20" height="20">
                  <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"/>
                </svg>
              </a>
            </Link>
            <Link
              href="https://twitter.com"
              rel="noopener noreferrer"
              target="_blank"
              prefetch={false}
            >
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <g data-name="&lt;Group&gt;">
                    <path fill="#fff" stroke="#303c42" stroke-linecap="round" stroke-linejoin="round" d="M2,3.5a13.62,13.62,0,0,0,10,5c-.26-1.06-.28-3.94,1.74-5.14A5.24,5.24,0,0,1,16.5,2.5,4.65,4.65,0,0,1,19.91,4a10.5,10.5,0,0,0,3-1.14,4.57,4.57,0,0,1-2,2.57,8.77,8.77,0,0,0,2.66-.66,9.3,9.3,0,0,1-2.38,2.43c.71,6.37-5,14.29-13.12,14.29a14.76,14.76,0,0,1-7.5-2,9.3,9.3,0,0,0,7-2,5.82,5.82,0,0,1-5-3.5c1,.32,1.95.48,2.5,0A5.41,5.41,0,0,1,1,9a3.51,3.51,0,0,0,2.5,1A5,5,0,0,1,2,3.5Z" data-name="&lt;Path&gt;"/>
                  </g>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <ScrollTop />
    </footer>
  );
}
