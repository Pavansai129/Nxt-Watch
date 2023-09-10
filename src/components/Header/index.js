import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {HiMoon, HiOutlineSun} from 'react-icons/hi'
import {FiLogOut} from 'react-icons/fi'
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
  LogoutLogoButton,
} from './styledComponents'
import PopupMenu from '../PopupMenu'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value
      const onClickTheme = () => {
        changeTheme()
      }
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
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
              <LogoutLogoButton type="button" onClick={onClickLogout}>
                <FiLogOut color={isDarkTheme ? '#f9f9f9' : '#181818'} />
              </LogoutLogoButton>
            </HeaderItem>
          </HeaderControlsContainer>
        </HeaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
