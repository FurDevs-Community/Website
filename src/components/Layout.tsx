import { ReactElement } from "react"
import Footer from "./BaseFooter"
import Navbar from "./BaseNavbar"

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
