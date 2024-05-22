import React from "react";
import styles from "./Grid.module.css";
import { Props as GridProps } from ".";

export const Grid = ({ children }: GridProps) => {
  return <div className={styles.grid}>{children}</div>;
};
