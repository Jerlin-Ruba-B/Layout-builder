import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h1 className="navbar-heading">Left Navbar Menu</h1>
              <ul>
                <li className="menus">item 1</li>
                <li className="menus">item 2</li>
                <li className="menus">item 3</li>
                <li className="menus">item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-bg-container">
              <h1 className="navbar-heading">Content</h1>
              <p className="menus">
                Lorem ipsum Anything else in this container{' '}
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="left-navbar-container">
              <h1 className="navbar-heading">Right Navbar Menu</h1>
              <div className="ad1-container">
                <p className="ad">Ad 1</p>
              </div>
              <div className="ad1-container">
                <p className="ad">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
