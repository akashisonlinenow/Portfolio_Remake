import Link from "next/link";
import Image from "next/image";
import styles from "./styles/404.module.scss";
import Button from "@mui/material/Button";
import ParticleComponent from "@components/particles/";

const Page404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image
          priority
          width={238}
          height={372}
          src="/notFound.png"
          alt="zoro_lost"
        />
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
