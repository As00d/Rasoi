import {Link} from 'react-router'
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner">
      <LeftSide />
      <RightSide />
    </div>
  )
}

const LeftSide = () => {
  return (
    <div className="left">
      <h3 className="logo">ACT HEALTHY. BE HEALTHY. EAT HEALTHY</h3>
      <h2>Life is great make it better with salads.</h2>
      <p>
        Enjoy a healthy and fit life by eating delicious and healthy
        salads.Because we are best in town
      </p>
      <Link to="/menu">View Menu</Link>
    </div>
  )
}
const RightSide = () => {
  return (
    <div className="right">
      <h1>hello</h1>
      <img src="../../../public/design/dosa.webp" alt="" />
    </div>
  )
}
export default Banner
