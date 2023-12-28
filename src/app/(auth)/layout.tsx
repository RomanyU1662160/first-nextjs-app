import Link from 'next/link';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/login', label: 'Sign In' },
  { href: '/signup', label: 'Sign up' },
];

const AuthNavigation = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <Link href={link.href} className='m-4 text-blue-800' key={link.href}>
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

function AuthLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <AuthNavigation />
        <h3>Auth Layout:::</h3>
        {children}
      </body>
    </html>
  );
}

export default AuthLayout;
