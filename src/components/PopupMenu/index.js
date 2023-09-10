import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {SiYoutubegaming} from 'react-icons/si'
import {IoMdClose} from 'react-icons/io'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  MenuContainer,
  PopupMenuButton,
  PopupMenuContainer,
  CloseButtonContainer,
  CloseButton,
  NavLinksContainer,
  NavLink,
  NavLinkItem,
  NavLinkName,
} from './styledComponents'

class PopupMenu extends Component {
  state = {home: true, trending: false, gaming: false, savedVideos: false}

  onClickHome = () => {
    this.setState({
      home: true,
      trending: false,
      gaming: false,
      savedVideos: false,
    })
  }

  onClickTrending = () => {
    this.setState({
      home: false,
      trending: true,
      gaming: false,
      savedVideos: false,
    })
  }

  onClickGaming = () => {
    this.setState({
      home: false,
      trending: false,
      gaming: true,
      savedVideos: false,
    })
  }

  onClickSavedVideos = () => {
    this.setState({
      home: false,
      trending: false,
      gaming: false,
      savedVideos: true,
    })
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {home, trending, gaming, savedVideos} = this.state
          return (
            <MenuContainer className="popup-container">
              <Popup
                modal
                trigger={
                  <PopupMenuButton type="button">
                    <GiHamburgerMenu
                      color={isDarkTheme ? '#f9f9f9' : '#181818'}
                      size="20px"
                    />
                  </PopupMenuButton>
                }
              >
                {close => (
                  <PopupMenuContainer bgColor={isDarkTheme}>
                    <CloseButtonContainer>
                      <CloseButton
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        <IoMdClose
                          color={isDarkTheme ? '#f9f9f9' : '#181818'}
                        />
                      </CloseButton>
                    </CloseButtonContainer>
                    <NavLinksContainer>
                      <NavLinkItem
                        bgColor={isDarkTheme}
                        onClick={this.onClickHome}
                        isActive={home}
                      >
                        <Link to="/">
                          <NavLink>
                            <AiFillHome color="#ff0000" size="18px" />
                            <NavLinkName fontColor={isDarkTheme}>
                              Home
                            </NavLinkName>
                          </NavLink>
                        </Link>
                      </NavLinkItem>
                      <NavLinkItem
                        bgColor={isDarkTheme}
                        onClick={this.onClickTrending}
                        isActive={trending}
                      >
                        <Link to="/">
                          <NavLink>
                            <AiFillFire
                              color={isDarkTheme ? '#f9f9f9' : '#181818'}
                              size="18px"
                            />
                            <NavLinkName fontColor={isDarkTheme}>
                              Trending
                            </NavLinkName>
                          </NavLink>
                        </Link>
                      </NavLinkItem>
                      <NavLinkItem
                        bgColor={isDarkTheme}
                        isActive={gaming}
                        onClick={this.onClickGaming}
                      >
                        <Link to="/">
                          <NavLink>
                            <SiYoutubegaming
                              color={isDarkTheme ? '#f9f9f9' : '#181818'}
                              size="18px"
                            />
                            <NavLinkName fontColor={isDarkTheme}>
                              Gaming
                            </NavLinkName>
                          </NavLink>
                        </Link>
                      </NavLinkItem>
                      <NavLinkItem
                        isActive={savedVideos}
                        onClick={this.onClickSavedVideos}
                      >
                        <Link to="/">
                          <NavLink>
                            <BiListPlus
                              color={isDarkTheme ? '#f9f9f9' : '#181818'}
                              size="18px"
                            />
                            <NavLinkName fontColor={isDarkTheme}>
                              Saved Videos
                            </NavLinkName>
                          </NavLink>
                        </Link>
                      </NavLinkItem>
                    </NavLinksContainer>
                  </PopupMenuContainer>
                )}
              </Popup>
            </MenuContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default PopupMenu
