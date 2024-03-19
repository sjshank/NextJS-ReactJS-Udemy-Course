import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: function (data) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (
      notification &&
      (notification.status == "success" || notification.status == "error")
    ) {
      const timer = setTimeout(() => {
        hideNotification();
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  const showNotification = (notifData) => {
    setNotification(notifData);
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider
      value={{
        notification: notification,
        showNotification: showNotification,
        hideNotification: hideNotification,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
