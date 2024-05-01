import { Link } from 'react-router-dom';
import React from 'react';

interface AnchorLinkProps {
  url: string;
  text: string;
  classList: string;
}

const AnchorLink = ({ url, text, classList }: AnchorLinkProps) => {
  return (
    <Link className={classList} to={url} target="_blank">
      {text}
    </Link>
  );
};

export default AnchorLink;
