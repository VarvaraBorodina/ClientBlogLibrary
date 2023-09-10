import React from "react";

import { ICONS } from "../../constants/icons";

import styles from "./styled.module.scss";
import { NetworksPorps } from "./types";

const { INSTAGRAM, LINKED_IN, FACEBOOK, TWITTER } = ICONS;

export const Networks = (props: NetworksPorps) => {
  const { linkedIn, twitter, facebook, instagram } = props;
  return (
    <div className={styles.social}>
      <a href={facebook} className={styles.link}>
        {FACEBOOK}
      </a>
      <a href={twitter} className={styles.link}>
        {TWITTER}
      </a>
      <a href={instagram} className={styles.link}>
        {INSTAGRAM}
      </a>
      <a href={linkedIn} className={styles.link}>
        {LINKED_IN}
      </a>
    </div>
  );
};
