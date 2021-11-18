const ESC_CODE = 27;
const SLIDER_TIMEOUT = 4000;
const PASSWORD_LENGTH = 8;
const STEP_FEE = 5;
const MOUNTS_IN_YEAR = 12;
const PART_PAYMENT_OF_INCOME = 45;

const TabEnum = {
    DEPOSIT: 'DEPOSIT',
    CREDIT: 'CREDIT',
    INSURANCE: 'INSURANCE',
    SERVICE: 'SERVICE'
};

const TabName = {
    DEPOSIT: 'Вклады',
    CREDIT: 'Кредиты',
    INSURANCE: 'Страхование',
    SERVICE: 'Онлайн-сервисы'
};

const CreditTarget = {
    MORTGAGE: 'MORTGAGE',
    AUTO_CREDIT: 'AUTO_CREDIT'
};

const CreditTargetName = {
    MORTGAGE: 'Ипотечное кредитование',
    AUTO_CREDIT: 'Автомобильное кредитование'
};

const MortgageConst = {
    MIN_COST: 1200000,
    MAX_COST: 25000000,
    STEP_COST: 100000,
    PARENT_CAPITAL: 470000,
    MIN_FEE: 10,
    MAX_FEE: 100,
    MIN_PERIOD: 5,
    MAX_PERIOD: 30,
    MIN_CREDIT: 500000,
    MIN_INTEREST_RATE: 8.50,
    MAX_INTEREST_RATE: 9.40,
    PERCENT_FEE_OF_COST_BORDER: 15
};

const AutoCreditConst = {
    MIN_COST: 500000,
    MAX_COST: 5000000,
    STEP_COST: 50000,
    MIN_FEE: 20,
    MAX_FEE: 100,
    MIN_PERIOD: 1,
    MAX_PERIOD: 5,
    MIN_CREDIT: 200000,
    MIN_INTEREST_RATE: 15,
    MAX_INTEREST_RATE: 16,
    MAX_INTEREST_RATE_ADD: 8.5,
    MIN_INTEREST_RATE_ALL_ADD: 3.5,
    MONEY_BORDER: 2000000
};

export { ESC_CODE, SLIDER_TIMEOUT, PASSWORD_LENGTH, STEP_FEE, MOUNTS_IN_YEAR, PART_PAYMENT_OF_INCOME,
     TabEnum, TabName, CreditTarget, CreditTargetName, MortgageConst, AutoCreditConst };