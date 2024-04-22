import styles from "@/styles/Home.module.css";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <>
      <head>
        <title>João Costa</title>
      </head>
      <main className={`${styles.main}`}>
        <Spline scene="https://prod.spline.design/J23mxR-PJf2vR0FZ/scene.splinecode" />
      </main>
    </>
  );
}
