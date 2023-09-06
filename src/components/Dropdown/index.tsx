"use client";

import React, { useState } from "react";

import { ICONS } from "../../constants/icons";

import styles from "./styled.module.scss";
import { DropdownType } from "./types";

const { ARROW } = ICONS;

export const Dropdown = ({ title, changeOption, options }: DropdownType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [curentOption, setCurrentOption] = useState<string>(title);

  const handleOnOptionClick = (optionName: string) => () => {
    changeOption(optionName);
    setIsOpen(false);
    setCurrentOption(optionName);
  };

  return (
    <div className={styles.container}>
      <div onClick={() => setIsOpen(true)} className={styles.title}>
        <input readOnly value={curentOption} className={styles.input} />
        {ARROW}
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option: string) => (
            <li
              key={option}
              onClick={handleOnOptionClick(option)}
              className={styles.option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
