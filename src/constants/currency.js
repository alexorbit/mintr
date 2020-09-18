import keyBy from 'lodash/keyBy';

export const CRYPTO_CURRENCIES = ['ETH', 'tSHND', 'sUSD', 'sETH'];
export const CRYPTO_CURRENCY_TO_KEY = keyBy(CRYPTO_CURRENCIES);
