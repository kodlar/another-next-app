import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import slug from 'slug'
function Home({ test }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Anasayfa</title>
        </Head>

        <h1>Merhaba</h1>
        <ul>
          {test.map((tes) => (
            <li key={tes.id}>
              <Link
                href='/character/[slug]'
                 as={`/character/${slug(tes.name)}-${tes.id}`}
              >
                <a>{tes.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  //data fetch
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json()
  // console.log(data.results)
  return {
    props: {
      test: data.results
    }
  }
}
export default Home
