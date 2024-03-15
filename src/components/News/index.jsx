import Title from "../../ui/Title";
import styles from "./style.module.scss";

export default function News() {
  const data = Array.from(Array(3).keys()).map((item) => ({
    id: item,
    title: "Updates",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    created_ate: "24.03.2024",
  }));

  return (
    <div className={styles.News}>
      <Title className="text-right">News</Title>
      <ul className={styles.News_list}>
        {data?.length &&
          data?.map((item) => (
            <li className={styles.News_item} key={item.id}>
              <div className={styles.News_item__link}>
                <div className={styles.News_item__top}>
                  <div className={styles.News_item__title}>{item.title}</div>
                  <div className={styles.News_item__date}>
                    {item.created_ate}
                  </div>
                </div>
                <div className={styles.News_item__content}>
                  {item.description}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
