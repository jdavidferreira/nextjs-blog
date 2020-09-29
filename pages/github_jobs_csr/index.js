import Head from 'next/head'
import getConfig from 'next/config'
import useSWR from 'swr'

import Date from 'components/Date'
import Job from 'components/JobCard/JobCard'
import Layout from 'components/Layout/Layout'
import utilStyles from 'styles/utils.module.css'
import styles from './index.module.css'

const { publicRuntimeConfig } = getConfig()

// Client-side rendered page
export default function CsrGithubJobList() {
  const {
    data,
    error,
  } = useSWR(`${publicRuntimeConfig.githubJobsApiUrl}positions`, (resource) =>
    fetch(resource).then((res) => res.json())
  )

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
          {error ? (
            <div>Failed to load.</div>
          ) : !data ? (
            <div>Loading...</div>
          ) : (
            data.map((job) => <Job key={job.id} {...job} />)
          )}
        </div>
      </article>
    </Layout>
  )
}
