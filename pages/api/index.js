import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
  
      <section className={utilStyles.headingMd}>
        <p>Hey there! Welcome to my homepage. As you might have guessed, my name is Geoff Hoffman. I use this domain to practice deploying different web applications, usually built with the latest framework or language that I'm working with, typically in the form of a blog. In the past, it's been a static Flask, Django and React app. Currently it is a built with the next.js framework, headless CMS and tailwind. This may be the final framework as I plan to begin linking other apps built with different frameworks to a portfolio subdomain.
          </p>
        <p>
         I also plan to use this domain as a blog, calendar, and message board for friends and family, and as a fun way to test internet exposed IOT devises on my home network. Check back in the future for updates and cool news and info.  
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
