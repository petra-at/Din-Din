import React from 'react'; 
import './SearchBar.css'; 
import PlacesAutoCompletion from '../../util/PlacesAutoCompletion';


class SearchBar extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            term:'',
            location:'',
            sortBy:'best_match',
            transfer:false
        };

        this.sortByOptions={
            'Best Match':'best_match',
            'Highest Rated':'rating',
            'Most Reviewed':'review_count'
        };

      
        this.handleLocationChange=this.handleLocationChange.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
       
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy===sortByOption)
            return 'active';
        else
            return '';
    }

      handleSortbyChange(sortByOption,event)
    {
        this.setState({
            sortBy: sortByOption,
            transfer:true
        },this.handleSearch.bind(this,event));

    }

    handleTermChange(event){
        this.setState({
            term: event.target.value
        });
    }

    handleLocationChange(event){
        this.setState({
            location: event.target.value
        });
       
    }

    handleSearch(event){
        event.persist();
        if(event.keyCode===13||event.type==='click'||this.state.transfer)
        {
            this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
        }
        this.setState(
            {
                transfer:false
            }
        )
        
    }
   
    renderSortByOptions(){
        
        return Object.keys(this.sortByOptions).map(sortByOption=>{
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortbyChange.bind(this,sortByOptionValue)}>{sortByOption}</li>//the binding is declared here because we want to refer to the actual sort by action list not the general search bar section
        });   
    }
   
    render(){
        return(
            
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input id="business" onKeyUp={this.handleSearch} onChange={this.handleTermChange} placeholder="Search Businesses" />
        {/*<input onKeyUp={this.handleSearch} onChange={this.handleLocationChange} placeholder="Where?" />*/}
        <span><PlacesAutoCompletion/></span>
                </div> 
                <div onClick={this.handleSearch} className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
        </div>
        );
    }
}

export default SearchBar;

/*NEED TO ADD A SEARCH BY DISTANCE OR RADIUS FROM CENTRAL LOCATION */