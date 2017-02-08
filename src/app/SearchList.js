import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {darkBlack} from 'material-ui/styles/colors';
import SearchAppBar from './searchAppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { Link } from 'react-router';

class SearchList extends Component {
    state = {
        notifyOpen: false,
        searchTitle: 'All Sports',
        searchList: [
            {
                text: 'Competitive Basketball',
                date: 'Wed, Feb 08 2017 8PM - 9PM',
                location: 'Asphalt Green East Side'
            },
            {
                text: 'Intermediate Softball',
                date: 'Fri, Feb 10 2017 6PM - 8PM',
                location: 'Coleman Field'
            },
            {
                text: 'Beginner Volleyball',
                date: 'Wed, Feb 15 2017 8PM - 9PM',
                location: 'Central Park Volleyball Courts'
            },
            {
                text: 'Competitive Basketball',
                date: 'Tues, March 21 2017 5PM - 6PM',
                location: 'Brooklyn Sports Club',
                disabled: true
            },
            {
                text: 'Beginner Dodgeball',
                date: 'Thu, March 23 2017 7PM - 8PM',
                location: 'West Bronx Rec Center'
            },
            {
                text: 'Casual Soccer',
                date: 'Thu, March 23 2017 8PM - 10PM',
                location: 'Chelsea Park'
            }
        ]
    };

    updateSearch() {
        this.setState({
            searchTitle: 'Competitive Basketball',
            searchList: [
                {
                    text: 'Competitive Basketball',
                    date: 'Wed, Feb 08 2017 8PM - 9PM',
                    location: 'Barclays'
                },
                {
                    text: 'Competitive Basketball',
                    date: 'Tues, March 21 2017 8PM - 9PM',
                    location: 'Brooklyn Sports Club',
                    disabled: true
                }

            ]
        });
    }

    handleRowClick = (e, row) => {
        if (row.disabled) {
            e.preventDefault();
            this.setState({notifyOpen: true});
        }
    };

    handleClose = () => {
        this.setState({notifyOpen: false});
    };

    render() {
        let listBody = [];
        for (let i = 0; i < this.state.searchList.length; i++) {
            const obj = this.state.searchList[i];
            const dateColor = obj.disabled ? {} : {color: darkBlack};
            const color = obj.disabled ? {color: 'lightgray'} : {};
            const secondaryText = (
                <p style={color}><span style={dateColor}>{obj.date}</span> -- {obj.location}</p>);
            listBody.push((<Link key={'l' + i} to="details" onClick={(e) => this.handleRowClick(e, obj)}>
                <ListItem key={i} primaryText={obj.text} secondaryText={secondaryText}
                                     disabled={obj.disabled} style={color}/>
            </Link>));
            listBody.push((<Divider key={'d' + i}/>));
        }
        listBody.pop();

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Notify Me"
                secondary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        const notifyWhenAvailableDialog = (<Dialog
            title="Notify me if spots become available"
            actions={actions}
            modal={true}
            open={this.state.notifyOpen}
        >
            No spots are available for this game. Spots may open if players report that they can't make the game. Would
            you like to receive SMS notifications if spots open?
        </Dialog>);

        return (
            <div>
                <SearchAppBar searchTitle={this.state.searchTitle} handleSearchAction={this.updateSearch.bind(this)}/>
                <List>{listBody}</List>
                {notifyWhenAvailableDialog}
            </div>
        );
    }
}

export default SearchList;
