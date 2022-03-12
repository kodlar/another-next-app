import Nav from '../components/navigation'
import Head from 'next/head'
const current = new Date()
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="text/html; charset=UTF-8" />
      </Head>
      <Nav />
      <main>{children}</main>
      <footer>Tarih: {date}</footer>
    </>
  )
}

export default Layout
