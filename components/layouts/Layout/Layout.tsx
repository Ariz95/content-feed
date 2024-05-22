import React from "react";
import Head from "next/head";

import styles from "./Layout.module.css";
import { Props as LayoutProps } from ".";
import { Navbar } from "../../ui/Navbar/Navbar";

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Aldo Argumaniz" />
        <meta name="description" content="Content Feed Page" />
        <meta
          name="keywords"
          content="content feed, content-feed page, code challenge, test"
        />
      </Head>

      <Navbar title={title} />

      <main className={`${styles.main}`}>{children}</main>
    </>
  );
};
