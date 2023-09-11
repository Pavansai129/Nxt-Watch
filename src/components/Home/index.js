import {Component} from 'react'
import Header from '../Header'
import LeftMenubar from '../LeftMenubar'
import {HomeBodyContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'IN_PROGRESS',
}

class Home extends Component {
  state = {apiStatus: apiStatusConstants.success}

  renderSuccessView = () => <h1>Success</h1>

  renderFailureView = () => <h1>failure</h1>

  renderLoadingView = () => <h1>Loading...</h1>

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
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
    const {apiStatus} = this.state
    console.log(apiStatus)
    return (
      <>
        <Header />
        <HomeBodyContainer>
          <LeftMenubar />
          {this.renderHomeVideos()}
        </HomeBodyContainer>
      </>
    )
  }
}

export default Home
