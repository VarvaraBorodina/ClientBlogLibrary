import React from "react";

import { Networks } from "../Networks";
import { Author as AuthorType } from "./types";

import styles from "./styled.module.scss";

export const Author = ({
  author,
  role,
}: {
  author: AuthorType;
  role: string;
}) => {
  const { photo, name, lastName, networks } = author;
  const { linkedIn, facebook, instagram, twitter } = networks;

  return (
    <div className={styles.container}>
      <img src={photo} alt={name} className={styles.image} />
      <p className={styles.title}>{`${name} ${lastName}`}</p>
      <p className={styles.description}>{role}</p>
      <Networks
        linkedIn={linkedIn}
        facebook={facebook}
        instagram={instagram}
        twitter={twitter}
      />
    </div>
  );
};
