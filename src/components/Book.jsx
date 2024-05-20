import React, { useState } from "react";
import Card from "./Card";
import axios from 'axios';

import './Style.css';

const Book = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
                .then(res => setData(res.data.items || []))
                .catch(err => console.log(err));
        }
    }

    const handleSearchClick = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
            .then(res => setData(res.data.items || []))
            .catch(err => console.log(err));
    }

    return (
        <div className="whole">
            <div className="header">
                <div className="row1">
                    <h2>“A reader lives a thousand lives before he dies . . .<br /> The man who never reads lives only one.”</h2>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input 
                            type="text" 
                            placeholder="Enter Your Book Name"
                            value={search} 
                            onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook}
                        />
                        <button onClick={handleSearchClick}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <img src="./images/hand.png" alt="Hand icon" />
                </div>
            </div>

            <div className="container">
                {bookData.length > 0 ? (
                    bookData.map(book => (
                        <Card key={book.id} book={book} />
                    ))
                ) : (
                    <h2>No results found</h2>
                )}
            </div>
        </div>
    )
}

export default Book;
