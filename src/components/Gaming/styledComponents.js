import styled from 'styled-components'

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  min-width: 100vw;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
`

export const HeaderAppLogo = styled.img`
  height: 20px;
  @media screen and (min-width: 768px) {
    height: 30px;
  }
`
export const HeaderControlsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  border: none;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`
export const HeaderItem = styled.li`
  border: none;
`

export const HeaderThemeButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const HeaderButton = styled.div`
  background-color: transparent;
  border: none;
`

export const ProfileLogo = styled.img`
  width: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuContainer = styled.div`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupMenuButton = styled.div`
  border: none;
  background-color: transparent;
`
export const PopupMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
  width: 100%;
  padding-right: 20px;
`

export const CloseButton = styled.p`
  border: none;
  background-color: transparent;
  font-size: 25px;
`
export const PopupNavLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  padding: 0px;
  border: none;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const PopupNavLinkItem = styled.li`
  border: none;
  list-style-type: none;
  background-color: transparent;
  width: 100%;
`

export const PopupNavLinkButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding-left: 32vw;
  border: none;
  color: ${props => (props.isActive ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isActive ? '#909090' : 'transparent')};
  width: 100%;
`
export const PopupNavLinkName = styled.p`
  color: ${props => (props.fontColor ? '#f9f9f9' : '#0f0f0f')};
  font-size: 18px;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  background-color: transparent;
`

export const TrendingBodyContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const LeftMenubarContainer = styled.div`
  width: 220px;
  flex-shrink: 0;
  min-height: 90vh;
  padding-top: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  padding: 0px;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const NavLinkItem = styled.li`
  border: none;
  list-style-type: none;
  background-color: transparent;
  width: 100%;
`

export const NavLinkButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  border: none;
  padding-left: 18px;
  color: ${props => (props.isActive ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isActive ? '#909090' : 'transparent')};
  width: 100%;
`

export const NavLinkName = styled.p`
  color: ${props => (props.fontColor ? '#f9f9f9' : '#0f0f0f')};
  font-size: 15px;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  width: 100%;
  border: none;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  background-color: transparent;
`
export const ContactText = styled.p`
  color: ${props => (props.fontColor ? '#f9f9f9' : '#0f0f0f')};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`
export const SocialMediaIcon = styled.img`
  width: 25px;
`

export const GamingBannerAndVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
`
export const GamingBannerContainer = styled.div`
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
export const GamingIconContainer = styled.div`
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

export const GamingVideosContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
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
