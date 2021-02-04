import React from 'react'
import { useState, useContext } from 'react'

import Alert from './Alert';
import ShowsContext from '../context/shows/showsContext';

const Searchbar = () => {
    const [ searchTerm, setSearchTerm ] = useState("");
    const {searchShows} = useContext(ShowsContext)

    const onSearchHandler = (e) => {
        e.preventDefault();

        searchShows(searchTerm);
    }
    return (
        <div className="search__bar">
            <Alert type="danger" message="Please enter something..." />
            <form className="search__form">
                <input 
                type="text" 
                placeholder="search TV show..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <br />
                <button className="btn btn-block" onClick={onSearchHandler}>Search</button>
            </form>
        </div>
    )
}

export default Searchbar
