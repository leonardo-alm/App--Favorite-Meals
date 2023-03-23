import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchTerm, selectSearchTerm, setSearchTerm } from './searchTermSlice';

export const SearchTerm = () => {
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userInput = e.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <div id="search-container">
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="🔍 Search recipes"
            />
            {searchTerm.length > 0 && (
                <button
                    onClick={onClearSearchTermHandler}
                    type="button"
                    id="search-clear-button"
                >
                    X
                </button>
            )}
        </div>
    );
};