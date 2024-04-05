import styles from "./style.module.scss";
import { ROUTE_NAMES } from "../../app/router";
import Nav from "../../components/Nav";
import ProfileSwitchPages from "../../components/ProfileSwitchPages";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function LayoutProfile({ children }) {
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
          comparisonLink: ROUTE_NAMES.client.profile.settings,
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
        comparisonLink: ROUTE_NAMES.client.profile.settings,
      },
    ];
  }, [user]);

  return (
    <div className={styles.LayoutProfile}>
      <div className="container">
        <Nav routes={routes} />
        <div className={styles.LayoutProfile__content}>
          <ProfileSwitchPages />
          <div className={styles.LayoutProfile__content_inner}>{children}</div>
        </div>
      </div>
    </div>
  );
}
