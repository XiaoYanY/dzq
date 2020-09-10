import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
  { href: '/a', label: 'a' },
  { href: '/b/666?data=kkab&tab=3', label: 'b' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 16px;
      }
    `}</style>

    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
      <Link href="/b/[id]" as={`/b/7788`}>
        <a>HomeB</a>
      </Link>
    </ul>
  </nav>
);

export default Nav;
