import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import stylesInput from "../../ui/Input/style.module.scss";
import Control from "../../ui/Control";
// import Input from '../Input/Input';

export default function SelectForm({
  className,
  label,
  error,
  inputClassName,
  iconClassName,
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
  leftContent = null,
  resetField,
}) {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const clearValue = {
    value: "",
    name: "",
  };

  useEffect(() => {
    if (value && defaultValue) return;

    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (typeof setValueHookForm !== "function") return;

    setValueHookForm(name, value?.value);
  }, [value]);

  const styleSelectClassName = className ? " " + className : "";
  const styleInputClassName = inputClassName ? " " + inputClassName : "";
  const styleiconClassName = iconClassName ? " " + iconClassName : "";

  const styleClass = styles["SelectForm_style_" + styleColor];
  const styleLink = styleClass
    ? " " + styleClass
    : " " + styles["SelectForm_style_white"];

  const controlRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (controlRef.current && !controlRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [controlRef]);

  return (
    <Control className={className} label={label} error={error} isDiv>
      <div className={styles.SelectForm} ref={controlRef}>
        <div
          className={styles.SelectForm__switch + styleSelectClassName}
          onClick={() => setActive(!active)}
        >
          {leftContent}
          <input {...register(name, rules)} hidden />
          <input
            className={
              stylesInput.input +
              " " +
              styles.SelectForm__input +
              styleInputClassName
            }
            placeholder={placeholder}
            defaultValue={value?.value}
            value={value?.name}
            readOnly
          />
          {withIcon && (
            <svg
              className={styles.SelectForm__icon + styleiconClassName}
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
          <ul className={styles.SelectForm__list}>
            {items?.length ? (
              <>
                {items?.map((item) => (
                  <li
                    key={item.value}
                    className={styles.SelectForm__item}
                    onClick={() => {
                      setValue(item);
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
                      setValue(clearValue);
                      setActive(false);
                      typeof onChange === "function" && onChange(clearValue);
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
