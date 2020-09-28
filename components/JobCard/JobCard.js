import Link from "next/link"
import Date from "components/Date"
import styles from "./JobCard.module.css"

export default function JobCard({
  id,
  type,
  created_at,
  company,
  company_logo,
  location,
  title,
}) {
  return (
    <Link href={`/github_jobs/${id}`}>
      <a className={styles.link}>
        <div className={styles.container}>
          <img
            src={company_logo}
            alt={`${company} Company logo`}
            className={styles.companyLogo}
          />
          <div>
            <b>{title}</b>
            <div>{type}</div>
            <div>{company}</div>
            <div>{location}</div>
            <small>
              <Date dateString={created_at} />
            </small>
          </div>
        </div>
      </a>
    </Link>
  )
}
