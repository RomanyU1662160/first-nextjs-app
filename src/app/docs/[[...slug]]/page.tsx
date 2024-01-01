import React from 'react';

type Props = {
  params: {
    slug: string[];
  };
};

function SlugPage({ params }: Props) {
  return (
    <>
      {params.slug?.length === 1 && (
        <h1 className='text-info text-center'> Page: {params.slug[0]}</h1>
      )}
      {params.slug?.length === 2 && (
        <h1 className='text-info text-center'>
          {' '}
          Feature: you are reading feature {params.slug[1]} in page{' '}
          {params.slug[0]}
        </h1>
      )}
      {!params.slug && (
        <h1 className='text-info text-center'>
          Welcome to the Documentation page{' '}
        </h1>
      )}
    </>
  );
}

export default SlugPage;
