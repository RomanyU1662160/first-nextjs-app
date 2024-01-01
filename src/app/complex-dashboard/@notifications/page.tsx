import Link from 'next/link';
import React from 'react';

function UserNotifications() {
  return (
    <>
      <h2 className='text-info text-center'>Default Notifications</h2>
      <div>
        <Link href={'/complex-dashboard/archived'}>Archived notification</Link>
      </div>
    </>
  );
}

export default UserNotifications;
