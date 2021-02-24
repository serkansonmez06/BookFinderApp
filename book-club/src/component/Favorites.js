import React from 'react'
import BookList from '../component/BookList'
import FooterComp from '../component/FooterComp'


export default function Favorites(props) {
    
    return (
        <div>
            <BookList 
                books={props.favorites} 
                removeFromFavorites={props.removeFromFavorites}
            /> 
            <FooterComp/>
        </div>
    )
}
