import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import { setClassName } from "../../app/utils/class";

export default function Nav({ routes }) {
  const location = useLocation();

  const setActiveRoute = (route, isWithChild = null) => {
    if (
      (
        isWithChild &&
        location.pathname?.split("/")?.slice(0, -1)?.join("/") ===
          route?.split("/")?.slice(0, -1)?.join("/")
      )
    ) {
      return setClassName(styles.active);
    }

    if (route !== location.pathname) return "";

    return setClassName(styles.active);
  };

  return (
    <div className={styles.Nav}>
      <svg
        className={styles.Nav__icon}
        width="34"
        height="32"
        viewBox="0 0 34 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_794)">
          <path
            d="M12.7506 25.7659H3.78618C2.12106 25.7659 0.625863 27.1613 0.446493 28.8827C0.266674 30.6041 1.47101 31.9996 3.13568 31.9996H12.1001C13.7652 31.9996 15.2604 30.6041 15.4398 28.8827C15.6196 27.1613 14.4153 25.7659 12.7506 25.7659Z"
            fill="#018CFE"
          />
          <path
            d="M8.85592 20.7035L10.6127 3.86751C10.8362 1.73137 9.29737 0 7.17686 0C5.05634 0 3.15656 1.73137 2.93358 3.86706L1.17675 20.7035C0.953778 22.8392 2.49213 24.5706 4.61309 24.5706C6.7336 24.5706 8.63339 22.8392 8.85637 20.7035H8.85592Z"
            fill="#018CFE"
          />
          <path
            d="M32.6279 19.0392C32.0839 17.9091 31.2994 17.0262 30.2745 16.3905C29.2945 15.7829 28.1994 15.4374 26.9901 15.3537C26.8966 15.3473 26.8314 15.2699 26.8413 15.1748C26.8503 15.0906 26.9159 15.0186 26.9995 15.0001C28.1373 14.7456 29.1641 14.3187 30.0807 13.7183C31.0356 13.0935 31.816 12.3043 32.422 11.3512C33.028 10.3982 33.3952 9.312 33.522 8.09361C33.6892 6.48947 33.4308 5.0782 32.7461 3.85936C32.0614 2.64052 30.9502 1.69288 29.4127 1.01555C27.8748 0.338667 25.9166 0 23.538 0H14.7732C13.4066 0 12.1825 1.11561 12.0386 2.49201L11.9177 3.65199C11.7738 5.0284 12.7655 6.14401 14.1321 6.14401H17.3275V6.13993H21.703C22.9855 6.13993 23.9723 6.44736 24.6632 7.06176C25.3542 7.67661 25.6437 8.52011 25.5318 9.59316C25.4535 10.3429 25.2027 10.9836 24.7806 11.5151C24.358 12.0462 23.8064 12.4528 23.1253 12.734C22.4443 13.0152 21.685 13.156 20.847 13.156H19.1945C17.8279 13.156 16.6038 14.2716 16.4599 15.648C16.316 17.0244 17.3077 18.14 18.6744 18.14H20.963C21.9453 18.14 22.7711 18.3039 23.4405 18.6321C24.1094 18.9604 24.6039 19.424 24.9244 20.0226C25.2445 20.6216 25.3618 21.3324 25.276 22.1556C25.1573 23.2911 24.6695 24.1767 23.8118 24.8119C22.9541 25.4476 21.6931 25.765 20.028 25.765H19.5137C18.1471 25.765 16.9229 26.8806 16.7791 28.257L16.6487 29.5071C16.5049 30.8835 17.4966 31.9991 18.8632 31.9991H21.208C23.5556 31.9991 25.5924 31.6111 27.3178 30.835C29.0432 30.059 30.4107 28.9968 31.4204 27.6476C32.4301 26.2988 33.0244 24.7648 33.2037 23.0461C33.3647 21.5045 33.1732 20.1688 32.6292 19.0383L32.6279 19.0392Z"
            fill="var(--fourth-color)"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_794">
            <rect
              width="33.1429"
              height="32"
              fill="white"
              transform="translate(0.428711)"
            />
          </clipPath>
        </defs>
      </svg>
      {routes.map((item) => (
        <Link
          className={
            styles.Nav__link + setActiveRoute(item?.path, item?.isWithChild)
          }
          key={item?.name}
          to={item?.path}
        >
          {item?.name}
        </Link>
      ))}
    </div>
  );
}
