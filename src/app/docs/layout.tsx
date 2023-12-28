import React from 'react';

type Props = {
  children: React.ReactNode;
};

function DocsLayout({ children }: Props) {
  return <> Documentation::: {children} </>;
}

export default DocsLayout;
