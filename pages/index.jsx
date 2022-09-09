import Head from 'next/head'

import Date from '../components/Date'
import Footer from '../components/Footer'
import Forex from '../components/Forex'
import Navbar from '../components/Navbar'
import NewsCard from '../components/NewsCard'

import { fetchForex, fetchNews } from '../utils/fetchApi'

export default function Home({ headline, forex }) {
  const { articles } = headline;
  const { conversion_rates } = forex;

  // loop conversion_rates object into an array named entries
  const entries = Object.entries(conversion_rates);

  // remove USD which is the first element in entries array
  entries.shift();

  //_________________________________________________________________
  return (
    <div>
      <Head>
        <title>SOBA</title>
        <meta name="Learn Japanese through news" content="Japanese news" />
        <link rel="icon" href="/soba_favicon.ico" />
      </Head>

      <Navbar />
      <Forex entries={entries} />

      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium text-gray-800 capitalize lg:text-3xl">
              <Date />
            </h1>

            <button className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800 transition-colors duration-300 transform hover:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <hr className="my-8 border-gray-300" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article, index) => {
              const { title, description, url, urlToImage, author } = article
              return (
                <NewsCard key={index} title={title} description={description} image={urlToImage} author={author} url={url} />
              )
            })}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const headline = await fetchNews();
  const forex = await fetchForex();

  return { props: { headline, forex } }
}
