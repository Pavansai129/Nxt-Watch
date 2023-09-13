import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  min-width: 70%;
  padding: 15px;
  border-radius: 8px;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  box-shadow: 0px 0px 10px ${props => (props.bgColor ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    min-width: 350px;
    padding: 40px;
  }
`
export const AppLogo = styled.img`
  height: 30px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`
export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  width: 100%;
  margin-bottom: 10px;
`
export const Label = styled.label`
  font-weight: 700;
  font-size: 10px;
  margin-bottom: 5px;
  color: ${props => (props.fontColor ? '#f8fafc' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const UsernameInput = styled.input`
  border-radius: 4px;
  outline: none;
  font-size: 12px;
  font-weight: 300;
  padding-left: 10px;
  height: 30px;
  color: ${props => (props.fontColor ? '#f8fafc' : ' #1e293b')};
  border: 1px solid ${props => (props.borderColor ? '#f8fafc' : '#94a3b8')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
    height: 40px;
  }
`
export const LoginButton = styled.button`
  height: 30px;
  color: #f8fafc;
  font-size: 12px;
  font-weight: 500;
  border: none;
  outline: none;
  background-color: #4f46e5;
  border-radius: 6px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    height: 50px;
    font-size: 18px;
  }
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`

export const ShowPasswordCheckbox = styled.input`
  border: 5px solid red;
  height: 15px;
  width: 15px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`

export const ShowPasswordText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: ${props => (props.fontColor ? '#f8fafc' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  width: 100%;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
