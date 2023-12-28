import React from 'react';

type Props = {
  params: {
    reviewId: string;
    productId: string;
  };
};

function ProductReview({ params }: Props) {
  return (
    <div>
      Product {params.productId} Review number {params.reviewId}
    </div>
  );
}

export default ProductReview;
