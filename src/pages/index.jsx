import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PuroJecuto -- proyect manager</title>
        <meta name="description" content="proyect manager" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome Team</h1>
      </main>
    </div>
  );
}
