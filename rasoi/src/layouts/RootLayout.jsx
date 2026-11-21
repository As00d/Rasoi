import {Outlet} from 'react-router'
import Navbar from '../components/Navbar'
import './RootLayout.css'

const RootLayout = () => {
  return (
    <div className="root-container">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default RootLayout
