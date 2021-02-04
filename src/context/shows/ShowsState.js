import { useReducer } from 'react'
import axios from 'axios'

import ShowsContext from './showsContext';
import ShowsReducer from './showsReducer';
import {
    SET_LOADING,
    SEARCH_SHOWS,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW
} from '../types'


const ShowsState = (props) => {
    const initialState = {
        shows : [],
        singleshow : {},
        loading : false
    }

    const [state, dispatch] = useReducer(ShowsReducer, initialState)

    const searchShows = async (searchTerm) => {
        dispatch({ type : SET_LOADING})

        const { data } = await axios.get(
            `https://api.tvmaze.com/search/shows?q=${searchTerm}`
        );

        console.log(data);

        dispatch({
            type : SEARCH_SHOWS,
            payload : data
        })
    }


    return (
        <ShowsContext.Provider value={{
            shows : state.shows,
            singleshow : state.singleshow,
            loading : state.loading,
            searchShows
        }}>
            {props.childern}
        </ShowsContext.Provider>
    )
}

export default ShowsState
