import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  AppContainer,
  FormContainer,
  AppLogo,
  LabelAndInputContainer,
  Label,
  UsernameInput,
  LoginButton,
  ShowPasswordContainer,
  ShowPasswordCheckbox,
  ShowPasswordText,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUsernameField = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {username} = this.state
        return (
          <LabelAndInputContainer>
            <Label
              htmlFor="username"
              fontColor={isDarkTheme}
              borderColor={isDarkTheme}
            >
              USERNAME
            </Label>
            <UsernameInput
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
              borderColor={isDarkTheme}
            />
          </LabelAndInputContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {password, showPassword} = this.state
        return (
          <LabelAndInputContainer>
            <Label
              htmlFor="password"
              fontColor={isDarkTheme}
              borderColor={isDarkTheme}
            >
              PASSWORD
            </Label>
            <UsernameInput
              id="password"
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
              borderColor={isDarkTheme}
            />
          </LabelAndInputContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onClickCheckbox = event => {
    this.setState({showPassword: event.target.checked})
  }

  renderShowPasswordField = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <ShowPasswordContainer>
            <ShowPasswordCheckbox
              type="checkbox"
              onClick={this.onClickCheckbox}
            />
            <ShowPasswordText fontColor={isDarkTheme}>
              Show Password
            </ShowPasswordText>
          </ShowPasswordContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onLoginSuccessful = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 3})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onLoginSuccessful(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {showErrorMsg, errorMsg} = this.state
          const accessToken = Cookies.get('jwt_token')
          if (accessToken !== undefined) {
            return <Redirect to="/" />
          }
          const appLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <AppContainer bgColor={isDarkTheme}>
              <FormContainer
                onSubmit={this.onSubmitForm}
                bgColor={isDarkTheme}
                shadow={isDarkTheme}
              >
                <AppLogo src={appLogo} alt="website logo" />
                {this.renderUsernameField()}
                {this.renderPasswordField()}
                {this.renderShowPasswordField()}
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </AppContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
