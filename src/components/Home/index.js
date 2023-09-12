import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import LeftMenubar from '../LeftMenubar'
import VideoItem from '../VideoItem'
import {
  HomeBodyContainer,
  HomeBannerSearchVideosContainer,
  HomeVideosContainer,
  BannerContainer,
  BannerContentContainer,
  AppLogo,
  BannerText,
  BannerButton,
  CloseButton,
  SearchContainer,
  SearchInputAndIconContainer,
  SearchInput,
  SearchIconButton,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    userInput: '',
    searchInput: '',
    homeVideos: [],
    closeBanner: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data.videos)
    const updatedHomeVideos = data.videos.map(each => ({
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
        homeVideos: [...updatedHomeVideos],
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {homeVideos} = this.state
        return (
          <HomeVideosContainer bgColor={isDarkTheme}>
            {homeVideos.map(eachVideo => (
              <VideoItem key={eachVideo.id} videoItemDetails={eachVideo} />
            ))}
          </HomeVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => <h1>failure</h1>

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  renderHomeVideos = () => {
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

  onClickClose = () => {
    this.setState({closeBanner: false})
  }

  onClickSearchIcon = () => {
    const {userInput} = this.state
    this.setState({searchInput: userInput}, this.getHomeVideos)
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {closeBanner, searchInput} = this.state
          console.log(searchInput)
          return (
            <>
              <Header />
              <HomeBodyContainer>
                <LeftMenubar />
                <HomeBannerSearchVideosContainer>
                  {closeBanner && (
                    <BannerContainer>
                      <BannerContentContainer>
                        <AppLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="website logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </BannerContentContainer>
                      <CloseButton type="button" onClick={this.onClickClose}>
                        <AiOutlineClose color="#616e7c" size="25px" />
                      </CloseButton>
                    </BannerContainer>
                  )}
                  <SearchContainer bgColor={isDarkTheme}>
                    <SearchInputAndIconContainer>
                      <SearchInput
                        type="search"
                        onChange={this.onChangeUserInput}
                        placeholder="Search"
                        fontColor={isDarkTheme}
                        bgColor={isDarkTheme}
                        borderColor={isDarkTheme}
                      />
                      <SearchIconButton
                        type="button"
                        onClick={this.onClickSearchIcon}
                        fontColor={isDarkTheme}
                        bgColor={isDarkTheme}
                        borderColor={isDarkTheme}
                      >
                        <AiOutlineSearch />
                      </SearchIconButton>
                    </SearchInputAndIconContainer>
                  </SearchContainer>
                  {this.renderHomeVideos()}
                </HomeBannerSearchVideosContainer>
              </HomeBodyContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
