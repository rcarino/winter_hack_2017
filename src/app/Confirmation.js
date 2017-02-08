import React, {Component} from 'react';
import { Link } from 'react-router';

const style = {
  backgroundImage: 'url("https://s3.amazonaws.com/sportspass.hack/basketball.jpg")', //'#233259',
  backgroundSize: 'cover',
  color: 'white',
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0
};

const reserveStyle = {
  display: 'block',
  height: '40px',
  width: '80%',
  color: 'white',
  background: '#27e6ce',
  textDecoration: 'none',
  fontSize: '13px',
  fontWeight: 'bold',
  lineHeight: '40px',
  cursor: 'pointer',
  borderRadius: '5px',
  margin: '20px auto'
}

class Confirmation extends Component {
  render() {
    return (
      <div className="confirmation" style={style}>
        <div className="copy" style={{ position: 'absolute', top: '30%', textAlign: 'center', width: '100%' }}>
          <h1>Basketball</h1>
          <h2>Court 1</h2>
          <p>Tuesday, February 12<br/>9:00pm - 10:00pm</p>
          <a href="http://zogsports.com" style={reserveStyle}>CONFIRM MY RESERVATION</a>
        </div>
        <Link
          to="details"
          style={{
            backgroundImage: 'url("https://s3.amazonaws.com/sportspass.hack/close-x-green.svg")',
            backgroundSize: 'contain',
            width: '30px',
            height: '30px',
            position: 'absolute',
            right: '15px',
            top: '15px'
       }}></Link>
      </div>
    )
  }
}

export default Confirmation;
