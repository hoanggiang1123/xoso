import { createGlobalState } from 'react-hooks-global-state';

const query = {
    status: true,
    area: '',
    daydatecity: '',
    date: '',
    type: ''
};
const initialState = {
    query
};

const { useGlobalState } = createGlobalState(initialState);

export {
    useGlobalState
}