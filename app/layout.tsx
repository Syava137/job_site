import './global.css'
import { montserratAlternates } from "./ui/fonts"
import Header from './ui/components/header/header'
import Footer from './ui/components/footer/footer'

export default function RootLayout({ children }:{ children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={montserratAlternates.className}>
                <Header></Header>
                { children }
                <Footer></Footer>
            </body>
        </html>
    )
}