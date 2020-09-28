import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "components/layout"
import utilStyles from "styles/utils.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm David. I'm a Software developer.</p>
        <p>
          This example website is built using{" "}
          <a href="https://nextjs.org/">Next.js</a> and its objective is to
          demonstrate the core concepts of this React framework.
        </p>
        <ul>
          <li>
            <Link href="/blog">
              <a>Blog (Static Generation)</a>
            </Link>
          </li>
          <li>
            <Link href="/github_jobs">
              <a>Github Jobs (Server-side Rendering)</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}
