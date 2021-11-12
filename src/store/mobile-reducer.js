import { Actions } from './actions';

const initialState = {
    mobileMenuIsOpen: false,
    modalLoginIsOpen: false,
    email: localStorage.getItem('login'),
    password: localStorage.getItem('password'),
    isLogin: localStorage.getItem('isLogin') === 'true'
};

const ActionCreator = {
    changeVisibleMenu: (payload) => ({
        type: Actions.CHANGE_VISIBLE_MENU,
        payload: payload
    }),

    hangeVisibleModalLogin: (payload) => ({
        type: Actions.CHANGE_VISIBLE_MODAL_LOGIN,
        payload: payload
    }),

    login: (payload) => ({
        type: Actions.LOGIN,
        payload: payload
    }),

    logout: () => ({
        type: Actions.LOGOUT
    })
};


const ActionType = {
    CHANGE_VISIBLE_MENU: `CHANGE_VISIBLE_MENU`,
    CHANGE_VISIBLE_MODAL_LOGIN: `CHANGE_VISIBLE_MODAL_LOGIN`,
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
};


const reducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ActionType.CHANGE_VISIBLE_MENU:
            return {
                ...state,
                mobileMenuIsOpen: action.payload
            };

        case ActionType.CHANGE_VISIBLE_MODAL_LOGIN:
            return {
                ...state,
                modalLoginIsOpen: action.payload
            };

        case ActionType.LOGIN:
            return {
                ...state,
                email: action.payload,
                password: action.payload,
                isLogin: true
            };

        case ActionType.LOGOUT:
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

export { reducer, ActionType, ActionCreator };