import React from "react";
import { Props as ModalProps } from ".";
import { useModal } from "../../../hooks/useModal";
import styles from "./Modal.module.css";
import classNames from "classnames";

export const Modal = ({ open, handleClose, children }: ModalProps) => {
  const modalClass = classNames(styles["modal"], {
    [styles["show"]]: open,
  });

  return (
    <div className={modalClass}>
      <div
        className={`${styles["modal-content"]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={`${styles["close"]}`} onClick={handleClose}>
          &times;
        </span>
        <div className={styles["modal-body"]}>{children}</div>
      </div>
    </div>
  );
};
