import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
            fuga!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Sarang</span>
              <span className={styles.date}>01.02.1698</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
         <div className={styles.desc}>
         <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            dolorem harum magni dolores illum autem sint sequi repellendus,
            doloribus fugiat saepe iusto minima, nobis aliquam excepturi ad
            eveniet possimus dolorum.
          </p>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            dolorem harum magni dolores illum autem sint sequi repellendus,
            doloribus fugiat saepe iusto minima, nobis aliquam excepturi ad
            eveniet possimus dolorum.
          </p>
          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, itaque!</h4>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            dolorem harum magni dolores illum autem sint sequi repellendus,
            doloribus fugiat saepe iusto minima, nobis aliquam excepturi ad
            eveniet possimus dolorum.
          </p>
         </div>
        <div className={styles.comment}>
            <Comments/>
        </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
