import { Link } from 'react-router-dom';

interface AnchorLinkProps {
  url: string;
  text: string;
  classList: string;
  icon?: React.ReactElement;
}

const AnchorLink = ({ url, text, classList, icon }: AnchorLinkProps) => {
  return (
    <Link className={classList} to={url} target="_blank">
      {text}
      {icon ? <>&nbsp;{icon}</> : null}
    </Link>
  );
};

export default AnchorLink;
