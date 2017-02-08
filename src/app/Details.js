import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';

const style = {
  margin: 12,
};

const headerStyle = {
  backgroundImage: 'url("https://s3.amazonaws.com/sportspass.hack/basketball.jpg")',
  backgroundSize: 'cover',
  height: '350px'
}

class Login extends Component {
  render() {
    return (
      <div className="details">
        <div className="header" style={headerStyle}>
          <div className="copy">
            <h3>Pickup Basketball</h3>
            <p>Tues, March 21</p>
            <p>The Streets</p>
          </div>
        </div>
        <Link to="/app" className="reserve">Reserve</Link>
      </div>
    )
  }
}

export default Login;
