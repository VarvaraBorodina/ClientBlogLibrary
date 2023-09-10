import React from "react";

import { ICONS } from "../../constants/icons";

import styles from "./styled.module.scss";
import { NetworksPorps } from "./types";

const { INSTAGRAM, LINKED_IN, FACEBOOK, TWITTER } = ICONS;

export const Networks = (props: NetworksPorps) => {
  const { linkedIn, twitter, facebook, instagram } = props;

  return (
    <div className={styles.social}>
      <a className={styles.link} href={facebook}>
        {FACEBOOK}
      </a>
      <a className={styles.link} href={twitter}>
        {TWITTER}
      </a>
      <a className={styles.link} href={instagram}>
        {INSTAGRAM}
      </a>
      <a className={styles.link} href={linkedIn}>
        {LINKED_IN}
      </a>
    </div>
  );
};
