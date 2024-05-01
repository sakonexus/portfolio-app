import { Link } from 'react-router-dom';
import React from 'react';

interface AnchorLinkProps {
  url: string;
  text: string;
}

const AnchorLink = ({ url, text }: AnchorLinkProps) => {
  return <Link to={url}>{text}</Link>;
};

export default AnchorLink;
