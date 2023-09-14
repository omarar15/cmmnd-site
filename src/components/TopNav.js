"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNav = (props) => {
  const pathname = usePathname();

  var navi = [
    { text: "Home", link: "/" },
    { text: "Shop", link: "https://cmmndllc.myshopify.com/" },
    { text: "Music", link: "/music", home: true },
    { text: "Archive", link: "/archives", home: true },
  ];

  if (props.splash) {
    navi = [
      { text: "About", link: "/about", home: true },
      { text: "Contact", link: "mailto:contact@cmmnd.com", home: true },
      { text: "Stickers", link: "/stickerform", home: true },
    ];

    navi = navi.filter((el) => el.home);
  }

  const nav = navi.map((page, i) =>
    page.under_construction ? (
      <h2 key={i}>
        <strike>{page.text}</strike>
      </h2>
    ) : (
      <Link key={i} href={page.link}>
        <h2
          style={{
            textDecoration: pathname === page.link ? "underline" : "none",
          }}
        >
          {page.text}
        </h2>
      </Link>
    )
  );

  return <>{nav}</>;
};

export default TopNav;
