import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class SearchAppBar extends Component {
    state = {
        logged: true,
    };

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {
        const sportFilter = (<SelectField
                floatingLabelText="Ready?"
                value={this.state.value}
                onChange={this.handleChange}
            >
                <MenuItem value={null} primaryText="All Sports"/>
                <MenuItem value={false} primaryText="Basketball"/>
                <MenuItem value={true} primaryText="Volleyball"/>
                <MenuItem value={true} primaryText="Dodgeball"/>
                <MenuItem value={true} primaryText="Softball"/>
            </SelectField>
        );
        return (
            <div>
                <AppBar
                    iconElementLeft={sportFilter}
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                />
            </div>
        );
    }
}

export default SearchAppBar;