import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404 - Halaman Tidak Ditemukan</title>
                <meta
                    name="description"
                    content="Maaf, halaman yang Anda cari tidak ditemukan."
                />
            </Head>
            <div className={styles.error}>
                {/* <img
                    src="/page-not-found.png"
                    alt="404 - Halaman tidak ditemukan"
                    className={styles.error_image}
                /> */}
                <Image
                    src="/page-not-found.png"
                    alt="404"
                    className={styles.error_image}
                    width={400}
                    height={200}
                />
                <h1>404 - Halaman Tidak Ditemukan</h1>
                <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
                <Link href="/" className={styles.button}>
                    Kembali ke Home
                </Link>
            </div>
        </>
    );
};

export default Custom404;