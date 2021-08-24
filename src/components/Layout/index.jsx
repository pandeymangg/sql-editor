import React from "react";
import Head from "next/head";

const Layout = ({ docTitle, metaDescription, bgColor = "#fff", children }) => {
  return (
    <div
      className="layout"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Head>
        {docTitle && <title>{docTitle}</title>}

        {metaDescription && (
          <meta name="description" content={metaDescription}></meta>
        )}
      </Head>
      {children}
    </div>
  );
};

export default Layout;
