import React from "react";
import styles from "./chat.module.scss";

function Chat() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.senderContainer}>
          <div className={styles.sender}>
            <div className={styles.messageContent}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              nobis molestiae pariatur explicabo? Corrupti similique sapiente
              dolore inventore ipsum hic.
            </div>

            <div className={styles.senderContainer}>
              <div className={styles.timestamp}>Jan 12, 09:34 AM</div>
            </div>
          </div>
        </div>
        <div className={styles.recieverContainer}>
          <div className={styles.reciever}>
            <div className={styles.messageContent}>
              Lorem ipsum dolor sit, amet .
            </div>

            <div className={styles.recieverContainer}>
              <div className={styles.timestamp}>Jan 12, 12:12 PM</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
}

export default Chat;
