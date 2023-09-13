import styled from 'styled-components'

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const TrendingBodyContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const TrendingBannerAndVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
`
export const TrendingBannerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  width: 100%;
  padding-left: 20px;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    padding-left: 50px;
  }
`
export const TrendingIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#e2e8f0')};
`

export const BannerName = styled.div`
  color: ${props => (props.fontColor ? '#f9f9f9' : '#181818')};
  font-size: 25px;
  font-weight: 500;
`

export const TrendingVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  width: 100%;
  overflow-y: scroll;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
  }
`

export const NoResultsViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  border: 1px solid red;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoResultsImage = styled.img`
  width: 100px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    width: 220px;
  }
`
export const NoResultsViewHeading = styled.h1`
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.fontColor ? '#ebebeb' : '#313131')};
  border: none;
  margin-bottom: 15px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const NoResultsViewCaption = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: ${props => (props.fontColor ? '#ebebeb' : '#313131')};
  border: none;
  margin-bottom: 15px;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const RetryButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  height: 30px;
  width: 100px;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  background-color: #3b82f6;
`
