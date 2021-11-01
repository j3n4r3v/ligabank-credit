import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Indicators from '../indicators/indicators';
import { Credits, Deposits, Insurance, Services } from '../tab-content/tab-content';
import { Tab } from '../tab/tab';
import { Tabs as TabTitles, TabNames } from '../utils/const';

import { ReactComponent as Deposit } from './deposits.svg';
import { ReactComponent as Credit } from './credits.svg';
import { ReactComponent as Insurances } from './insurances.svg';
import { ReactComponent as Service } from './online-services.svg';

import './tabs.scss';

const Tabs = ({ className }) => {

    const [activeTab, setActiveTab] = useState(TabTitles.DEPOSITS);

    const tabOrder = [...Object.keys(TabTitles)];

    const tabImages = {
        DEPOSITS: <Deposit />,
        CREDITS: <Credit />,
        INSURANCE: <Insurances />,
        ONLINE_SERVICES: <Service />

    };

    const onTabClick = () => {
        setActiveTab(tabOrder[(tabOrder.indexOf(activeTab) + 1) % tabOrder.length]);
    };

    return (
        <section className={`tabs ${className}`} onTouchMove={onTabClick}>
            <h2 className="visually-hidden">Наши предложения</h2>
            <div className="tabs__wrapper">
                {tabOrder.map((tab, i) =>
                    <Tab key={tab + i}
                        onClick={() => setActiveTab(tab)}
                        className={`tabs__btn ${activeTab === tab && 'tab--active'}`}
                        nameButton={TabNames[tab]}>
                        {tabImages[tab]}
                    </Tab>
                )}
            </div>
            <div className="tabs__content" >
                {activeTab === TabTitles.DEPOSITS && <Deposits className={`tabs__${TabTitles.DEPOSITS.toLowerCase()}`} />}
                {activeTab === TabTitles.CREDITS && <Credits className={`tabs__${TabTitles.CREDITS.toLowerCase()}`} />}
                {activeTab === TabTitles.INSURANCE && <Insurance className={`tabs__${TabTitles.INSURANCE.toLowerCase()}`} />}
                {activeTab === TabTitles.ONLINE_SERVICES && <Services className={`tabs__${TabTitles.ONLINE_SERVICES.toLowerCase().replace('_', '-')}`} />}
            </div>
            <Indicators className="tabs__indicators" count={tabOrder.length} activeIndicator={tabOrder.indexOf(activeTab)} />
        </section>
    );
};

Tabs.propTypes = {
    className: PropTypes.string.isRequired
};

export { Tabs };