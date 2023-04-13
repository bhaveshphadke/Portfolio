import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import {Roboto} from 'next/font/google'
const roboto = Roboto({
  weight:'400',
  subsets:['latin']
})
export default function App({ Component, pageProps }) {
  return (

    <main className={roboto.className}>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </main>
  )
}
