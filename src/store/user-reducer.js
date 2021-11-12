
const initialState = {
    data: {
        count: 1,
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        name: localStorage.getItem('name')
    }
};

const ActionCreator = {
    saveData : (payload) => ({
        type: ActionType.SAVE_DATA,
        payload: payload
    }),
    
    deleteData : () => ({
        type: ActionType.DELETE_DATA,
    })
};


const ActionType = {
    SAVE_DATA: 'SAVE_DATA',
    DELETE_DATA: 'DELETE_DATA'
};


const reducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ActionType.SAVE_DATA:
            return {
                ...state,
                data: { ...state.data,
                        ...action.payload
                      }
            };

        case ActionType.DELETE_DATA:
            return {
                ...state,
                data: { count: state.data.count,
                        email: state.data.email,
                        phone: state.data.phone,
                        name: state.data.name 
                      }
            };

        default:
            return state;
    }
};    

export { reducer, ActionType, ActionCreator };