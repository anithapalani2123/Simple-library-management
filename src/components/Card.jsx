import React, { useState } from "react";
import Modal from "./Modal";
import './Style.css';

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null);

    const thumbnail = book.volumeInfo.imageLinks?.smallThumbnail;
    const amount = book.saleInfo.listPrice?.amount;

    return (
        <>
            {thumbnail && amount !== undefined && (
                <div className="card" onClick={() => { setShow(true); setItem(book); }}>
                    <img src={thumbnail} alt={book.volumeInfo.title} />
                    <div className="bottom">
                        <h3 className="title">{book.volumeInfo.title}</h3>
                        <p className="amount">&#8377;{amount}</p>
                    </div>
                </div>
            )}
            {show && bookItem && (
                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
            )}
        </>
    );
}

export default Card;
