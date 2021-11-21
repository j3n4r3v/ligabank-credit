const Actions = {
    CHANGE_VISIBLE_MENU: 'CHANGE_VISIBLE_MENU',
    CHANGE_VISIBLE_MODAL_LOGIN: 'CHANGE_VISIBLE_MODAL_LOGIN',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    CHANGE_VISIBLE_LIST: 'CHANGE_VISIBLE_LIST',
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

const changeVisibleMenu = (payload) => ({
    type: Actions.CHANGE_VISIBLE_MENU,
    payload: payload
});

const changeVisibleModalLogin = (payload) => ({
    type: Actions.CHANGE_VISIBLE_MODAL_LOGIN,
    payload: payload
});

const login = (payload) => ({
    type: Actions.LOGIN,
    payload: payload
});

const logout = () => ({
    type: Actions.LOGOUT
});

const changeVisibleList = (payload) => ({
    type: Actions.CHANGE_VISIBLE_LIST,
    payload: payload
});

const changeOption = (payload) => ({
    type: Actions.ON_CHANGE_OPTION,
    payload: payload
});

const changeCost = (payload) => ({
    type: Actions.CHANGE_COST,
    payload: payload
});

const changeFee = (payload) => ({
    type: Actions.CHANGE_FEE,
    payload: payload
});

const changePeriod = (payload) => ({
    type: Actions.CHANGE_PERIOD,
    payload: payload
});

const changeUseMotherCapital = (payload) => ({
    type: Actions.CHANGE_USE_MOTHER_CAPITAL,
    payload: payload
});

const changeUseKasko = (payload) => ({
    type: Actions.CHANGE_USE_KASKO,
    payload: payload
});

const changeUseLifeInsurance = (payload) => ({
    type: Actions.CHANGE_USE_LIFE_INSURANCE,
    payload: payload
});

const saveData = (payload) => ({
    type: Actions.SAVE_DATA,
    payload: payload
});

const deleteData = () => ({
    type: Actions.DELETE_DATA,
});

export {Actions, changeVisibleMenu, changeVisibleModalLogin, login, logout, changeVisibleList, changeOption, changeCost,
    changeFee, changePeriod, changeUseMotherCapital, changeUseKasko,  changeUseLifeInsurance, saveData,
    deleteData};