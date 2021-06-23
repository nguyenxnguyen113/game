const controller = {}
controller.register = (registerInfo) => {
  if (registerInfo.firstName === '') {
    view.setErrorMessage('error-first-name', 'Please input first name')

  }
  else {
    view.setErrorMessage('error-first-name', '')

  }
  if (registerInfo.lastName === '') {
    view.setErrorMessage('error-last-name', 'Please input last name')

  }
  else {
    view.setErrorMessage('error-last-name', '')
  }
  if (registerInfo.email === '') {
    view.setErrorMessage('error-email-name', 'Please input first name')

  }
  else {
    view.setErrorMessage('error-email-name', '')
  }
  if (registerInfo.password === '') {
    view.setErrorMessage('error-password-name', 'Please input your password')

  }
  else {
    view.setErrorMessage('error-password-name', '')
  }
  if (registerInfo.confirmPassword === '') {
    view.setErrorMessage('error-confirm-password', 'Please confirm your password')
    return
  }
  else if(registerInfo.confirmPassword !== registerInfo.password){
    view.setErrorMessage('error-confirm-password', '')
    return
  }
  else {
    view.setErrorMessage('error-confirm-password','')
    
  }
  if(registerInfo.firstName !== '' && registerInfo.lastName !== '' && registerInfo.email !== '' &&registerInfo.password !== ''){
    model.register(registerInfo.firstName, registerInfo.lastName,registerInfo.email, registerInfo.password)
  }
  
}
controller.login = ({email, password}) => {
  if (email === '') {
    view.setErrorMessage('error-email-name', 'Please input email')
  } else {
    view.setErrorMessage('error-email-name', '')
  }
  if (password === '') {
    view.setErrorMessage('error-password-name', 'Please input password')
  } else {
    view.setErrorMessage('error-password-name', '')
  }
  if(email !== '' && password !== '') {
    model.login(email, password)
  }
}