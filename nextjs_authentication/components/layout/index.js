import { Fragment } from "react";

import NavBar from "./navBar";

function Layout(props) {
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
