import styles from "./style.module.scss";
import { ROUTE_NAMES } from "../../app/router";
import Nav from "../../components/Nav";
import ProfileSwitchPages from "../../components/ProfileSwitchPages";

export default function LayoutProfile({ children }) {
  const routes = [
    {
      name: "Home",
      path: ROUTE_NAMES.main,
    },
    {
      name: "Market",
      path: ROUTE_NAMES.market,
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
