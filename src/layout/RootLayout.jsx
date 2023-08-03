import { Outlet } from 'react-router-dom'
import NavBar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const RootLayout = () => {
  return (
    <div className="root-layout">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
