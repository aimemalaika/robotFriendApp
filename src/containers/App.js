import React, {Component} from 'react';
import './App.css'
import CardList from './../components/CardList';
import Scroll from './../components/Scroll';
import SearchBox from './../components/SearchBox';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response =>{
          return  response.json();
        }).then(users =>{
            this.setState({robots : users})
        })
    }
    onSearchCange = (event) => {
        this.setState({searchField: event.target.value});
    }
    render(){

        const {robots,searchField} = this.state;
        const filterRobot = robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        });
        if(robots.length === 0){
            return <h1 className="f1">Loading . . .</h1>;
        }else{
            return (
                <div className="tc">
                    <h1 className="f1">Robot Friend</h1>
                    < SearchBox searchChange ={this.onSearchCange} />
                    <Scroll>
                        <CardList robots={filterRobot} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;