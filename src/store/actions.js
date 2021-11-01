export const Actions = {
    CHANGE_VISIBLE_MENU: 'CHANGE_VISIBLE_MENU',
    CHANGE_VISIBLE_MODAL_LOGIN: 'CHANGE_VISIBLE_MODAL_LOGIN',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    CHANGE_OPTION: 'CHANGE_OPTION',
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

export const onChangeOption = (payload) => ({
    type: Actions.CHANGE_OPTION,
    payload: payload
});