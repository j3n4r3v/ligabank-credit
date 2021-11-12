import { Actions } from './actions';

const initialState = {
    mobileMenuIsOpen: false,
    modalLoginIsOpen: false,
    email: localStorage.getItem('login'),
    password: localStorage.getItem('password'),
    isLogin: localStorage.getItem('isLogin') === 'true',
    option: null,
    cost: 0,
    fee: 0,
    useMotherCapital: false,
    useLifeInsurance: false,
    useKacko: false,
    period: 1,
    data: {
        count: 1,
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        name: localStorage.getItem('name')
    }

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
        case Actions.ON_CHANGE_OPTION:
            return {
                ...state,
                option: action.payload
            };
        case Actions.CHANGE_COST:
            return {
                ...state,
                cost: action.payload
            };
        case Actions.CHANGE_FEE:
            return {
                ...state,
                fee: action.payload
            };
        case Actions.CHANGE_PERIOD:
            return {
                ...state,
                period: action.payload
            };
        case Actions.CHANGE_USE_MOTHER_CAPITAL:
            return {
                ...state,
                useMotherCapital: action.payload
            };
        case Actions.CHANGE_USE_KASKO:
            return {
                ...state,
                useKacko: action.payload
            };
        case Actions.CHANGE_USE_LIFE_INSURANCE:
            return {
                ...state,
                useLifeInsurance: action.payload
            };
        case Actions.SAVE_DATA:
            return {
                ...state,
                data: { ...state.data, ...action.payload }
            };
        case Actions.DELETE_DATA:
            return {
                ...state,
                data: { count: state.data.count, email: state.data.email, phone: state.data.phone, name: state.data.name }
            };

        default:
            return state;
    }
};

export default reducer;


