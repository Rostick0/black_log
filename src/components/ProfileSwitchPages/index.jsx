import styles from "./style.module.scss";
import { ROUTE_NAMES } from "./../../app/router";
import { Link, useLocation } from "react-router-dom";
import { setClassName } from "../../app/utils/class";

export default function ProfileSwitchPages() {
  const data = [
    {
      name: "Settings",
      link: ROUTE_NAMES.client.profile.settings,
    },
    {
      name: "Balance",
      link: ROUTE_NAMES.client.profile.balance,
    },
    {
      name: "Transactions",
      link: ROUTE_NAMES.client.profile.transactions,
    },
    {
      name: "Basket",
      link: ROUTE_NAMES.client.profile.basket,
    },
    {
      name: "Products",
      link: ROUTE_NAMES.client.profile.products,
    },
  ];

  const location = useLocation();

  const setActiveRoute = (route) => {
    // console.log(location.pathname);
    // console.log(route === location.pathname);
    if (route !== location.pathname) return "";

    return setClassName(styles.active);
  };

  return (
    <div className={styles.ProfileSwitchPages}>
      {data.map((item) => (
        <Link
          key={item.link}
          className={
            styles.ProfileSwitchPages__link + setActiveRoute(item.link)
          }
          to={item.link}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
