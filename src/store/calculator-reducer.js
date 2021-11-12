const initialState = {
    option: null,
    cost: 0,
    fee: 0,
    useMotherCapital: false,
    useLifeInsurance: false,
    useKacko: false,
    period: 1
};

const ActionCreator = {

    changeOption : (payload) => ({
        type: ActionType.ON_CHANGE_OPTION,
        payload: payload
    }),
    
    changeCost : (payload) => ({
        type: ActionType.CHANGE_COST,
        payload: payload
    }),
    
    changeFee : (payload) => ({
        type: ActionType.CHANGE_FEE,
         payload: payload
    }),
    
    changePeriod : (payload) => ({
        type: ActionType.CHANGE_PERIOD,
        payload: payload
    }),
    
    changeUseMotherCapital : (payload) => ({
        type: ActionType.CHANGE_USE_MOTHER_CAPITAL,
        payload: payload
    }),
    
    changeUseKasko : (payload) => ({
        type: ActionType.CHANGE_USE_KASKO,
        payload: payload
    }),
    
    changeUseLifeInsurance : (payload) => ({
        type: ActionType.CHANGE_USE_LIFE_INSURANCE,
        payload: payload
    })
};


const ActionType= {
    ON_CHANGE_OPTION: 'ON_CHANGE_OPTION',
    CHANGE_COST: 'CHANGE_COST',
    CHANGE_FEE: 'CHANGE_FEE',
    CHANGE_PERIOD: 'CHANGE_PERIOD',
    CHANGE_USE_MOTHER_CAPITAL: 'CHANGE_USE_MOTHER_CAPITAL',
    CHANGE_USE_LIFE_INSURANCE: 'CHANGE_USE_LIFE_INSURANCE',
    CHANGE_USE_KASKO: 'CHANGE_USE_KASKO',
};


const reducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ActionType.ON_CHANGE_OPTION:
            return {
                ...state,
                option: action.payload
            };
        case ActionType.CHANGE_COST:
            return {
                ...state,
                cost: action.payload
            };
        case ActionType.CHANGE_FEE:
            return {
                ...state,
                fee: action.payload
            };
        case ActionType.CHANGE_PERIOD:
            return {
                ...state,
                period: action.payload
            };
        case ActionType.CHANGE_USE_MOTHER_CAPITAL:
            return {
                ...state,
                useMotherCapital: action.payload
            };
        case ActionType.CHANGE_USE_KASKO:
            return {
                ...state,
                useKacko: action.payload
            };
        case ActionType.CHANGE_USE_LIFE_INSURANCE:
            return {
                ...state,
                useLifeInsurance: action.payload
            };
            default:
                return state;
        }
    };    

export { reducer, ActionType, ActionCreator };