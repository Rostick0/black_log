import React, { FC, useState, useEffect } from "react";
import styles from "./style.module.scss";
// import Input from '../Input/Input';

export default Select = ({
  className,
  inputClassName,
  styleColor,
  defaultValue,
  placeholder,
  onChange,
  items,
  resetField,
}) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (value && defaultValue) return;

    setValue(defaultValue);
  }, [defaultValue]);

  const styleClassName = className ? " " + className : "";
  const styleInputClassName = inputClassName ? " " + inputClassName : "";

  const styleClass = styles["Select_style_" + styleColor];
  const styleLink = styleClass
    ? " " + styleClass
    : " " + styles["Select_style_white"];

  return (
    <div
      className={styles.Select + styleLink + styleClassName}
      tabIndex={1}
      onBlur={function (e) {
        if (e.currentTarget !== e.target) return;

        setActive(false);
      }}
    >
      <div
        className={styles.Select__switch + styleClassName}
        onClick={() => setActive((prev) => !prev)}
      >
        <input
          onMouseDown={(e) => e.preventDefault()}
          className={styles.Select__input + styleInputClassName}
          placeholder={placeholder}
          defaultValue={value}
          readOnly
        ></input>
        <svg
          className={styles.Select__icon}
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.376 20.8208C18.1769 21.0481 17.8231 21.0481 17.6239 20.8208L14.1268 16.8295C13.8436 16.5063 14.0731 16 14.5028 16L21.4971 16C21.9268 16 22.1564 16.5063 21.8732 16.8295L18.376 20.8208Z"
            fill="#142333"
            fillOpacity="0.33"
          />
        </svg>
      </div>
      {active && (
        <ul className={styles.Select__list}>
          {items?.map((item) => (
            <li
              key={item.value}
              className={styles.Select__item}
              onClick={() => {
                setValue(`${item?.name}`);
                setActive(false);
                typeof onChange === "function" &&
                  onChange({
                    value: item.value,
                    name: item.name,
                  });
              }}
            >
              {item.name}
            </li>
          )) ?? <li className={styles.Select__item}>Нет данных</li>}
        </ul>
      )}
    </div>
  );
};
