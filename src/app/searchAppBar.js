import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TimePicker from 'material-ui/TimePicker';
import MapsMyLocation from 'material-ui/svg-icons/maps/my-location';

class TimePickers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {start: null, end: null};
    }

    handleChangeStart = (event, date) => {
        this.setState({start: date});
    };

    handleChangeEnd = (event, date) => {
        this.setState({end: date});
    };

    render() {
        const start = new Date();
        start.setHours(0, 0);
        const end = new Date();
        end.setHours(24, 0);
        return (
            <div>
                <TimePicker
                    format="ampm"
                    floatingLabelText="Start Time"
                    value={this.state.start}
                    onChange={this.handleChangeStart}
                    defaultTime={start}
                />
                <TimePicker
                    format="ampm"
                    floatingLabelText="End Time"
                    value={this.state.end}
                    onChange={this.handleChangeEnd}
                    defaultTime={end}
                />
            </div>
        );
    }
}

class SearchAppBar extends Component {
    state = {
        logged: true,
        open: false,
        sportFilter: null,
        intensityFilter: null
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

    handleSportFilterChange = (event, index, value) => this.setState({sportFilter: value});

    handleIntensityFilterChange = (event, index, value) => this.setState({intensityFilter: value});

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Clear"
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                secondary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        const dialog = (<Dialog
            title="Filter Games"
            actions={actions}
            modal={true}
            open={this.state.open}
            autoScrollBodyContent={true}
        >
            <TimePickers/>

            <SelectField
                floatingLabelText="Location"
                value={1}
                onChange={this.handleChange}
            >
                <MenuItem value={1} primaryText="Nearby" leftIcon={(<MapsMyLocation/>)} />
                <MenuItem value={2} primaryText="Manhattan" />
                <MenuItem value={3} primaryText="Brooklyn" />
                <MenuItem value={4} primaryText="Queens" />
                <MenuItem value={5} primaryText="Bronx" />
                <MenuItem value={6} primaryText="Staten Island" />
            </SelectField>

            <SelectField
                value={this.state.sportFilter}
                onChange={this.handleSportFilterChange}
                hintText="All Sports"
            >
                <MenuItem value={0} primaryText="All Sports" />
                <MenuItem value={1} primaryText="Basketball" />
                <MenuItem value={2} primaryText="Volleyball" />
                <MenuItem value={3} primaryText="Dodgeball" />
                <MenuItem value={4} primaryText="Softball" />
                <MenuItem value={5} primaryText="Soccer" />
            </SelectField>

            <SelectField
                value={this.state.intensityFilter}
                onChange={this.handleIntensityFilterChange}
                hintText="All Intensities"
            >
                <MenuItem value={-1} primaryText="All Intensities" />
                <MenuItem value={0} primaryText="Beginner" />
                <MenuItem value={1} primaryText="Casual" />
                <MenuItem value={2} primaryText="Intermediate" />
                <MenuItem value={3} primaryText="Competitive" />
            </SelectField>

            <SelectField
                hintText="Indoor And Outdoor"
            >
                <MenuItem value={0} primaryText="Indoor And Outdoor" />
                <MenuItem value={1} primaryText="Indoor" />
                <MenuItem value={2} primaryText="Outdoor" />
            </SelectField>

            <SelectField
                hintText="CoRec And Men's"
            >
                <MenuItem value={0} primaryText="Coed And Men's" />
                <MenuItem value={1} primaryText="Coed" />
                <MenuItem value={2} primaryText="Men's" />
            </SelectField>
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