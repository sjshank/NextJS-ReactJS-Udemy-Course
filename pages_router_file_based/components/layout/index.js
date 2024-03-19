import NotificationContext from "@/store/notification-context";
import Notification from "../notification/notification";
import MainHeader from "./main-header";
import Head from "next/head";
import { useContext } from "react";

export default function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);
  const notificationObj = notificationCtx.notification;
  return (
    <>
      <Head>
        <title>Spot Events</title>
        <meta name="description" content="Spot all the events at one place." />
      </Head>
      <MainHeader />
      <main>{children}</main>
      {notificationObj && (
        <Notification
          title={notificationObj.title}
          message={notificationObj.message}
          status={notificationObj.status}
        />
      )}
    </>
  );
}
