import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCm0k_4aAm7vSzzZ4RWod34meZ0f8OFiQI';



class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: [] };
        YTSearch({key: API_KEY, term: "grumpy cat"}, videos=>{
            this.setState({videos});
        });
    }

    render(){
        return(
            <div>
                <SearchBar />
            </div>
        );
    }; // end of render

}

ReactDOM.render(<App />, document.querySelector('.container'));


