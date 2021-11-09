export const Actions = {
    CHANGE_VISIBLE_MENU: 'CHANGE_VISIBLE_MENU',
    CHANGE_VISIBLE_MODAL_LOGIN: 'CHANGE_VISIBLE_MODAL_LOGIN',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    ON_CHANGE_OPTION: 'ON_CHANGE_OPTION',
    CHANGE_COST: 'CHANGE_COST',
    CHANGE_FEE: 'CHANGE_FEE',
    CHANGE_PERIOD: 'CHANGE_PERIOD',
    CHANGE_USE_MOTHER_CAPITAL: 'CHANGE_USE_MOTHER_CAPITAL',
    CHANGE_USE_LIFE_INSURANCE: 'CHANGE_USE_LIFE_INSURANCE',
    CHANGE_USE_KASKO: 'CHANGE_USE_KASKO',
    SAVE_DATA: 'SAVE_DATA',
    DELETE_DATA: 'DELETE_DATA'
};

export const changeVisibleMenu = (payload) => ({
    type: Actions.CHANGE_VISIBLE_MENU,
    payload: payload
});

export const changeVisibleModalLogin = (payload) => ({
    type: Actions.CHANGE_VISIBLE_MODAL_LOGIN,
    payload: payload
});

export const login = (payload) => ({
    type: Actions.LOGIN,
    payload: payload
});

export const logout = () => ({
    type: Actions.LOGOUT
});

export const changeOption = (payload) => ({
    type: Actions.ON_CHANGE_OPTION,
    payload: payload
});

export const changeCost = (payload) => ({
    type: Actions.CHANGE_COST,
    payload: payload
});

export const changeFee = (payload) => ({
    type: Actions.CHANGE_FEE,
    payload: payload
});

export const changePeriod = (payload) => ({
    type: Actions.CHANGE_PERIOD,
    payload: payload
});

export const changeUseMotherCapital = (payload) => ({
    type: Actions.CHANGE_USE_MOTHER_CAPITAL,
    payload: payload
});

export const changeUseKasko = (payload) => ({
    type: Actions.CHANGE_USE_KASKO,
    payload: payload
});

export const changeUseLifeInsurance = (payload) => ({
    type: Actions.CHANGE_USE_LIFE_INSURANCE,
    payload: payload
});

export const saveData = (payload) => ({
    type: Actions.SAVE_DATA,
    payload: payload
});

export const deleteData = () => ({
    type: Actions.DELETE_DATA,
});