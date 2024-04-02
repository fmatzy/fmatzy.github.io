import { FC, ReactNode } from "react";

export type LinkProps = {
  label: string;
  href: string;
  iconElement?: ReactNode;
};

const Link: FC<LinkProps> = ({ label, href, iconElement }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="mb-2 me-2 text-nowrap rounded-md border border-gray-800 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-300"
      rel="noreferrer"
    >
      {iconElement}
      {label}
    </a>
  );
};

export default Link;
