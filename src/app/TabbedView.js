import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import SearchList from './SearchList';
import HomeTab from './HomeTab';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSchedule from 'material-ui/svg-icons/action/schedule'
import AvVideoLibrary from 'material-ui/svg-icons/av/video-library'
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';


const homeIcon = <ActionHome />;
const searchIcon = <ActionSearch />;
const upcomingIcon = <ActionSchedule />;
const videoIcon = <AvVideoLibrary />;
const profileIcon = <ActionAccountCircle/>;

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

export default class TabbedView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    componentWillMount() {
        if (window.location.hash.startsWith('#/search/')) {
            // Supports linking from newly available game notification
            this.setState({slideIndex: 1});
        }
    }

    select = (index) => this.setState({slideIndex: index});


    render() {
        const botStyle = {position: 'fixed', 'bottom': 0, 'width': '100%'};
        const bottomNav = (
            <Paper zDepth={1} style={botStyle}>
                <BottomNavigation selectedIndex={this.state.slideIndex}>
                    <BottomNavigationItem
                        label="Home"
                        icon={homeIcon}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Find Games"
                        icon={searchIcon}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Upcoming"
                        icon={upcomingIcon}
                    />
                    <BottomNavigationItem
                        label="Videos"
                        icon={videoIcon}
                    />
                    <BottomNavigationItem
                        label="Profile"
                        icon={profileIcon}
                    />
                </BottomNavigation>
            </Paper>
        );

        return (
            <div>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                    <HomeTab style={styles.slide} handleImgClick={() => this.select(1)}/>
                    <SearchList style={styles.slide} />
                </SwipeableViews>
                {bottomNav}

            </div>
        );
    }
}
