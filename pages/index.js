import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Under Construction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome Weary Traveler
        </h1>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h3>Who am I? &rarr;</h3>
              <p>Who am I but a droplet in the ocean?</p>
            </a>
          </Link>

          <Link href="/projects">
            <a className={styles.card}>
              <h3>Projects &rarr;</h3>
              <p>Find all my projects here</p>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
