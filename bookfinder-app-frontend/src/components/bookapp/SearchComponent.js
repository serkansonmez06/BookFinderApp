import React, { useState } from 'react';
// import './App.css';
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup,
  Label,
  Spinner
} from 'reactstrap';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import BookCard from './BookCard';
function SearchComponent() {
  // States
  const [maxResults, setMaxResults] = useState(9);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  // Handle Search


  const handleSubmit = () => {
    // setLoading(true);
    console.log("test")
    
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        
        )
        .then(res => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            
          } else { console.log()
            if (res.data.items.length > 0) {
                console.log(setCards(res.data.items))
              setLoading(false);
            }
          }
        })
        .catch(err => {
          setLoading(true);
          console.log(err.response);
        });
    
  };
  // Main Show Case
  const mainHeader = () => {
    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column' id="searchComp">
        {/* Overlay */}
        <div className='filter'></div>
        <h1>
           Book Finder
        </h1>
        <div style={{ width: '60%', zIndex: 2 }}>
             
            
          <InputGroup size='lg' >
            <Input
              placeholder='Type any kind of book'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <InputGroupAddon addonType='append'>
              <button color='secondary' onClick={handleSubmit} className="btn btn-success">
                Search
              </button>
           
            </InputGroupAddon>

          </InputGroup>
          <div className='d-flex text-white justify-content-center' >
            <FormGroup className='ml-5'>
              <Label for='startIndex'><span className="max-min">Start Index</span></Label>
              <Input
                type='number'
                id='startIndex'
                placeholder='Start Index'
                value={startIndex}
                onChange={e => setStartIndex(e.target.value)}
              />
            </FormGroup>
            <FormGroup >
              <Label for='maxResults'><span className="max-min">Max Results</span></Label>
              <Input
                type='number'
                id='maxResults'
                placeholder='Max Results'
                value={maxResults}
                onChange={e => setMaxResults(e.target.value)}
              />
            </FormGroup>
            
          </div>
        </div>
        
      </div>
    );
  };

  const handleCards = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      );
    } else {
      const items = cards.map((item, i) => {
        let thumbnail = '';
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <div className='col-lg-4 mb-3' key={item.id}>
            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
            />
          </div>
        );
      });
      return (
        <div className='container my-5'>
          <div className='row'>{items}</div>
        </div>
      );
    }
  };
  return (
    <div className='w-100 h-100'>
      {mainHeader()}
      {handleCards()}
      
    </div>
  );
}

export default SearchComponent;
