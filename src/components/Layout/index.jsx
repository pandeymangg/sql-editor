import React from "react";
import Head from "next/head";

const Layout = ({ docTitle, metaDescription, bgColor = "#fff", children }) => {
  return (
    <div className="layout text-gray-900 dark:text-gray-50 bg-white dark:bg-bgDark">
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
