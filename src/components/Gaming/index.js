import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import LeftMenubar from '../LeftMenubar'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingBodyContainer,
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
  LoadingViewContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <TrendingBannerAndVideosContainer>
            <TrendingBannerContainer bgColor={isDarkTheme}>
              <TrendingIconContainer bgColor={isDarkTheme}>
                <SiYoutubegaming size="28px" color="#ff0000" />
              </TrendingIconContainer>
              <BannerName fontColor={isDarkTheme}>Gaming</BannerName>
            </TrendingBannerContainer>
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

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <TrendingBodyContainer bgColor={isDarkTheme}>
                <LeftMenubar />
                {this.renderTrendingVideos()}
              </TrendingBodyContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
