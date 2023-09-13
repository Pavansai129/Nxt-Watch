import styled from 'styled-components'

export const GamingVideoItemContainer = styled.li`
  width: 150px;
`
export const GamingVideoDetailsContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const GamingThumbnailImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
`
export const GamingTitle = styled.h1`
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.fontColor ? '#ebebeb' : '#181818')};
  background-color: transparent;
  margin-bottom: 10px;
`
export const GamingViewCount = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${props => (props.fontColor ? '#94a3b8' : '#64748b')};
  background-color: transparent;
`
