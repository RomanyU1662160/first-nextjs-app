import Link from 'next/link';
import React from 'react';

function ArchivedNotifications() {
  return (
    <>
      <h2 className='text-warning text-center'>Archived Notifications</h2>
      <div>
        <Link href={'/complex-dashboard'}>default notification</Link>
      </div>
    </>
  );
}

export default ArchivedNotifications;
