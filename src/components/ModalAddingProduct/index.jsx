// ModalAddingProduct
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Title from "../../ui/Title";
import UploadFile from "../../ui/UploadFile";
import styles from "./style.module.scss";

export default function ModalAddingProduct({ close }) {
  const data = [
    {
      id: 1,
      name: "Название файла",
    },
  ];

  return (
    <Modal close={close}>
      <div className={styles.ModalAddingProduct}>
        <Title className="text-center" variant="small">
          Adding a new product
        </Title>
        {data?.length > 0 && (
          <div className={styles.ModalAddingProduct__files}>
            {data?.map((item) => (
              <div
                className={styles.ModalAddingProduct__files_item}
                key={item.id}
              >
                <span>{item.name}</span>
                <Button className="btn-circle" variant="red">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.29512 10.3407V13.8823M11.7049 10.3407V13.8823M12.0833 5.34066C12.0833 4.88042 11.7102 4.50732 11.25 4.50732H8.75C8.28976 4.50732 7.91667 4.88042 7.91667 5.34066M4.88679 6.79902L5.58716 15.1334C5.69598 16.4284 6.77882 17.424 8.07838 17.424H11.9225C13.222 17.424 14.3049 16.4284 14.4137 15.1334L15.1141 6.79902M3.75 6.67234H16.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </Button>
              </div>
            ))}
          </div>
        )}
        <UploadFile>Upload a file</UploadFile>
        <Button className={styles.ModalAddingProduct__btn}>Save</Button>
      </div>
    </Modal>
  );
}
