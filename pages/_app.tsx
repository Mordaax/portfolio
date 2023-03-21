import "@/public/assets/css/vendor/bootstrap.min.css"
import "@/public/assets/css/vendor/slick.css"
import "@/public/assets/css/vendor/slick-theme.css"
import "@/public/assets/css/vendor/aos.css"
import "@/public/assets/css/plugins/feature.css"
import "@/public/assets/css/style.css"
//import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
