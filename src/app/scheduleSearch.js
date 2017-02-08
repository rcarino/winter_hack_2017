import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SearchAppBar from './searchAppBar'


const ListExampleMessages = () => (
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

export default ListExampleMessages;