import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Title from "../../ui/Title";
import InputForm from "../../Form/InputForm";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { errorsMessage, setErrorMessage } from "../../app/utils/error";
import {
  useExchangeGetQuery,
  usePaymentCreateMutation,
} from "../../app/store/modules/payment";
import { useEffect } from "react";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import { useLazyUserGetQuery } from "../../app/store/modules/userSettings";

export default function ModalOrderInformation({ close }) {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector((state) => state.user.value);

  const [getUsers] = useLazyUserGetQuery();
  const { data } = useExchangeGetQuery();
  const [createPayment, result] = usePaymentCreateMutation();

  const uniqueKey = v4();
  useEffect(() => {
    createPayment({
      body: {
        unique_key: uniqueKey,
        userId: user.id,
      },
      currency: "BTC",
    });

    let intervalId = setInterval(async () => {
      const res = await createPayment({
        body: {
          unique_key: uniqueKey,
          userId: user.id,
        },
        currency: "BTC",
      });

      if (!res?.data?.status) {
        clearInterval(intervalId);
        getUsers();
        close();
      }
    }, 15000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  console.log(result);

  return (
    <Modal>
      <div
        className={styles.ModalOrderInformation}
        // method="post"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <Title className="text-center" variant="small">
          Order Information
        </Title>
        <div className={styles.ModalOrderInformation__inputs}>
          {/* <InputForm
            label="Wallet"
            name="address"
            error={setErrorMessage({ formField: errors?.name })}
            register={register}
            rules={{
              required: true,
              maxLenght: {
                value: 255,
                message: errorsMessage["maxLenght"](255),
              },
            }}
          /> */}
          {/* <InputForm
            label="Give"
            name="amount"
            error={setErrorMessage({ formField: errors?.name })}
            register={register}
            rules={{
              required: true,
              maxLenght: {
                value: 255,
                message: errorsMessage["maxLenght"](255),
              },
            }}
          />
          <InputForm
            label="Recieve"
            name="amount"
            error={setErrorMessage({ formField: errors?.name })}
            register={register}
            rules={{
              required: true,
              maxLenght: {
                value: 255,
                message: errorsMessage["maxLenght"](255),
              },
            }}
          /> */}
          <InputForm
            label="Address"
            name="unique_key"
            // defaultValue={uniqueKey}
            defaultValue={result?.data?.wallet}
            error={setErrorMessage({ formField: errors?.unique_key })}
            register={register}
            readOnly
            // rules={{
            //   required: true,
            //   maxLenght: {
            //     value: 255,
            //     message: errorsMessage["maxLenght"](255),
            //   },
            // }}
          />
        </div>
        <div className={styles.ModalOrderInformation__info}>
          <div className={styles.ModalOrderInformation__info_item}>
            {/* <span>You need to make a transfer of 0.0000065654 BTC</span> */}
            <span>1 BTC - {data}$</span>
            <Button
              className={styles.ModalOrderInformation__info_btn}
              onClick={() => {
                navigator.clipboard.writeText(result?.data?.wallet);
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_392_513)">
                  <path
                    d="M12.1484 20H4.6875C2.96432 20 1.5625 18.5982 1.5625 16.875V6.28906C1.5625 4.56589 2.96432 3.16406 4.6875 3.16406H12.1484C13.8716 3.16406 15.2734 4.56589 15.2734 6.28906V16.875C15.2734 18.5982 13.8716 20 12.1484 20ZM4.6875 4.72656C3.82599 4.72656 3.125 5.42755 3.125 6.28906V16.875C3.125 17.7365 3.82599 18.4375 4.6875 18.4375H12.1484C13.0099 18.4375 13.7109 17.7365 13.7109 16.875V6.28906C13.7109 5.42755 13.0099 4.72656 12.1484 4.72656H4.6875ZM18.3984 14.9219V3.125C18.3984 1.40182 16.9966 0 15.2734 0H6.60156C6.17004 0 5.82031 0.349731 5.82031 0.78125C5.82031 1.21277 6.17004 1.5625 6.60156 1.5625H15.2734C16.1349 1.5625 16.8359 2.26349 16.8359 3.125V14.9219C16.8359 15.3534 17.1857 15.7031 17.6172 15.7031C18.0487 15.7031 18.3984 15.3534 18.3984 14.9219Z"
                    fill="var(--fourth-color)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_392_513">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
          </div>
          {/* <div className={styles.ModalOrderInformation__info_item}>
            to address 
          </div> */}
        </div>
        {/* <img
          className={styles.ModalOrderInformation__qr_code}
          src="http://support.dt-a.com.au/wp-content/uploads/2018/06/qr-code-rule-website.png"
          alt=""
          width="200"
          height="200"
        /> */}
        <Button className={styles.ModalOrderInformation__btn} onClick={close}>
          Cancel order
        </Button>
      </div>
    </Modal>
  );
}
