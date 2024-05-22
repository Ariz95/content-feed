import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import { Modal } from "../Modal";
import { useModal } from "../../../hooks/useModal";
import { Comments } from "../Comments/Comments";
import { Welcome } from ".";

export const Card = ({
  id,
  imageUri,
  textData,
  metadata,
  comments,
}: Welcome) => {
  const { open, openModal, closeModal } = useModal();

  return (
    <div className={styles.card}>
      <Image
        src={imageUri}
        alt="Image Uri"
        width={400}
        height={400}
        style={{
          maxWidth: "100%",
          height: "350px",
          objectFit: "fill",
        }}
      />
      <div className={styles.body}>
        <div className={styles.title}>
          <span>{textData.title}</span>
          <span>{`${textData.author.first} ${" "} ${
            textData.author.last
          }`}</span>
        </div>
        <span>{textData.subTitle}</span>
        {textData.body.length > 50 ? (
          <span className={styles.content}>
            {textData.body.substring(0, 50) + "...Read More"}
          </span>
        ) : (
          <span className={styles.content}>textData.body</span>
        )}
        <div className={styles.comments}>
          <button className={styles["modal-button"]} onClick={openModal}>
            Comments
          </button>
        </div>
        <Modal open={open} handleClose={closeModal}>
          <Comments comments={comments} />
        </Modal>
      </div>
    </div>
  );
};
