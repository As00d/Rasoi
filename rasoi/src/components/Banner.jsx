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
      <h2 className="main-heading">
        Life is great, make it better{' '}
        <span className="tapered-paint"> with salads.</span>
      </h2>
      <p className="main-heading-info">
        Enjoy a healthy and fit life by eating delicious and healthy salads.
        Because we are best in town
      </p>
      <Link to="/menu" className="btn btn-primary ">
        View Menu
      </Link>
    </div>
  )
}
const RightSide = () => {
  return (
    <div className="right">
      <h1>hello</h1>
      <img src="../../../public/design/dosa.webp" alt="" height="800px" />
    </div>
  )
}
export default Banner
