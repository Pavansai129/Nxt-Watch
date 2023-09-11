import styled from 'styled-components'

export const TriggerContainer = styled.button`
  border: none;
  padding: 0px;
  background-color: transparent;
`
export const TriggerButtonContainer = styled.div`
  background-color: transparent;
  padding: 0;
`

export const LogoutLogoButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  padding-right: 30px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  height: 30px;
  width: 80px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  color: ${props => (props.fontColor ? '#ffffff' : '#4f46e5')};
  border: 1px solid ${props => (props.borderColor ? '#ffffff' : '#4f46e5')};
  border-radius: 2px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const PopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`

export const PopupLogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 80vw;
  border-radius: 5px;
  border: none;
  background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    width: 35vw;
  }
`

export const PopupText = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 35px;
  color: ${props => (props.fontColor ? '#ffffff' : '#00306e')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`

export const CustomConfirmButton = styled.button`
  font-size: 10px;
  font-weight: 500;
  height: 28px;
  width: 60px;
  color: #ffffff;
  background-color: blue;
  border: none;
  outline: none;
  border-radius: 2px;
`
export const CustomCancelButton = styled.button`
  font-size: 10px;
  font-weight: 500;
  height: 28px;
  width: 60px;
  color: #ffffff;
  background-color: transparent;
  color: ${props => (props.borderColor ? '#ffffff' : '#616e7c')};
  border: 1px solid ${props => (props.borderColor ? '#ffffff' : '#616e7c')};
  outline: none;
  border-radius: 2px;
`
