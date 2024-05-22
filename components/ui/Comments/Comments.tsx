import React from "react";
import styles from "./Comments.module.css";
import { Props as CommentsProps } from ".";

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className={styles.comments}>
      <h4>comments</h4>
      {comments.map(({ author, text, profilePic }) => {
        return (
          <div className={styles.comment}>
            <img src={profilePic} alt="author" />
            <div className={styles.text}>
              <div className="author">{author}</div>
              <div className={styles.description}>{text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
