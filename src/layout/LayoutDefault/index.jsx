import styles from "./style.module.scss";
import { ROUTE_NAMES } from "../../app/router";
import Nav from "../../components/Nav";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function LayoutDefault({ children }) {
  const user = useSelector((state) => state.user.value);

  const routes = useMemo(() => {
    if (user?.role_id === 3)
      return [
        {
          name: "Home",
          path: ROUTE_NAMES.support.home,
        },
        {
          name: "Tickets ",
          path: ROUTE_NAMES.support.tickets,
        },
        {
          name: "Requests",
          path: ROUTE_NAMES.support.requests,
        },
        {
          name: "Profile",
          path: ROUTE_NAMES.client.profile.settings,
        },
      ];

    return [
      {
        name: "Home",
        path: ROUTE_NAMES.main,
      },
      {
        name: "Market",
        path: ROUTE_NAMES.market,
      },
      {
        name: "Banks",
        path: ROUTE_NAMES.banks,
      },
      {
        name: "Tickets",
        path: ROUTE_NAMES.client.tickets,
      },
      {
        name: "Profile",
        path: ROUTE_NAMES.client.profile.settings,
      },
    ];
  }, [user]);

  return (
    <div className={styles.LayoutDefault}>
      <div className="container">
        <Nav routes={routes} />
      </div>
      <div className={styles.LayoutDefault__content}>{children}</div>
    </div>
  );
}
