import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {darkBlack} from 'material-ui/styles/colors';
import SearchAppBar from './searchAppBar'

class SearchList extends Component {
    render() {
        return (
            <div>
                <SearchAppBar />
                <List>
                    <ListItem
                        primaryText="Competitive Basketball"
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>Wed, Feb 08 2017</span> --
                                Podunk Community Center Court 2
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider  />
                    <ListItem
                        primaryText="Intermediate Softball"
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>Wed, Feb 08 2017</span> --
                                Podunk Community Center Court 2
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider />
                    <ListItem
                        primaryText="Beginner Volleyball"
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>Wed, Feb 08 2017</span> --
                                Podunk Community Center Court 2
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider />
                    <ListItem
                        primaryText="Beginner Dodgeball"
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>Wed, Feb 08 2017</span> --
                                Podunk Community Center Court 2
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                    <Divider />
                    <ListItem
                        primaryText="Competitive Soccer"
                        secondaryText={
                            <p>
                                <span style={{color: darkBlack}}>Wed, Feb 08 2017</span> --
                                Podunk Community Center Court 2
                            </p>
                        }
                        secondaryTextLines={2}
                    />
                </List>
            </div>
        );
    }
}

export default SearchList;