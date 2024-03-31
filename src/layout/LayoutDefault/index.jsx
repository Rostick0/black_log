import styles from "./style.module.scss";
import { ROUTE_NAMES } from "../../app/router";
import Nav from "../../components/Nav";

export default function LayoutDefault({ children }) {
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

  return (
    <div className={styles.LayoutDefault}>
      <div className="container">
        <Nav routes={routes} />
      </div>
      <div className={styles.LayoutDefault__content}>{children}</div>
    </div>
  );
}
