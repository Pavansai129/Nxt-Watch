import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  padding-left: 0px;
  margin-bottom: 10px;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    max-height: 500px;
  }
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const VideoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  flex-grow: 1;
  padding-left: 10px;
  background-color: transparent;
`
export const ExtraSmallDevicesTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Title = styled.p`
  padding: 1px;
  line-height: 1.5;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${props => (props.fontColor ? '#ebebeb' : '#181818')};
  background-color: transparent;
`
export const ResponsiveName = styled.p`
  font-size: 15px;
  margin-bottom: 10px;
  color: ${props => (props.fontColor ? '#94a3b8' : '#64748b')};
  background-color: transparent;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ExtraSmallDevicesName = styled.p`
  font-size: 12px;
  color: ${props => (props.fontColor ? '#94a3b8' : '#64748b')};
  background-color: transparent;
`
export const ViewsAndTimeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  font-size: 12px;
  background-color: transparent;
`
export const Views = styled.p`
  font-size: 12px;
  color: ${props => (props.fontColor ? '#94a3b8' : '#64748b')};
  background-color: transparent;
`
export const PublishedTimeFromNow = styled(Views)`
  font-size: 12px;
  color: ${props => (props.fontColor ? '#94a3b8' : '#64748b')};
  background-color: transparent;
`
export const Dot = styled.hr`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: transparent;
`
