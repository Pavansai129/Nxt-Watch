import styled from 'styled-components'

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
export const NavLinksContainer = styled.ul`
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
  padding-left: 32vw;
  border: none;
  color: ${props => (props.isActive ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isActive ? '#909090' : 'transparent')};
  width: 100%;
`
export const NavLinkName = styled.p`
  color: ${props => (props.fontColor ? '#f9f9f9' : '#0f0f0f')};
  font-size: 18px;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  background-color: transparent;
`
