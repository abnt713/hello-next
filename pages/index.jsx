import Layout from '../components/MyLayout.jsx'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-next" title="Hello Next.js" />
        <PostLink id="learn-nextjs-is-awesome" title="Learn Next.js is awesome" />
        <PostLink id="deploy-apps-with-zeit" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}
