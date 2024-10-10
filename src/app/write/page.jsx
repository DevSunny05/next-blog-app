"use client";

import React, { useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor} onClick={() => setOpen(!open)}>
        <button className={styles.button}>
          <Image src={"/plus.png"} alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src={"/image.png"} alt="" width={16} height={16} />
            </button>

            <button className={styles.addButton}>
              <Image src={"/external.png"} alt="" width={16} height={16} />
            </button>

            <button className={styles.addButton}>
              <Image src={"/video.png"} alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your stories..."
          className={styles.textarea}
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
