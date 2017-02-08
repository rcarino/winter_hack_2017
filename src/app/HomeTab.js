import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class HomeTab extends Component {
    render() {
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                paddingBottom: '16px'
            },
            gridList: {
                width: 500
            },
        };

        const tilesData = [
            {
                img: 'images/full_team.png',
                title: 'Create A Full Team'
            },
            {
                img: 'images/practice.png',
                title: 'Practice / Open Gym'
            },
            {
                img: 'images/small_group.png',
                title: 'Small Group 3-14 Players'
            },
            {
                img: 'images/pickup.png',
                title: 'Pickup Games'
            },
            {
                img: 'images/free_agent.png',
                title: 'Free Agent'
            },
            {
                img: 'images/league_substitute.png',
                title: 'League Substitute'
            }
        ];

        const flexItemStyle = {textAlign: 'center', flex: 1};

        const GridListExampleSimple = (
            <div style={styles.root}>
                <GridList
                    cellHeight={150}
                    style={styles.gridList}
                >
                    <Subheader style={{paddingLeft: 0, display: 'flex', flexDirection: 'row'}}>
                        <div style={flexItemStyle}>League Play</div>
                        <div style={flexItemStyle}>Single Games</div>
                    </Subheader>
                    {tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                        >
                            <img style={{cursor: 'pointer'}} src={tile.img} onClick={this.props.handleImgClick} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );

        return (
            <div style={{margin: '20px'}}>
                <Card>
                    <CardHeader title="SportsPass, the best way to find all the sports you love to play!"/>
                    <CardMedia>
                        {GridListExampleSimple}
                    </CardMedia>
                </Card>
            </div>
        );
    }
}

export default HomeTab;
