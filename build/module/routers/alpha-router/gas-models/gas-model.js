import { ChainId } from '@uniswap/sdk-core';
import { CUSD_CELO, CUSD_CELO_ALFAJORES, DAI_ARBITRUM, DAI_AVAX, DAI_BNB, DAI_GOERLI, DAI_MAINNET, DAI_OPTIMISM, DAI_OPTIMISM_GOERLI, DAI_POLYGON_MUMBAI, DAI_SEPOLIA, USDC_ARBITRUM, USDC_ARBITRUM_GOERLI, USDC_AVAX, USDC_BASE, USDC_BNB, USDC_ETHEREUM_GNOSIS, USDC_GOERLI, USDC_MAINNET, USDC_MOONBEAM, USDC_OPTIMISM, USDC_OPTIMISM_GOERLI, USDC_POLYGON, USDC_SEPOLIA, USD_TOKEN, USDT_ARBITRUM, USDT_BNB, USDT_GOERLI, USDT_MAINNET, USDT_OPTIMISM, USDT_OPTIMISM_GOERLI, WBTC_GOERLI, } from '../../../providers/token-provider';
// When adding new usd gas tokens, ensure the tokens are ordered 
// from tokens with highest decimals to lowest decimals. For example,
// DAI_AVAX has 18 decimals and comes before USDC_AVAX which has 6 decimals.
export const usdGasTokensByChain = {
    [Number(process.env.REACT_APP_CHAIN_ID)]: [USD_TOKEN],
    [ChainId.MAINNET]: [DAI_MAINNET, USDC_MAINNET, USDT_MAINNET],
    [ChainId.ARBITRUM_ONE]: [DAI_ARBITRUM, USDC_ARBITRUM, USDT_ARBITRUM],
    [ChainId.OPTIMISM]: [DAI_OPTIMISM, USDC_OPTIMISM, USDT_OPTIMISM],
    [ChainId.OPTIMISM_GOERLI]: [
        DAI_OPTIMISM_GOERLI,
        USDC_OPTIMISM_GOERLI,
        USDT_OPTIMISM_GOERLI,
    ],
    [ChainId.ARBITRUM_GOERLI]: [USDC_ARBITRUM_GOERLI],
    [ChainId.GOERLI]: [DAI_GOERLI, USDC_GOERLI, USDT_GOERLI, WBTC_GOERLI],
    [ChainId.SEPOLIA]: [USDC_SEPOLIA, DAI_SEPOLIA],
    [ChainId.POLYGON]: [USDC_POLYGON],
    [ChainId.POLYGON_MUMBAI]: [DAI_POLYGON_MUMBAI],
    [ChainId.CELO]: [CUSD_CELO],
    [ChainId.CELO_ALFAJORES]: [CUSD_CELO_ALFAJORES],
    [ChainId.GNOSIS]: [USDC_ETHEREUM_GNOSIS],
    [ChainId.MOONBEAM]: [USDC_MOONBEAM],
    [ChainId.BNB]: [USDT_BNB, USDC_BNB, DAI_BNB],
    [ChainId.AVALANCHE]: [DAI_AVAX, USDC_AVAX],
    [ChainId.BASE]: [USDC_BASE],
};
/**
 * Factory for building gas models that can be used with any route to generate
 * gas estimates.
 *
 * Factory model is used so that any supporting data can be fetched once and
 * returned as part of the model.
 *
 * @export
 * @abstract
 * @class IV2GasModelFactory
 */
export class IV2GasModelFactory {
}
/**
 * Factory for building gas models that can be used with any route to generate
 * gas estimates.
 *
 * Factory model is used so that any supporting data can be fetched once and
 * returned as part of the model.
 *
 * @export
 * @abstract
 * @class IOnChainGasModelFactory
 */
export class IOnChainGasModelFactory {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FzLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3JvdXRlcnMvYWxwaGEtcm91dGVyL2dhcy1tb2RlbHMvZ2FzLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQVMsTUFBTSxtQkFBbUIsQ0FBQztBQUluRCxPQUFPLEVBQ0wsU0FBUyxFQUNULG1CQUFtQixFQUNuQixZQUFZLEVBQ1osUUFBUSxFQUNSLE9BQU8sRUFDUCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixXQUFXLEVBQ1gsWUFBWSxFQUNaLGFBQWEsRUFDYixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLFlBQVksRUFDWixZQUFZLEVBQ1osU0FBUyxFQUNULGFBQWEsRUFDYixRQUFRLEVBQ1IsV0FBVyxFQUNYLFlBQVksRUFDWixhQUFhLEVBQ2Isb0JBQW9CLEVBQ3BCLFdBQVcsR0FDWixNQUFNLG1DQUFtQyxDQUFDO0FBWTNDLGlFQUFpRTtBQUNqRSxxRUFBcUU7QUFDckUsNEVBQTRFO0FBQzVFLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUF1QztJQUNyRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztJQUNyRCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDO0lBQzVELENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7SUFDcEUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztJQUNoRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtRQUN6QixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtLQUNyQjtJQUNELENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUM7SUFDakQsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7SUFDckUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO0lBQzlDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDO0lBQ2pDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUM7SUFDOUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDM0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0lBQ3hDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ25DLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7SUFDNUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO0lBQzFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO0NBQzVCLENBQUM7QUEyREY7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sT0FBZ0Isa0JBQWtCO0NBT3ZDO0FBRUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sT0FBZ0IsdUJBQXVCO0NBWTVDIn0=