import styled from 'styled-components'

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

export const AppLogo = styled.img`
  height: 20px;
  @media screen and (min-width: 768px) {
    height: 30px;
  }
`
export const HeaderControlsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    gap: 15px;
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
