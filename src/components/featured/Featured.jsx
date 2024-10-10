import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey,sarang here!</b> dolor sit amet consectetur adipisicing elit.
        Inventore, aliquam!
      </h1>

      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={"/p1.jpeg"} alt="" fill />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            pariatur hic,
          </h1>

          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in
            doloremque eaque esse nobis nulla amet minus reprehenderit numquam
            rem mollitia provident, accusamus, commodi hic repellendus! Ipsa
            ipsam neque voluptate!
          </p>

          <button className={styles.postButton}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
