import { combineReducers } from 'redux';

import { reducer as mobile } from './mobile-reducer';
import { reducer as calculator } from './calculator-reducer';
import { reducer as user } from './user-reducer';

import NameSpace from './name-space';

export default combineReducers({
    [NameSpace.MOBILE]: mobile,
    [NameSpace.CALCULATOR]: calculator,
    [NameSpace.USER]: user
});