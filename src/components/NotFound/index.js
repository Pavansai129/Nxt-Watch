import {AiFillHome, AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {BiListPlus} from 'react-icons/bi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomeBodyContainer,
  LeftMenubarContainer,
  NavLinksContainer,
  NavLinkItem,
  NavLinkButton,
  NavLinkName,
  ContactContainer,
  ContactText,
  SocialMediaContainer,
  SocialMediaIcon,
  NoResultsViewContainer,
  NoResultsContainer,
  NoResultsImage,
  NoResultsViewHeading,
  NoResultsViewCaption,
  RetryButton,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const iconColor = isDarkTheme ? '#f8fafc' : '#212121'
      const notFoundImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <HomeBodyContainer>
            <LeftMenubarContainer bgColor={isDarkTheme}>
              <NavLinksContainer bgColor={isDarkTheme}>
                <NavLinkItem>
                  <Link to="/">
                    <NavLinkButton>
                      <AiFillHome size="18px" color={iconColor} />
                      <NavLinkName fontColor={isDarkTheme}>Home</NavLinkName>
                    </NavLinkButton>
                  </Link>
                </NavLinkItem>
                <NavLinkItem>
                  <Link to="/trending">
                    <NavLinkButton>
                      <HiFire size="18px" color={iconColor} />
                      <NavLinkName fontColor={isDarkTheme}>
                        Trending
                      </NavLinkName>
                    </NavLinkButton>
                  </Link>
                </NavLinkItem>
                <NavLinkItem>
                  <Link to="/gaming">
                    <NavLinkButton>
                      <SiYoutubegaming size="18px" color={iconColor} />
                      <NavLinkName fontColor={isDarkTheme}>Gaming</NavLinkName>
                    </NavLinkButton>
                  </Link>
                </NavLinkItem>
                <NavLinkItem>
                  <Link to="/saved-videos">
                    <NavLinkButton>
                      <BiListPlus size="20px" color={iconColor} />
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
            <NoResultsViewContainer bgColor={isDarkTheme}>
              <NoResultsContainer>
                <NoResultsImage src={notFoundImageUrl} alt="failure" />
                <NoResultsViewHeading fontColor={isDarkTheme}>
                  Page Not Found
                </NoResultsViewHeading>
                <NoResultsViewCaption fontColor={isDarkTheme}>
                  We are having some trouble to complete your request. Please
                  try again.
                </NoResultsViewCaption>
              </NoResultsContainer>
            </NoResultsViewContainer>
          </HomeBodyContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
