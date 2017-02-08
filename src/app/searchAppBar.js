import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class SearchAppBar extends Component {
    state = {
        logged: true,
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        this.props.handleSearchAction();
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

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onTouchTap={this.handleClose}
            />,
        ];

        const dialog = (<Dialog
            title="THE DIALOG TITLE"
            actions={actions}
            modal={true}
            open={this.state.open}
        >
            Only actions can close this dialog.
        </Dialog>);
        return (
            <div>
                <AppBar
                    showMenuIconButton={false}
                    title={this.props.searchTitle}
                    iconElementRight={<IconButton onClick={this.handleOpen}><ContentFilter /></IconButton>}
                />
                {dialog}
            </div>
        );
    }
}

export default SearchAppBar;