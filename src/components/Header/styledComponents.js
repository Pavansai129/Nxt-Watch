import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
`

export const AppLogo = styled.img`
  height: 20px;
  @media screen and (min-width: 768px) {
    height: 30px;
    margin-bottom: 0px;
  }
`
export const HeaderControlsContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  list-style-type: none;
  margin-right: 30px;
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
export const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
`

export const ProfileLogo = styled.img`
  width: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutLogoButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
