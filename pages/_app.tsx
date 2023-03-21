import "./assets/css/vendor/bootstrap.min.css"
import "./assets/css/vendor/slick.css"
import "./assets/css/vendor/slick-theme.css"
import "./assets/css/vendor/aos.css"
import "./assets/css/plugins/feature.css"
import "./assets/css/style.css"
//import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
