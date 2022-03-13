import Layout from '../../components/layout'
import Head from 'next/head'
import slug from 'slug'
function CharacterSlugDetail({ character }) {
  console.log(character)
  return (
    <>
      <Layout>
        <Head>
          <title>{character.name} sayfasına hoş geldiniz!</title>
        </Head>
        <div>{character.name}</div>
        <figure>
          <img src={character.image} alt={character.name} />
        </figure>
        
      </Layout>
    </>
  )
}
export async function getStaticPaths() {
  const res = await fetch('https://rickandmortyapi.com/api/character/')
  const characters = await res.json()

  const paths = characters.results.map((character) => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } }
  })
  //console.log(paths)
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps(params) {
  var data = params
  const id = data.params.slug.split('-').slice(-1)[0];
  //console.log(id);

  //data fetch
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  )
  const character = await res.json()
  // console.log(data.results)
  return {
    props: {
      character: character
    }
  }
}
export default CharacterSlugDetail
