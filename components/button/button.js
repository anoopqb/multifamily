import Link from 'next/link';
import React from 'react';
const Button = ({ type, href, children, ...props }) => {
  if (type === 'link' || !type) {
    return (
      <Link href={href} passHref>
        <Link {...props}>{children}</Link>
      </Link>
    );
  } else if (type === 'button') {
    return (
      <Link href={href} passHref>
        <button {...props}>{children}</button>
      </Link>
    );
  }
};

export default Button;
