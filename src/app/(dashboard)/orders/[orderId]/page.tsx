import React from 'react';

type Props = {
  params: {
    orderId: string;
  };
};

function OrderDetails({ params }: Props) {
  return <div>Order Details of order with id {params.orderId}</div>;
}

export default OrderDetails;
