import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Indicators from '../indicators/indicators';
import { Credit, Deposit, Insurance, Service } from '../tab-content/tab-content';
import { Tab } from '../tab/tab';
import { TabEnum as TabTitle, TabName } from '../utils/const';

import { ReactComponent as DepositIcon } from './deposits.svg';
import { ReactComponent as CreditIcon } from './credits.svg';
import { ReactComponent as InsuranceIcon } from './insurances.svg';
import { ReactComponent as ServiceIcon } from './online-services.svg';

import './tabs.scss';

const Tabs = ({ className }) => {

    const [activeTab, setActiveTab] = useState(TabTitle.DEPOSIT);

    const tabOrders = [...Object.keys(TabTitle)];

    const tabImage = {
        DEPOSIT: <DepositIcon />,
        CREDIT: <CreditIcon />,
        INSURANCE: <InsuranceIcon />,
        SERVICE: <ServiceIcon />

    };

    const onTabClick = () => {
        setActiveTab(tabOrders[(tabOrders.indexOf(activeTab) + 1) % tabOrders.length]);
    };

    return (
        <section className={`tabs ${className}`} onTouchMove={onTabClick}>
            <h2 className="visually-hidden">Наши предложения</h2>
            <div className="tabs__wrapper">
                {tabOrders.map((tab, i) =>

                    <Tab key={tab + i}
                        onClick={() => setActiveTab(tab)}
                        className={`tabs__btn ${activeTab === tab && 'tab--active'}`}
                        nameButton={TabName[tab]}>
                        {tabImage[tab]}
                    </Tab>
                    
                )}
            </div>
            <div className="tabs__content" >
                {activeTab === TabTitle.DEPOSIT && <Deposit className={`tabs__${TabTitle.DEPOSIT.toLowerCase()}`} />}
                {activeTab === TabTitle.CREDIT && <Credit className={`tabs__${TabTitle.CREDIT.toLowerCase()}`} />}
                {activeTab === TabTitle.INSURANCE && <Insurance className={`tabs__${TabTitle.INSURANCE.toLowerCase()}`} />}
                {activeTab === TabTitle.SERVICE && <Service className={`tabs__${TabTitle.SERVICE.toLowerCase().replace('_', '-')}`} />}
            </div>
            <Indicators className="tabs__indicators" count={tabOrders.length} activeIndicator={tabOrders.indexOf(activeTab)} />
        </section>
    );
};

Tabs.propTypes = {
    className: PropTypes.string.isRequired
};

export { Tabs };