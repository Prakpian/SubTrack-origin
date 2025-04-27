import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex items-center gap-2 place-content-center p-5">
      <p>Made by Prakpian |</p>
      {
        <Link to={"https://github.com/Prakpian"} target="_blank">
          <FaGithub size={20} />
        </Link>
      }
    </footer>
  );
}
