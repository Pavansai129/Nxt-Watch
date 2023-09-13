import {
  GamingVideoItemContainer,
  GamingThumbnailImage,
  GamingVideoDetailsContainer,
  GamingTitle,
  GamingViewCount,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const GamingVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoItemDetails} = props
      const {id, title, thumbnailUrl, viewCount} = videoItemDetails
      return (
        <GamingVideoItemContainer>
          <GamingThumbnailImage src={thumbnailUrl} alt={title} />
          <GamingVideoDetailsContainer bgColor={isDarkTheme}>
            <GamingTitle fontColor={isDarkTheme}>{title}</GamingTitle>
            <GamingViewCount fontColor={isDarkTheme}>
              {viewCount} Watching Worldwide
            </GamingViewCount>
          </GamingVideoDetailsContainer>
        </GamingVideoItemContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GamingVideoItem
