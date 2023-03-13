import Link from "next/link";
// import Image from "next/image";
import styles from "./styles/404.module.scss";
import Button from "@mui/material/Button";
import ParticleComponent from "@components/particles/";

const Page404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img className={styles.zoro} src="/zoroNotFound.png" alt="zoro lost" />
        <div className={styles.banner}>
          <span>404</span>
          <span>Page Not Found!</span>
        </div>
      </div>
      <div className={styles.msg}>
        <div className={styles.taunt}>
          You are <span>Lost!</span>
        </div>
        <div>
          <Button
            component={Link}
            href="/"
            variant="outlined"
            sx={{
              fontFamily: "var(--codeFont)",
              fontSize: "inherit",
              fontWeight: "inherit",
            }}
            className={styles.button}
          >
            Return Home
          </Button>
        </div>
      </div>
      <ParticleComponent particles={{ count: 110, limit: 110 }} />
    </div>
  );
};

export default Page404;

// TODO: Fix Mix blend mode disabling during transitions
