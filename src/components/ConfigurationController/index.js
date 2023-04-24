import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const contextShow = () => {
        onToggleShowContent()
      }

      const leftNavbarShow = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const rightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="controller-bg-container">
          <h1 className="title-layout">Layout</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="context"
              onChange={contextShow}
              checked={showContent}
            />
            <label htmlFor="context" className="label">
              Content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="left-navbar"
              onChange={leftNavbarShow}
              checked={showLeftNavbar}
            />
            <label htmlFor="left-navbar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="right-navbar"
              onChange={rightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="right-navbar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
