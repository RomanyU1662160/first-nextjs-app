import Link from 'next/link';
import React from 'react';

function ProductsList() {
  return (
    <>
      <h1 className='text-info text-center'>All ProductsList Page</h1>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item m-2'>
          <Link href={'/products/1'}> Product 1 </Link>
        </li>
        <li className='list-group-item m-2'>
          <Link href={'/products/2'}> Product 2 </Link>
        </li>
        <li className='list-group-item m-2 border-bottom'>
          <Link href={'/products/3'}> Product 3 </Link>
        </li>
      </ul>
    </>
  );
}

export default ProductsList;
