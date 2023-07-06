import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import CustomContextMenu from "../components/CustomContextMenu"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <><CustomContextMenu /><Component {...pageProps} /></>
)
}
