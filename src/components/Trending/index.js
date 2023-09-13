import {Component} from 'react'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {HiMoon, HiOutlineSun, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import PopupLogout from '../PopupLogout'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoadingViewContainer,
  HeaderContainer,
  LogoContainer,
  HeaderAppLogo,
  HeaderControlsContainer,
  HeaderItem,
  HeaderThemeButton,
  HeaderButton,
  ProfileLogo,
  MenuContainer,
  PopupMenuButton,
  PopupMenuContainer,
  CloseButtonContainer,
  CloseButton,
  PopupNavLinksContainer,
  PopupNavLinkItem,
  PopupNavLinkButton,
  PopupNavLinkName,
  TrendingBodyContainer,
  LeftMenubarContainer,
  NavLinksContainer,
  NavLinkItem,
  NavLinkButton,
  NavLinkName,
  ContactContainer,
  ContactText,
  SocialMediaContainer,
  SocialMediaIcon,
  TrendingBannerAndVideosContainer,
  TrendingBannerContainer,
  TrendingIconContainer,
  BannerName,
  TrendingVideosContainer,
  NoResultsViewContainer,
  NoResultsContainer,
  NoResultsImage,
  NoResultsViewHeading,
  NoResultsViewCaption,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
    home: false,
    trending: true,
    gaming: false,
    savedVideos: false,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedTrendingVideos = data.videos.map(each => ({
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    if (response.ok === true) {
      this.setState({
        trendingVideos: [...updatedTrendingVideos],
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {trendingVideos} = this.state
        return (
          <TrendingBannerAndVideosContainer>
            <TrendingBannerContainer bgColor={isDarkTheme}>
              <TrendingIconContainer bgColor={isDarkTheme}>
                <HiFire size="28px" color="#ff0000" />
              </TrendingIconContainer>
              <BannerName fontColor={isDarkTheme}>Trending</BannerName>
            </TrendingBannerContainer>
            <TrendingVideosContainer>
              {trendingVideos.map(each => (
                <TrendingVideoItem key={each.id} videoItemDetails={each} />
              ))}
            </TrendingVideosContainer>
          </TrendingBannerAndVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <NoResultsViewContainer bgColor={isDarkTheme}>
            <NoResultsContainer>
              <NoResultsImage src={failureImageUrl} alt="failure" />
              <NoResultsViewHeading fontColor={isDarkTheme}>
                Oops! Something Went Wrong
              </NoResultsViewHeading>
              <NoResultsViewCaption fontColor={isDarkTheme}>
                We are having some trouble to complete your request. Please try
                again.
              </NoResultsViewCaption>
              <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
            </NoResultsContainer>
          </NoResultsViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LoadingViewContainer
            className="loader-container"
            data-testid="loader"
            bgColor={isDarkTheme}
          >
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#f9f9f9' : '#181818'}
              height="50"
              width="50"
            />
          </LoadingViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.loading:
        return this.renderLoadingView()
      default:
        return null
    }
  }

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

  renderLeftNavBar = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {home, trending, gaming, savedVideos} = this.state
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
                    <NavLinkName fontColor={isDarkTheme}>Trending</NavLinkName>
                  </NavLinkButton>
                </Link>
              </NavLinkItem>
              <NavLinkItem>
                <Link to="/gaming">
                  <NavLinkButton onClick={this.onClickGaming} isActive={gaming}>
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

  renderPopupMenu = () => (
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
                      <IoMdClose color={isDarkTheme ? '#f9f9f9' : '#181818'} />
                    </CloseButton>
                  </CloseButtonContainer>
                  <PopupNavLinksContainer bgColor={isDarkTheme}>
                    <PopupNavLinkItem>
                      <Link to="/">
                        <PopupNavLinkButton
                          onClick={this.onClickHome}
                          isActive={home}
                        >
                          <AiFillHome
                            size="18px"
                            color={home ? '#ff0000' : iconColor}
                          />
                          <PopupNavLinkName fontColor={isDarkTheme}>
                            Home
                          </PopupNavLinkName>
                        </PopupNavLinkButton>
                      </Link>
                    </PopupNavLinkItem>
                    <PopupNavLinkItem>
                      <Link to="/trending">
                        <PopupNavLinkButton
                          onClick={this.onClickTrending}
                          isActive={trending}
                        >
                          <HiFire
                            size="18px"
                            color={trending ? '#ff0000' : iconColor}
                          />
                          <PopupNavLinkName fontColor={isDarkTheme}>
                            Trending
                          </PopupNavLinkName>
                        </PopupNavLinkButton>
                      </Link>
                    </PopupNavLinkItem>
                    <PopupNavLinkItem>
                      <Link to="/gaming">
                        <PopupNavLinkButton
                          onClick={this.onClickGaming}
                          isActive={gaming}
                        >
                          <SiYoutubegaming
                            size="18px"
                            color={gaming ? '#ff0000' : iconColor}
                          />
                          <PopupNavLinkName fontColor={isDarkTheme}>
                            Gaming
                          </PopupNavLinkName>
                        </PopupNavLinkButton>
                      </Link>
                    </PopupNavLinkItem>
                    <PopupNavLinkItem>
                      <Link to="/saved-videos">
                        <PopupNavLinkButton
                          onClick={this.onClickSavedVideos}
                          isActive={savedVideos}
                        >
                          <BiListPlus
                            size="20px"
                            color={savedVideos ? '#ff0000' : iconColor}
                          />
                          <PopupNavLinkName fontColor={isDarkTheme}>
                            Saved Videos
                          </PopupNavLinkName>
                        </PopupNavLinkButton>
                      </Link>
                    </PopupNavLinkItem>
                  </PopupNavLinksContainer>
                </PopupMenuContainer>
              )}
            </Popup>
          </MenuContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderHeader = () => (
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
                <HeaderAppLogo src={appLogo} alt="website logo" />
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
                  {this.renderPopupMenu()}
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

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              {this.renderHeader()}
              <TrendingBodyContainer bgColor={isDarkTheme}>
                {this.renderLeftNavBar()}
                {this.renderTrendingVideos()}
              </TrendingBodyContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
