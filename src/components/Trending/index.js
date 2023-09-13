import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
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

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
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
    this.getTrendingVideos()
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {trendingVideos} = this.state
        console.log('trending videos')
        console.log(trendingVideos)
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

export default Trending
