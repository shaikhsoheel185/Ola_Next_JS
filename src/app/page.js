
import HomeNavbar from './components/user/HomePage/HomeNavbar'
import Banner from './components/user/HomePage/Banner'
import CarVideoSection from './components/user/HomePage/CarVideoSection'
import Footer from './components/user/HomePage/Footer'

export default function Home() {
  return (
    <main className="">
      <HomeNavbar/>
      <Banner />
      <CarVideoSection />
      <Footer/>
    </main>
  )
}
