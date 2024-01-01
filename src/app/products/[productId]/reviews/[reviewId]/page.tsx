import React from 'react';

type Props = {
  params: {
    reviewId: string;
    productId: string;
  };
};

function ProductReview({ params }: Props) {
  if (Number(params.productId) > 1000) {
    throw new Error(
      `Cannot show reviews for Product with id ${params.productId}, product not found`
    );
  }
  return (
    <div>
      Product {params.productId} Review number {params.reviewId}
    </div>
  );
}

export default ProductReview;
