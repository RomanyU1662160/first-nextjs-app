'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { use } from 'react';

type Props = {
  error: Error;
  reset: () => void;
};

function Error({ error, reset }: Props) {
  const params = useParams();
  const productId = params.productId;
  const router = useRouter();

  const handleResetClick = () => {
    const newId = Number(productId) - 5;
    // reset();
    router.push(`/products/${newId}`);
  };
  return (
    <div>
      <h1 className='text-danger text-center'>Error</h1>
      <p className='text-danger text-center'>{error.message}</p>

      <div className='row'>
        <button
          className='btn btn-dark m-4 text-light'
          onClick={handleResetClick}
        >
          Reset{' '}
        </button>
      </div>
    </div>
  );
}

export default Error;
