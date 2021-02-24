import React, { Component } from 'react';
import Search from '../component/Search';
import BookList from '../component/BookList';
import FooterComp from '../component/FooterComp';
class Books extends Component {

    state = {
        books: [],
        searchInput: '',
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    } 

    handleSearch = (event) => {
        event.preventDefault()
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`)
            .then(response => response.json())
            .then(result => {
               this.setState({ books: result.items})
        })
    }

    render() {
        return (
            <div>
               <Search 
                    handleChange={this.handleChange} 
                    handleSearch={this.handleSearch} 
                /> 
               <BookList 
                    history={this.props.history}
                    books={this.state.books} 
                    displayFavorite={this.props.displayFavorite}
                    setIsFavorite={this.props.setIsFavorite}
               /> 
                <FooterComp/>
            </div>
        )
    }
}

export default Books;