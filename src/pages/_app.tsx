import '../styles/globals.scss'
import "../styles/text.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <ToastContainer/>
<Component {...pageProps} />

    </>
  )
}
