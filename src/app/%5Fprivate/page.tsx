import React from 'react';

function PrivateFolder() {
  return (
    <h1 className='text-info text-center'>
      if you want to access a page with _ in the path, you need to encode it as
      %5F
    </h1>
  );
}

export default PrivateFolder;
