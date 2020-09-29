import Head from 'next/head'
import Date from 'components/Date'
import Layout from 'components/Layout/Layout'
import utilStyles from 'styles/utils.module.css'
import styles from './index.module.css'

// Server-side rendered page
export default function GithubJobShow({
  data: {
    id,
    type,
    url,
    created_at,
    company,
    company_url,
    company_logo,
    location,
    title,
    description,
    how_to_apply,
  },
}) {
  return (
    <Layout>
      <Head>
        <title>Github Jobs - {title}</title>
      </Head>

      <h3 className={utilStyles.headingMd}>Title</h3>
      <p>{title}</p>
      <h3 className={utilStyles.headingMd}>Type</h3>
      <p>{type}</p>
      <h3 className={utilStyles.headingMd}>Created at</h3>
      <Date dateString={created_at} />
      <h3 className={utilStyles.headingMd}>Company</h3>
      <a href={company_url} target="_blank">
        <img src={company_logo} alt={`${company} Company logo`} />
        {company}
      </a>
      <h3 className={utilStyles.headingMd}>Location</h3>
      <p>{location}</p>

      <h3 className={utilStyles.headingMd}>Description</h3>
      <article
        className={styles.jobDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <h3 className={utilStyles.headingMd}>How to apply?</h3>
      <article
        className={styles.jobDescription}
        dangerouslySetInnerHTML={{ __html: how_to_apply }}
      />
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const url = new URL(process.env.GITHUB_JOBS_API_URL)

  url.pathname = `/positions/${query.job_id}.json`

  const res = await fetch(url)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
