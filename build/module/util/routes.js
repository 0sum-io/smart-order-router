import { Protocol } from '@uniswap/router-sdk';
import { Percent } from '@uniswap/sdk-core';
import { Pair } from '@uniswap/v2-sdk';
import { Pool } from '@uniswap/v3-sdk';
import _ from 'lodash';
import { V3_CORE_FACTORY_ADDRESSES } from './addresses';
import { CurrencyAmount } from '.';
export const routeToString = (route) => {
    const routeStr = [];
    const tokens = route.protocol === Protocol.V3
        ? route.tokenPath
        : // MixedRoute and V2Route have path
            route.path;
    const tokenPath = _.map(tokens, (token) => `${token.symbol}`);
    const pools = route.protocol === Protocol.V3 || route.protocol === Protocol.MIXED
        ? route.pools
        : route.pairs;
    const poolFeePath = _.map(pools, (pool) => {
        return `${pool instanceof Pool
            ? ` -- ${pool.fee / 10000}% [${Pool.getAddress(pool.token0, pool.token1, pool.fee, undefined, pool.chainId == Number(process.env.REACT_APP_CHAIN_ID) ? process.env.REACT_APP_V3_CORE_FACTORY_ADDRESS : V3_CORE_FACTORY_ADDRESSES[pool.chainId])}]`
            : ` -- [${Pair.getAddress(pool.token0, pool.token1)}]`} --> `;
    });
    for (let i = 0; i < tokenPath.length; i++) {
        routeStr.push(tokenPath[i]);
        if (i < poolFeePath.length) {
            routeStr.push(poolFeePath[i]);
        }
    }
    return routeStr.join('');
};
export const routeAmountsToString = (routeAmounts) => {
    const total = _.reduce(routeAmounts, (total, cur) => {
        return total.add(cur.amount);
    }, CurrencyAmount.fromRawAmount(routeAmounts[0].amount.currency, 0));
    const routeStrings = _.map(routeAmounts, ({ protocol, route, amount }) => {
        const portion = amount.divide(total);
        const percent = new Percent(portion.numerator, portion.denominator);
        /// @dev special case for MIXED routes we want to show user friendly V2+V3 instead
        return `[${protocol == Protocol.MIXED ? 'V2 + V3' : protocol}] ${percent.toFixed(2)}% = ${routeToString(route)}`;
    });
    return _.join(routeStrings, ', ');
};
export const routeAmountToString = (routeAmount) => {
    const { route, amount } = routeAmount;
    return `${amount.toExact()} = ${routeToString(route)}`;
};
export const poolToString = (p) => {
    return `${p.token0.symbol}/${p.token1.symbol}${p instanceof Pool ? `/${p.fee / 10000}%` : ``}`;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFJdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFFbkMsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQzNCLEtBQXFDLEVBQzdCLEVBQUU7SUFDVixNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEIsTUFBTSxNQUFNLEdBQ1YsS0FBSyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsRUFBRTtRQUM1QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVM7UUFDakIsQ0FBQyxDQUFDLG1DQUFtQztZQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ2pCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlELE1BQU0sS0FBSyxHQUNULEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxLQUFLO1FBQ2pFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSztRQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2xCLE1B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