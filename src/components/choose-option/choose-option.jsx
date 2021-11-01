import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { CreditTargetNames } from '../utils/const';
import { ListOptions } from '../list-options/list-options';
import { onChangeOption } from '../../store/actions';

import './choose-option.scss';

const ChooseOption = ({ className }) => {
    const dispatch = useDispatch();

    const onChangeTarget = (value) => {
        dispatch(onChangeOption(value));
    };

    return (
        <section className={`${className} choose-options`}>
            <h3 className="choose-options__subtitle">Шаг 1. Цель кредита</h3>
            <ListOptions
                className="choose-options__options"
                options={CreditTargetNames}
                title={'Выберите цель кредита'}
                onChange={(value) => onChangeTarget(value)}
            />
        </section>
    );
};

ChooseOption.propTypes = {
    className: PropTypes.string.isRequired
};

export { ChooseOption };