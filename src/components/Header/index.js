import {Link, withRouter} from 'react-router-dom'
import {HiMoon, HiOutlineSun} from 'react-icons/hi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HeaderContainer,
  LogoContainer,
  AppLogo,
  HeaderControlsContainer,
  HeaderItem,
  HeaderThemeButton,
  HeaderButton,
  ProfileLogo,
} from './styledComponents'
import PopupMenu from '../PopupMenu'
import PopupLogout from '../PopupLogout'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value
      const onClickTheme = () => {
        changeTheme()
      }
      const appLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      return (
        <HeaderContainer bgColor={isDarkTheme}>
          <Link to="/">
            <LogoContainer>
              <AppLogo src={appLogo} alt="website logo" />
            </LogoContainer>
          </Link>

          <HeaderControlsContainer>
            <HeaderItem>
              <HeaderThemeButton onClick={onClickTheme}>
                {isDarkTheme ? (
                  <HiOutlineSun color={isDarkTheme ? '#f9f9f9' : '#181818'} />
                ) : (
                  <HiMoon color={isDarkTheme ? '#f9f9f9' : '#181818'} />
                )}
              </HeaderThemeButton>
            </HeaderItem>
            <HeaderItem>
              <HeaderButton type="button">
                <PopupMenu />
                <ProfileLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </HeaderButton>
            </HeaderItem>
            <HeaderItem>
              <PopupLogout />
            </HeaderItem>
          </HeaderControlsContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
