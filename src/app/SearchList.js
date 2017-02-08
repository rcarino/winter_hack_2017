import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {darkBlack} from 'material-ui/styles/colors';
import SearchAppBar from './searchAppBar'

class SearchList extends Component {
    state = {
        searchTitle: 'All Sports',
        searchList: [
            {
                text: 'Competitive Basketball',
                date: 'Wed, Feb 08 2017',
                location: 'Podunk Community Center Court 2'
            },
            {
                text: 'Intermediate Softball',
                date: 'Wed, Feb 08 2017',
                location: 'Podunk Community Center Court 2'
            },
            {
                text: 'Beginner Volleyball',
                date: 'Wed, Feb 08 2017',
                location: 'Podunk Community Center Court 2'
            },
            {
                text: 'Beginner Dodgeball',
                date: 'Wed, Feb 08 2017',
                location: 'Podunk Community Center Court 2'
            },
            {
                text: 'Competitive Soccer',
                date: 'Wed, Feb 08 2017',
                location: 'Podunk Community Center Court 2'
            }
        ]
    };

    updateSearch() {
        this.setState({
            searchTitle: 'Competitive Basketball',
            searchList: [{
                text: 'Competitive Basketball',
                date: 'Wed, Feb 08 2017',
                location: 'Podunk Community Center Court 2'
            }]
        });
    }

    render() {
        let listBody = [];
        for (let i = 0; i < this.state.searchList.length; i++) {
            const obj = this.state.searchList[i];
            const secondaryText = (<p><span style={{color: darkBlack}}>{obj.date}</span> -- {obj.location}</p>);
            listBody.push((<ListItem key={i} primaryText={obj.text} secondaryText={secondaryText}/>));
            listBody.push((<Divider key={'d' + i}/>));
        }
        listBody.pop();

        return (
            <div>
                <SearchAppBar searchTitle={this.state.searchTitle} handleSearchAction={this.updateSearch.bind(this)}/>
                <List>{listBody}</List>
            </div>
        );
    }
}

export default SearchList;
