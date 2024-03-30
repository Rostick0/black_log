import { useUpdatesGetQuery } from "../../app/store/modules/updates";
import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function News() {
  const { data } = useUpdatesGetQuery();

  return (
    <div className={styles.News}>
      <Title className="text-right">News</Title>
      <ul className={styles.News_list}>
        {data?.length > 0 &&
          data?.map((item) => (
            <li className={styles.News_item} key={item.id}>
              <div className={styles.News_item__link}>
                <div className={styles.News_item__top}>
                  <div className={styles.News_item__title}>{item.title}</div>
                  <div className={styles.News_item__date}>
                    {new Date(item.created_at)?.toLocaleDateString()}
                  </div>
                </div>
                <div className={styles.News_item__content}>{item.content}</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
