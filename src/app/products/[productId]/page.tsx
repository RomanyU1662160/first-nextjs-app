import React from 'react';
type Props = {
  params: {
    productId: string;
  };
};

function ProductDetails({ params }: Props) {
  const productId = params.productId;
  if (Number(productId) > 1000) {
    throw new Error(`Product with id ${productId} is not found`);
  }

  console.log('productId', productId);

  return (
    <h1 className='text-info text-center'>Product {productId} Details Page</h1>
  );
}

export default ProductDetails;
