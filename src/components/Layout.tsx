import Footer from "./BaseFooter"
import Navbar from "./BaseNavbar"

interface ILayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return(
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}