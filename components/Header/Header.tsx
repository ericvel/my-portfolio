import React from "react";
import Link from "next/link";
import EricVeliyulinLogo from "public/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/">
        <a>
          <img
            src={"/logo.svg"}
            alt="Eric Veliyulin logo"
          />
        </a>
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/projects">
              <a className="nav-item">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/aboutme">
              <a className="nav-item">About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="nav-item">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
