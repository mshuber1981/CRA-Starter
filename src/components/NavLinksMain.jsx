import React from "react";
import { Link } from "react-router-dom";

export default function NavLinksMain({ links }) {
  return (
    <>
      {links.map(function ({ ID, name, link }) {
        return (
          <li key={ID}>
            {link.startsWith("/") ? (
              <Link to={link} className="link">
                {name}
              </Link>
            ) : (
              <a href={link} className="link">
                {name}
              </a>
            )}
          </li>
        );
      })}
    </>
  );
}
