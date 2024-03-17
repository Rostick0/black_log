import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "./style.module.scss";
import stylesInput from "../../ui/Input/style.module.scss";
import Control from "../../ui/Control";
// import Input from '../Input/Input';

export default function SelectForm({
  className,
  label,
  error,
  inputClassName,
  styleColor,
  defaultValue,
  placeholder,
  onChange,
  register,
  name,
  rules,
  setValueHookForm,
  items,
  withIcon = false,
  withReset = true,
  resetField,
}) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (value && defaultValue) return;

    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (typeof setValueHookForm !== "function") return;

    setValueHookForm(name, value);
  }, [value]);

  const styleSelectClassName = className ? " " + className : "";
  const styleInputClassName = inputClassName ? " " + inputClassName : "";

  const styleClass = styles["SelectForm_style_" + styleColor];
  const styleLink = styleClass
    ? " " + styleClass
    : " " + styles["SelectForm_style_white"];

  const switchInput = useRef();

  return (
    <Control
      className={className}
      label={label}
      error={error}
      isDiv
      tabIndex={1}
      onBlur={(e) => {
        // e.stopPropagation();
        console.log(switchInput.current !== e.target);
        // console.log(switchInput.current !== e.target);
        if (switchInput.current !== e.target) return;

        setActive(true);
      }}
      onFocus={() => {
        setActive(active);
      }}
    >
      <div className={styles.SelectForm}>
        <div
          className={styles.SelectForm__switch + styleSelectClassName}
          onClick={() => setActive(!active)}
        >
          <input
            className={stylesInput.input + " " + styles.SelectForm__input + styleInputClassName}
            // onFocus={e => e.preventDefault()}
            // onMouseDown={(e) => e.preventDefault()}
            ref={switchInput}
            onBlur={(e) => {
              console.log(e);
            }}
            placeholder={placeholder}
            defaultValue={value}
            {...register(name, rules)}
            readOnly
          ></input>
          {withIcon && (
            <svg
              className={styles.SelectForm__icon}
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5003 7.91634L10.3337 12.083L6.16699 7.91634"
                stroke="var(--fourth-color)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        {active && (
          <ul
            className={styles.SelectForm__list}
            // onFocus={(e) => console.log(e)}
          >
            {items?.length ? (
              <>
                {items?.map((item) => (
                  <li
                    key={item.value}
                    className={styles.SelectForm__item}
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
                ))}
                {withReset && (
                  <li
                    className={styles.SelectForm__item}
                    onClick={() => {
                      setValue("");
                      setActive(false);
                      typeof onChange === "function" &&
                        onChange({
                          value: "",
                          name: "",
                        });
                    }}
                  >
                    Reset value
                  </li>
                )}
              </>
            ) : (
              <li className={styles.SelectForm__item}>No data</li>
            )}
          </ul>
        )}
      </div>
    </Control>
  );
}
