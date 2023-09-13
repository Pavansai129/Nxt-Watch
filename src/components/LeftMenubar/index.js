import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LeftMenubarContainer,
  NavLinksContainer,
  NavLinkItem,
  NavLinkButton,
  NavLinkName,
  ContactContainer,
  ContactText,
  SocialMediaContainer,
  SocialMediaIcon,
} from './styledComponents'

class LeftMenubar extends Component {
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
          console.log(home, trending, gaming, savedVideos)
          const iconColor = isDarkTheme ? '#f8fafc' : '#212121'
          return (
            <LeftMenubarContainer bgColor={isDarkTheme}>
              <NavLinksContainer bgColor={isDarkTheme}>
                <NavLinkItem>
                  <Link to="/">
                    <NavLinkButton onClick={this.onClickHome} isActive={home}>
                      <AiFillHome
                        size="18px"
                        color={home ? '#ff0000' : iconColor}
                      />
                      <NavLinkName fontColor={isDarkTheme}>Home</NavLinkName>
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
                      <NavLinkName fontColor={isDarkTheme}>Gaming</NavLinkName>
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
              <ContactContainer>
                <ContactText fontColor={isDarkTheme}>CONTACT US</ContactText>
                <SocialMediaContainer>
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContainer>
                <ContactText fontColor={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactText>
              </ContactContainer>
            </LeftMenubarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LeftMenubar
