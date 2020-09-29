import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from 'components/Layout/Layout'
import utilStyles from 'styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm David. I'm a Software developer.</p>
        <p>
          This example website is built using{' '}
          <a href="https://nextjs.org/">Next.js</a> and its objective is to
          demonstrate the core concepts of this React framework.
        </p>
        <ul>
          {mainPages.map((page) => (
            <li key={page.path}>
              <Link href={page.path}>
                <a>{page.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

const mainPages = [
  {
    name: 'Blog (Static Generation)',
    path: '/blog',
  },
  {
    name: 'Github Jobs (Server-side Rendering)',
    path: '/github_jobs',
  },
  {
    name: 'Github Jobs (Client-side Rendering)',
    path: '/github_jobs_csr',
  },
]
