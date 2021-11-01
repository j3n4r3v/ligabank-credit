import { Actions } from './actions';

const initialState = {
    mobileMenuIsOpen: false,
    modalLoginIsOpen: false,
    email: localStorage.getItem('login'),
    password: localStorage.getItem('password'),
    isLogin: localStorage.getItem('isLogin') === 'true',
    option: null

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_VISIBLE_MENU:
            return {
                ...state,
                mobileMenuIsOpen: action.payload
            };
        case Actions.CHANGE_VISIBLE_MODAL_LOGIN:
            return {
                ...state,
                modalLoginIsOpen: action.payload
            };
        case Actions.LOGIN:
            return {
                ...state,
                email: action.payload,
                password: action.payload,
                isLogin: true
            };
        case Actions.LOGOUT:
            return {
                ...state,
                email: '',
                password: '',
                isLogin: false
            };
        default:
            return state;
    }
};

export default reducer;