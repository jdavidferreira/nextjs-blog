import Head from "next/head"
import Date from "components/date"
import Job from "components/JobCard"
import Layout from "components/layout"
import utilStyles from "styles/utils.module.css"
import styles from "./github_jobs.module.css"
import { isObjectEmpty } from "utils/general"

// Server-side rendered page
export default function GithubJobList({ data }) {
  return (
    <Layout>
      <Head>
        <title>Github Jobs</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Github Jobs</h1>
        <div className={utilStyles.lightText}>
          <Date dateString="2020-09-27" />
        </div>
        <p>
          The following page fetches data from the Github Jobs API and renders
          its content at request time.
        </p>
        <div className={styles.jobsContainer}>
          {data.map((job) => {
            return <Job key={job.id} {...job} />
          })}
        </div>
      </article>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const url = new URL(process.env.GITHUB_JOBS_API_URL)

  url.pathname = "/positions.json"

  if (!isObjectEmpty(query)) {
    for (const key in query) {
      const value = query[key]

      if (value != null && value !== "") url.searchParams.append(key, value)
    }
  }

  const res = await fetch(url)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
