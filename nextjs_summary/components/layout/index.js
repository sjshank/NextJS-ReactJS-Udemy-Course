import MainNavigation from "./mainNavigation";
import classes from "./layout.module.css";
import Head from "next/head";

function Layout(props) {
  return (
    <div>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Checkout upcoming react meetups" />
      </Head>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
