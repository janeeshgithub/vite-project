import PropTypes from 'prop-types';
function UserGreeting(props)
{   
    const wm=<h2 className="welcome-message"> Welcome {props.username}</h2>
    const lp=<h2 className="login-prompt">Please Log in to grow</h2>
    return(props.isLoggedIn ? wm:lp)
}
UserGreeting.propTypes={
    username:PropTypes.string,
    isLoggedIn:PropTypes.bool
}
UserGreeting.defaultProps={
    isLoggedIn:false,
    username:"Guest"
}
export default UserGreeting