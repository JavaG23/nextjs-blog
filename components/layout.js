import Head from 'next/head'
import Link from 'next/link'
import Header from "./header"
import Footer from "./footer"
import styles from './layout.module.css'


const name = 'geofhoffman.com'
export const siteTitle = 'geofhoffman.com'
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="og:title" content={siteTitle} />
              <link rel="icon" href="/favicon.ico" />
              <meta
                name="description"
                content="geoff's website"
              />

              <meta name="og:title" content={siteTitle} />

              <meta name="og:title" content={siteTitle} />
              <meta name="twitter:card" content="summary_large_image" />
            </Head>



            <main>{children}</main>
            <Footer />
            {!home && (
              <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
              </div>
            )}
          </div>
          )
}
