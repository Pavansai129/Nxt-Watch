import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TriggerContainer,
  TriggerButtonContainer,
  LogoutLogoButton,
  LogoutButton,
  PopupContainer,
  PopupLogoutContainer,
  PopupText,
  ButtonsContainer,
  CustomCancelButton,
  CustomConfirmButton,
} from './styledComponents'

const PopupLogout = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <TriggerContainer className="popup-container">
          <Popup
            modal
            trigger={
              <TriggerButtonContainer>
                <LogoutLogoButton type="button">
                  <FiLogOut color={isDarkTheme ? '#f9f9f9' : '#181818'} />
                </LogoutLogoButton>
                <LogoutButton
                  type="button"
                  borderColor={isDarkTheme}
                  fontColor={isDarkTheme}
                >
                  Logout
                </LogoutButton>
              </TriggerButtonContainer>
            }
          >
            {close => (
              <PopupContainer>
                <PopupLogoutContainer bgColor={isDarkTheme}>
                  <PopupText fontColor={isDarkTheme}>
                    Are you sure you want to logout?
                  </PopupText>
                  <ButtonsContainer>
                    <CustomCancelButton type="button" onClick={() => close()}>
                      Cancel
                    </CustomCancelButton>
                    <CustomConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </CustomConfirmButton>
                  </ButtonsContainer>
                </PopupLogoutContainer>
              </PopupContainer>
            )}
          </Popup>
        </TriggerContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(PopupLogout)
