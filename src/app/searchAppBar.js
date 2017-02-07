import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

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
                    showMenuIconButton={false}
                    title="All Sports"
                    iconElementRight={<IconButton><ContentFilter /></IconButton>}
                />
            </div>
        );
    }
}

export default SearchAppBar;