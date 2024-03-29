// ProfileBalance
import Title from "../../ui/Title";
import ProfileBalanceItem from "../ProfileBalanceItem";
import styles from "./style.module.scss";

export default function ProfileBalance() {
  const data = [
    {
      name: "BTC",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_39_269)">
            <path
              d="M39.3987 24.8382C36.7275 35.5525 25.8758 42.073 15.1602 39.4012C4.4491 36.73 -2.07147 25.8776 0.600973 15.164C3.27093 4.44845 14.1227 -2.07275 24.8351 0.598452C35.55 3.2697 42.0699 14.1233 39.3987 24.8382Z"
              fill="#F7931A"
            />
            <path
              d="M13.4204 23.3683C13.3116 23.6383 13.036 24.0433 12.4148 23.8895C12.4367 23.9214 10.8198 23.4914 10.8198 23.4914L9.73047 26.0032L12.586 26.7151C13.1173 26.8482 13.6379 26.9876 14.1504 27.1189L13.2422 30.7651L15.4341 31.312L16.3335 27.7045C16.9323 27.867 17.5135 28.017 18.0822 28.1582L17.1859 31.7488L19.3803 32.2957L20.2884 28.6563C24.0303 29.3644 26.844 29.0788 28.0284 25.6945C28.9827 22.9696 27.9809 21.3976 26.0121 20.3727C27.4459 20.042 28.5258 19.0989 28.814 17.1508C29.2121 14.4896 27.1858 13.059 24.4152 12.1046L25.314 8.4996L23.1196 7.95273L22.2446 11.4627C21.6678 11.3189 21.0752 11.1833 20.4865 11.0489L21.3678 7.5158L19.1746 6.96893L18.2753 10.5726C17.7978 10.4639 17.3291 10.3564 16.874 10.2433L16.8765 10.232L13.8503 9.47638L13.2665 11.8201C13.2665 11.8201 14.8946 12.1932 14.8603 12.2164C15.749 12.4382 15.9096 13.0263 15.8828 13.4926L13.4204 23.3683ZM23.8003 24.1814C23.1222 26.9063 18.5341 25.4332 17.0466 25.0638L18.2516 20.2333C19.739 20.6045 24.509 21.3395 23.8003 24.1814ZM24.479 17.1115C23.8602 19.5902 20.0415 18.3308 18.8028 18.0221L19.8953 13.6409C21.134 13.9496 25.1234 14.5258 24.479 17.1115Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_269">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      count: 1.023548574878,
    },
    {
      name: "USDT",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_39_283)">
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
              fill="#59AF99"
            />
            <path
              d="M22.0765 17.538V15.176H27.4505V11.45H12.5365V15.176H17.9245V17.538C13.4105 17.756 10.0225 18.662 10.0225 19.738C10.0225 20.814 13.4065 21.724 17.9245 21.938V29.738H22.0765V21.938C26.5905 21.722 29.9785 20.816 29.9785 19.738C29.9785 18.66 26.6005 17.756 22.0765 17.538ZM20.0005 21.25C15.1125 21.25 11.1505 20.494 11.1505 19.584C11.1505 18.802 14.0365 18.144 17.9205 17.968V20.636C18.5885 20.666 19.2825 20.684 19.9965 20.684C20.7105 20.684 21.4085 20.666 22.0725 20.636V17.968C25.9565 18.144 28.8425 18.802 28.8425 19.584C28.8505 20.504 24.8885 21.25 20.0005 21.25Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_39_283">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      count: 125.833,
    },
  ];

  return (
    <div className={styles.ProfileBalance}>
      <Title variant="small">Your balance</Title>
      <div className={styles.ProfileBalance__list}>
        {data.map((item) => (
          <ProfileBalanceItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
