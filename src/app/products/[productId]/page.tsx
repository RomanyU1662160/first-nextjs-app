import React from 'react';
type Props = {
  params: {
    productId: string;
  };
};

function ProductDetails({ params }: Props) {
  console.log(params);
  return <h1>Product {params.productId} Details Page</h1>;
}

export default ProductDetails;
