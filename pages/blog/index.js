import Head from "next/head"
import Layout from "components/Layout/Layout"
import Date from "components/Date"
import utilStyles from "styles/utils.module.css"
import { getSortedPostsData } from "lib/posts"
import Link from "next/link"

export default function Posts({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>Blog</h1>
        <p>This Blog section use Static Generation with Data fetching.</p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/posts/${id}`}>
                <a>{title}</a>
              </Link>
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

export function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}
