import Layout from '../../components/layout'
import Head from 'next/head'
function CharacterDetail({ character }) {
  console.log(character)
  return (
    <>
      <Layout>
        <Head>
          <title>{character.name} sayfasına hoş geldiniz!</title>
        </Head>
        <div>{character.name}</div>
      </Layout>
    </>
  )
}
export async function getStaticPaths() {
  const res = await fetch('https://rickandmortyapi.com/api/character/')
  const characters = await res.json()

  const paths = characters.results.map((character) => {
    return { params: { id: `${character.id}` } }
  })
  //console.log(paths)
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps(params) {
  var data = params
  //console.log(data)
  //data fetch
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${data.params.id}`
  )
  const character = await res.json()
  // console.log(data.results)
  return {
    props: {
      character: character
    }
  }
}
export default CharacterDetail
