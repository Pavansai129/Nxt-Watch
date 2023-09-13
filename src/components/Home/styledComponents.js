import styled from 'styled-components'

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const HomeBodyContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  background-color: transparent;
`
export const HomeBannerSearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    min-width: 100vw;
  }
`
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  padding: 20px;
`
export const AppLogo = styled.img`
  height: 25px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    height: 30px;
  }
`
export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 300px;
`
export const BannerText = styled.h1`
  color: '#0f0f0f';
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 10px;
`
export const BannerButton = styled.button`
  font-size: 10px;
  font-weight: 500;
  height: 30px;
  width: 100px;
  color: #616e7c;
  background-color: transparent;
  color: '#616e7c';
  border: 1px solid '#616e7c';
  outline: none;
  border-radius: 2px;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const SearchInputAndIconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchInput = styled.input`
  padding-left: 20px;
  font-size: 16px;
  font-weight: 300;
  flex-grow: 1;
  width: 300px;
  color: ${props => (props.fontColor ? '#ebebeb' : '#313131')};
  border: 1px solid ${props => (props.borderColor ? '#ebebeb' : '#7e858e')};
  background-color: transparent;
  outline: none;
  height: 35px;
`

export const SearchIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 35px;
  color: ${props => (props.fontColor ? '#ebebeb' : '#313131')};
  border: 1px solid ${props => (props.borderColor ? '#ebebeb' : '#7e858e')};
  background-color: transparent;
`
export const HomeVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 20px;
  margin-top: 0px;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
    overflow-y: scroll;
  }
`
export const NoResultsViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
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
