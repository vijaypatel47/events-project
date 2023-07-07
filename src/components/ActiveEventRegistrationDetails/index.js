// Write your code here
import './index.css'

const activeRegistrationStatusId = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeRegistrationStatus} = props

  const onNoActiveStatus = () => (
    <p className="active-para">
      Click on an event, to view its registration details
    </p>
  )

  const onRegistrationSuccess = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="active-image"
      />
      <h1 className="msg"> You have already registered for the event </h1>
    </div>
  )

  const onYetToRegistration = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="active-image"
      />
      <p className="msg">
        {' '}
        A live performance brings so much to your relationship with dance.Seeing
        live dance....
      </p>
      <button className="btn" type="button">
        Register Here{' '}
      </button>
    </div>
  )

  const onRegistrationClosed = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="active-image"
      />
      <h1 className="msg"> Registrations Are Closed Now! </h1>
      <p className="msg"> Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderActiveStatus = () => {
    switch (activeRegistrationStatus) {
      case activeRegistrationStatusId.yetToRegister:
        return onYetToRegistration()
      case activeRegistrationStatusId.registered:
        return onRegistrationSuccess()
      case activeRegistrationStatusId.registrationClosed:
        return onRegistrationClosed()
      default:
        return onNoActiveStatus()
    }
  }

  return <div className="status-container">{renderActiveStatus()}</div>
}
export default ActiveEventRegistrationDetails
