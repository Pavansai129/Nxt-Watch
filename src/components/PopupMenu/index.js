import {Component} from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiFire} from 'react-icons/hi'
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
  NavLinkItem,
  NavLinkButton,
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
          const iconColor = isDarkTheme ? '#f8fafc' : '#212121'
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
                    <NavLinksContainer bgColor={isDarkTheme}>
                      <NavLinkItem>
                        <Link to="/">
                          <NavLinkButton
                            onClick={this.onClickHome}
                            isActive={home}
                          >
                            <AiFillHome
                              size="18px"
                              color={home ? '#ff0000' : iconColor}
                            />
                            <NavLinkName fontColor={isDarkTheme}>
                              Home
                            </NavLinkName>
                          </NavLinkButton>
                        </Link>
                      </NavLinkItem>
                      <NavLinkItem>
                        <Link to="/trending">
                          <NavLinkButton
                            onClick={this.onClickTrending}
                            isActive={trending}
                          >
                            <HiFire
                              size="18px"
                              color={trending ? '#ff0000' : iconColor}
                            />
                            <NavLinkName fontColor={isDarkTheme}>
                              Trending
                            </NavLinkName>
                          </NavLinkButton>
                        </Link>
                      </NavLinkItem>
                      <NavLinkItem>
                        <Link to="/gaming">
                          <NavLinkButton
                            onClick={this.onClickGaming}
                            isActive={gaming}
                          >
                            <SiYoutubegaming
                              size="18px"
                              color={gaming ? '#ff0000' : iconColor}
                            />
                            <NavLinkName fontColor={isDarkTheme}>
                              Gaming
                            </NavLinkName>
                          </NavLinkButton>
                        </Link>
                      </NavLinkItem>
                      <NavLinkItem>
                        <Link to="/saved-videos">
                          <NavLinkButton
                            onClick={this.onClickSavedVideos}
                            isActive={savedVideos}
                          >
                            <BiListPlus
                              size="20px"
                              color={savedVideos ? '#ff0000' : iconColor}
                            />
                            <NavLinkName fontColor={isDarkTheme}>
                              Saved Videos
                            </NavLinkName>
                          </NavLinkButton>
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
