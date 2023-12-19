import styles from "./styles/Loading.module.css";

const Loading = () => {
  return (
      <div className={styles.property1default}>
        <div className={styles.property1defaultChild} />
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
      </div>
  );
};

export default Loading;
