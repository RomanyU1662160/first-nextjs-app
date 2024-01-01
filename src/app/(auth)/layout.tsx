'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ChangeEvent } from 'react';

type Props = {
  children: React.ReactNode;
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/forgot-password', label: 'Forgot password' },
  { href: '/login', label: 'Sign In' },
  { href: '/signup', label: 'Sign up' },
];

const AuthNavigation = () => {
  const pathName = usePathname();
  const [userName, setUserName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const isActive = (href: string) => {
    return pathName === href;
  };
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            href={link.href}
            className={
              isActive(link.href) ? 'font-bold m-4' : 'text-blue-500 m-4 '
            }
            key={link.href}
          >
            {link.label}
          </Link>
        );
      })}

      <div className='m-4 '>
        <form action=''>
          <div className='form-group'>
            <label htmlFor='username'>Username or Email </label>
            <input
              type='text'
              name='username'
              id='username'
              className='form-control mb-3'
              value={userName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserName(e.target.value)
              }
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'> Password </label>
            <input
              type='password'
              name='password'
              id='password'
              className='form-control mb-3'
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <div className='row'>
            <button className='btn btn-info' type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

function AuthLayout({ children }: Props) {
  return (
    <>
      <AuthNavigation />
      <h3>Auth Layout:::</h3>
      {children}
    </>
  );
}

export default AuthLayout;
