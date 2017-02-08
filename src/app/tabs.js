import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import ListExampleMessages from './scheduleSearch';


import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionPregnantWoman from 'material-ui/svg-icons/action/pregnant-woman'

const searchIcon = <ActionSearch>Search</ActionSearch>;
const homeIcon = <ActionHome>Home</ActionHome>;
const upcomingIcon = <ActionPregnantWoman>Upcoming</ActionPregnantWoman>;

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

export default class TabsExampleSwipeable extends React.Component {

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

    select = (index) => this.setState({slideIndex: index});


    render() {
        const botStyle = {position: 'fixed', 'bottom': 0, 'width': '100%'};
        const bottomNav = (
            <Paper zDepth={1} style={botStyle}>
                <BottomNavigation selectedIndex={this.state.slideIndex}>
                    <BottomNavigationItem
                        label="Schedules Search"
                        icon={searchIcon}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Home"
                        icon={homeIcon}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Upcoming"
                        icon={upcomingIcon}
                        onTouchTap={() => this.select(2)}
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
                    <ListExampleMessages />
                    <div style={styles.slide}>
                        slide n°2
                    </div>
                    <div style={styles.slide}>
                        slide n°3
                    </div>
                </SwipeableViews>
                {bottomNav}

            </div>
        );
    }
}
