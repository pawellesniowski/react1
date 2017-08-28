import React, {Component} from 'react';

// class SearchBar extends Component {
//     render(){
//         return(
//             <input onChange={this.onInputChange} />
//         );
//     } // end of render
//     onInputChange(event){ // whenever input changes do...:
//         console.dir(event.target.value);
//     } // end of onInputChange
// }

// class SearchBar extends Component {
//     render (){
//         return (
//             <input onChange={event=>console.log(event.target.value)}/>
//         );
//     }
// }

// introduction to State:
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ""};
    }

    render(){
        return(
            <div>
            <input 
                value={this.state.term}
                onChange={e => this.setState({term: e.target.value})}
            /> 
            {/* Value of input: {this.state.term} */}
            </div>
        );
    }
}


export default SearchBar;
