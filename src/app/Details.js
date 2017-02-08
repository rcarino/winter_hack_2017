import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';

const style = {
  margin: 12,
};

class Login extends Component {
  render() {
    return (
      <div className="login">
        <TextField
          hintText="Username"
          floatingLabelText="Username"
        /><br/>
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
        />
        <Link to="/app"><RaisedButton label="Login" primary={true} style={style}/></Link>
      </div>
    )
  }
}

export default Login;
