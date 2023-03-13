import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Globalzen Studios</title>
        <meta name="description" content="Connecting Communinites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed w-full h-full z-0">
        <video
          className="w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
        >
          <source src="/pexels-louai-munajim-5818973.mp4" type="video/mp4" />
        </video>
      </div>

      <main className="relative z-10 mt-32 justify-center items-center">
        <div mt-28>
        <div>
          <h1 className="text-white text-8xl text-center text-bold py-40">Globalzen Studios</h1>
 
       </div>
        <div className={styles.grid}>
          {/* <a
            href="/mission"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Mission <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Globalzens Studios!
            </p>
          </a>

          <a
            href="/events"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Events <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              May Mental Heath Calendar
            </p>
          </a>

          <a
            href="/about"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
          </a> */}
        </div>
        </div>
      </main>
    </>
  )
}

