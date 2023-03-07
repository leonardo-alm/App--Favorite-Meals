import { AnyAction } from "redux";
import { RootState } from "../../app/store";

const initialState = ''

export const searchTermReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'searchTerm/setSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return state;
    }
}

export function setSearchTerm(term: string) {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

export function clearSearchTerm() {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}

export const selectSearchTerm = (state: RootState) => state.searchTerm;