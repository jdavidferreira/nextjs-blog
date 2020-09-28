import Head from "next/head"
import Date from "components/date"
import Layout from "components/layout"
import utilStyles from "styles/utils.module.css"
import { getAllPostIds, getPostData } from "lib/posts"

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h2 className={utilStyles.headingMd}>{postData.title}</h2>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

/**
 * Returns an array of objects :
 *
 *  [
 *    { params: { id: "pre-rendering" } },
 *    { params: { id: "ssg-ssr" } },
 *  ]
 *
 * development:  runs on every request.
 * production: runs on build itme
 */
export async function getStaticPaths() {
  const paths = getAllPostIds()

  // Instead of the file system,
  // fetch post data from an external API endpoint
  // const res = await fetch('..')
  // const posts = await res.json()
  // return posts.map(post => {
  //   return {
  //     params: {
  //       id: post.id
  //     }
  //   }
  // })

  return {
    paths,
    fallback: false,
  }
}

/**
 * Returns an object with props property:
 *
 *  { id: 'ssg-ssr' }
 */
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}
