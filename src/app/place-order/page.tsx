'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

function PlaceOrder() {
  const router = useRouter();
  const handlePlaceOrder = () => {
    console.log('Place Order');
    setTimeout(() => {
      router.push('/orders');
    }, 2000);
  };
  return (
    <>
      <h1 className='text-info text-center'>Place Order</h1>
      <button onClick={handlePlaceOrder} className='btn btn-info'>
        Place Order ang go to Orders page
      </button>
    </>
  );
}

export default PlaceOrder;
