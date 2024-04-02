import styles from "./style.module.scss";
import { ROUTE_NAMES } from "./../../app/router";
import { Link, useLocation } from "react-router-dom";
import { setClassName } from "../../app/utils/class";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function ProfileSwitchPages() {
  const user = useSelector((state) => state.user.value);

  const data = useMemo(() => {
    const otherPages = [
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
    ];

    if (user?.role_id === 3) {
      return otherPages;
    }

    if (user?.role_id === 4) {
      return [
        ...otherPages,
        {
          name: "Your products",
          link: ROUTE_NAMES.seller.profile.basket,
        },
        {
          name: "Statistics",
          link: ROUTE_NAMES.seller.profile.statistics,
        },
      ];
    }

    return [
      ...otherPages,
      {
        name: "Basket",
        link: ROUTE_NAMES.client.profile.basket,
      },
      {
        name: "Products",
        link: ROUTE_NAMES.client.profile.products,
      },
    ];
  }, [user]);

  const location = useLocation();

  const setActiveRoute = (route) => {
    if (route !== location.pathname) return "";

    return setClassName(styles.active);
  };

  return (
    <div className={styles.ProfileSwitchPages}>
      {data?.map((item) => (
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
