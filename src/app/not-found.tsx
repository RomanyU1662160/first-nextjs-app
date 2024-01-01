import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <div>
      <h1 className='text-info text-center'>404 - Page Not Found</h1>
      <Link href='/myaccount'> Go to Dashboard page </Link>
    </div>
  );
}

export default NotFound;
