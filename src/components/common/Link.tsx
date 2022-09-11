import React from 'react';

type LinkProps = {
    children: React.ReactNode;
}& React.ComponentProps<"a">

const Link = ({ children, ...rest }: LinkProps) => {
  return (
    <a {...rest} >
        {children}
    </a>
  )
}

export default Link