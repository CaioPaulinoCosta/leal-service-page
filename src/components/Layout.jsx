// src/components/Layout.jsx
import { Helmet } from "react-helmet";

function Layout({ title, children }) {
  return (
    <>
      <Helmet>
        <title>{title} | Leal Service Facilities</title>
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
