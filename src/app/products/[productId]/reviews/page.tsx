import React from 'react';

type Props = {
  params: {
    productId: string;
  };
};

function ProductReviewsList({ params }: Props) {
  return <h1>Product {params.productId} Reviews List</h1>;
}

export default ProductReviewsList;
