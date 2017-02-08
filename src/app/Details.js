import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const style = {
  margin: 12,
};

const headerStyle = {
  backgroundImage: 'url("https://s3.amazonaws.com/sportspass.hack/basketball.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '350px'
}

const actionsStyle = {
  backgroundImage: 'https://s3.amazonaws.com/sportspass.hack/details-actions.png',
  width: '100%'
}

const reserveStyle = {
  margin: 0,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  display: 'block',
  height: '50px',
  color: 'white',
  background: '#27e6ce',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: 'bold',
  lineHeight: '50px',
  cursor: 'pointer'
}

class Login extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div className="details">
        <div className="header" style={headerStyle}>
          <div className="copy">
            <h1>Pickup Basketball</h1>
            <h3>Tues, March 21</h3>
            <h3>Barclays</h3>
          </div>
        </div>
        <img src="https://s3.amazonaws.com/sportspass.hack/details-actions.png" style={{ width: '100%' }}/>
        <div className="info" style={{ margin: '15px 40px' }}>
          <div>
            <label style={{ color: '#233259', fontFamily: 'Roboto', fontWeight: 'bolder', fontSize: '13px' }}>Level: </label>
            <span>advanced</span>
          </div>
          <div>
            <label style={{ color: '#233259', fontFamily: 'Roboto', fontWeight: 'bolder', fontSize: '13px' }}>Level: </label>
            <span>advanced</span>
          </div>
          <div>
            <label style={{ color: '#233259', fontFamily: 'Roboto', fontWeight: 'bolder', fontSize: '13px' }}>Level: </label>
            <span>advanced</span>
          </div>
        </div>
        <img src="https://s3.amazonaws.com/sportspass.hack/reviews.png" style={{ width: '100%', margin: '20px auto', marginLeft: '30px' }} />
        <div className="waiver" style={{ width: '80%', margin: '20px auto 200px' }}>
          <div className="waiver-copy" style={{ border: '1px solid black', padding: '20px', overflow: 'scroll', maxHeight: '300px' }}>
            In consideration of being allowed to participate in any way, in any ZogSportsNY ,LLC ("ZogSports") programs, events or activities, I understand, acknowledge and agree to the following:<br/>
1. I understand the physical requirements of the program, event or activity in which I will be participating, and certify that I am physically fit and able to participate in the program, event or activity, and have not been advised otherwise by a qualified medical professional.<br/>
2. I agree to comply with any and all rules, regulations, terms and conditions for participation in the program, event or activity, including but not limited to the rules of any sport that I may participate in. I agree to inspect the equipment, facilities and premises to be used prior to participation. If I believe that anything is unsafe, I will inform ZogSports officials, team captains, referees or facilities owners of the issue and refuse to participate if not corrected.<br/>
3. I acknowledge and fully understand that as a participant, I will be engaging in activities that involve risk of serious injury, including permanent disability and death, property loss and severe social and economic losses. These risks include, but are not limited to, those caused by: (a) the actions, inactions or negligence of ZogSports, other participants, volunteers, spectators, coaches, event officials, referees and organizers; (b) conditions of the premises, facilities or equipment used; (c) rules of play; (d) weather conditions; (e) the skill, ability and condition of other participants, and their failure to abide by the rules, regulations, terms and conditions for participation in the program, event or activity; and, (f) vehicular traffic. I further acknowledge and fully understand that there may also be other risks that are not known or foreseeable at this time. ZogSports cannot control these risks, nor has ZogSports judged my skill level or ability prior to allowing me to participate and consequently is not in a position to guarantee my personal health or safety during my participation in the programs, events or activities. I KNOWINGLY, INTELLIGENTLY AND VOLUNTARILY ASSUME ALL SUCH RISKS, BOTH KNOWN AND UNKNOWN, ANTICIPATED AND UNANTICIPATED, FORESEEABLE AND UNFORESEEABLE, EVEN IF ARISING FROM THE NEGLIGENCE OF ZOGSPORTS OR OTHERS, AND I ASSUME FULL RESPONSIBILITY AND LIABILITY FOR MY PARTICIPATION.<br/>
4. I, on behalf of myself, my heirs, beneficiaries, executors, administrators, personal representatives and assigns, HEREBY WAIVE, RELEASE, DISCHARGE, AND AGREE NOT TO SUE ZogSports, any of its affiliates or any of its or their managers, members, directors, officers, employees, volunteers, representatives, agents, coaches and referees, and other participants, sponsoring agencies, sponsors, advertisers and if applicable, owners and lessors of equipment, facilities and premises used to conduct the programs, events or activities (collectively the “Releasees”), from any and all claims for damages, injuries, losses, liabilities and expenses, including claims based on any Releasee’s negligence, which I may have or which may subsequently accrue to me, relating to, resulting from or arising out of my use and/or participation in any programs, events or activities of ZogSports, including any injury or damage to my person or property, or to that of any other person or property.<br/>
5. I agree to indemnify, defend and hold the Releasees harmless from and against any and all claims for damages, injuries, losses, liabilities and expenses incurred by ZogSports relating to, resulting from or arising out of my participation in any ZogSports program, event or activity.<br/>
6. I consent to have medical treatment that may be deemed advisable in the event of injury, accident and/or illness during any program, event or activity. I release ZogSports and all persons participating in any such medical treatment from all responsibility for any such actions.<br/>
7. I hereby grant to ZogSports and those acting with its authority, the right to photograph, videotape, or otherwise capture or collect my likeness, voice and sounds (the “Content”) during my participation in the ZogSports program, event or activity. I further acknowledge the Content to be works made for hire, and otherwise irrevocably assign and grant to ZogSports all rights in this Content and the right to use or sublicense the Content and my name, likeness, and biography, in ZogSports’ discretion, in all media and in all forms and for all purposes, including without limitation, advertising and other promotions for ZogSports, without any further consideration to me or any limitation whatsoever.<br/>
8. I intend that this Waiver and Release of Liability shall be construed broadly to provide a release and waiver to the maximum extent permissible under applicable law.<br/>
9. I HAVE READ THIS WAIVER AND RELEASE OF LIABILITY CAREFULLY AND I FULLY UNDERSTAND ITS TERMS, AND I UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING THIS DOCUMENT, AND I SIGN IT KNOWINGLY, INTELLIGENTLY AND VOLUNTARILY WITHOUT ANY INDUCEMENT OR DURESS.<br/>
          </div>
          <div className="waiver-confirm" style={{ cursor: 'pointer' }}>
            <input type="checkbox" id="confirm-input"/>
            <label htmlFor="confirm-input">I acknowledge that, I HAVE READ THIS WAIVER AND RELEASE OF LIABILITY CAREFULLY AND I FULLY UNDERSTAND ITS TERMS</label>
          </div>
        </div>
        <Link to="confirmation" className="reserve" style={reserveStyle}>RESERVE SLOT</Link>
      </div>
    )
  }
}

export default Login;
