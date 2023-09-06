import React from "react";

import { Category as CategoryType } from "./types";

import styles from "./styled.module.scss";

export const Category = ({
  category,
  icon,
  full,
}: {
  category: CategoryType;
  full: boolean;
  icon: JSX.Element;
}) => {
  const { name, description } = category;

  return (
    <div className={styles.container}>
      <div className={full ? "" : styles.flex}>
        <div className={styles.icon}>{icon}</div>
        <h6 className={styles.title}>{name}</h6>
      </div>
      {full && <p className={styles.description}>{description}</p>}
    </div>
  );
};
