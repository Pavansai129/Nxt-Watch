import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoItemContainer,
  ThumbnailImage,
  VideoDetailsContainer,
  ProfileImage,
  VideoDataContainer,
  Title,
  ExtraSmallDevicesTitleContainer,
  ResponsiveName,
  ExtraSmallDevicesName,
  ViewsAndTimeContainer,
  Views,
  PublishedTimeFromNow,
  Dot,
} from './styledComponents'

const VideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoItemDetails} = props
      const {
        channel,
        id,
        thumbnailUrl,
        title,
        viewCount,
        publishedAt,
      } = videoItemDetails
      const {name, profileImageUrl} = channel
      return (
        <VideoItemContainer bgColor={isDarkTheme}>
          <ThumbnailImage src={thumbnailUrl} alt={title} />
          <VideoDetailsContainer bgColor={isDarkTheme}>
            <ProfileImage src={profileImageUrl} alt={name} />
            <VideoDataContainer bgColor={isDarkTheme}>
              <Title bgColor={isDarkTheme} fontColor={isDarkTheme}>
                {title}
              </Title>
              <ResponsiveName bgColor={isDarkTheme} fontColor={isDarkTheme}>
                {name}
              </ResponsiveName>
              <ViewsAndTimeContainer bgColor={isDarkTheme}>
                <ExtraSmallDevicesTitleContainer>
                  <ExtraSmallDevicesName
                    bgColor={isDarkTheme}
                    fontColor={isDarkTheme}
                  >
                    {name}
                  </ExtraSmallDevicesName>
                  <BsDot color={isDarkTheme ? '#94a3b8' : '#64748b'} />
                </ExtraSmallDevicesTitleContainer>
                <Views bgColor={isDarkTheme} fontColor={isDarkTheme}>
                  {viewCount} views
                </Views>
                <BsDot color={isDarkTheme ? '#94a3b8' : '#64748b'} />
                <PublishedTimeFromNow
                  bgColor={isDarkTheme}
                  fontColor={isDarkTheme}
                >
                  {formatDistanceToNow(new Date(publishedAt))}
                </PublishedTimeFromNow>
              </ViewsAndTimeContainer>
            </VideoDataContainer>
          </VideoDetailsContainer>
        </VideoItemContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoItem
