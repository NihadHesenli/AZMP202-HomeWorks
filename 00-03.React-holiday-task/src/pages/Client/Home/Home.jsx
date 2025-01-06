import { Helmet } from "react-helmet-async"

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>Home</div>
    </>
  )
}

export default Home