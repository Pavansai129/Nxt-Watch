import styled from 'styled-components'

export const MenuContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupMenuButton = styled.button`
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
`

export const CloseButton = styled.button`
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
`

export const NavLinkItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  list-style-type: none;
  width: 100vw;
  background-color: ${props => (props.isActive ? '#424242' : '#e2e8f0')};
`
export const NavLink = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 0px;
`
export const NavLinkName = styled.p`
  color: ${props => (props.fontColor ? '#f8fafc' : '#475569')};
  font-size: 18px;
  font-weight: 700;
`
