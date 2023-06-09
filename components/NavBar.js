import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ThemeSwitch />
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }

        nav li {
          display: inline;
        }

        nav li:not(:first-child) {
          margin-left: 0.75rem;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
