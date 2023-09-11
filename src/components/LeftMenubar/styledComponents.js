import styled from 'styled-components'

export const LeftMenubarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 220px;
  min-height: 90vh;
  border: none;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
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
`
export const SocialMediaIcon = styled.img`
  width: 25px;
`
