'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { use } from 'react';

type Props = {
  children: React.ReactNode;
};

function ProductsLayout({ children }: Props) {
  const productId = useParams().productId;

  console.log('productId:::>>>', productId);

  //   if (Number(productId) > 1000) {
  //     throw new Error(`Product with id ${productId} is not found`);
  //   }

  const handleBackClick = () => {
    router.back();
  };

  const router = useRouter();

  return (
    <>
      {children}

      <div>
        <button className='btn btn-dark' onClick={handleBackClick}>
          Back
        </button>
      </div>
    </>
  );
}

export default ProductsLayout;
