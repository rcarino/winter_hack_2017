import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';

const style = {
  margin: 12,
};

class Entry extends Component {
  render() {
    return (
      <div className="entry">
        <Link to="/app"><img src="https://s3.amazonaws.com/sportspass.hack/entry.png" alt="entry"/></Link>
      </div>
    )
  }
}

export default Entry;
