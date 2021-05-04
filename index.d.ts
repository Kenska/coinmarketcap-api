declare module "coinmarketcap-api"
{
    export type Status =
    {
        /**
         * Current timestamp (ISO 8601) on the server.
         */
        timestamp: string;

        /**
         * An internal error code for the current error. If a unique error code is not available
         * the HTTP status code is returned. `null` is returned if there is no error.
         */
        error_code: number;

        /**
         * An error message to go along with the error code.
         */
        error_message: string;

        /**
         * Number of milliseconds taken to generate this response.
         */
        elapsed: number;

        /**
         * Number of API call credits that were used for this call.
         */
        credit_count: number;
    };

    export type Platform =
    {
        /**
         * The unique CoinMarketCap ID for the parent platform cryptocurrency.
         */
        id: number;

        /**
         * The name of the parent platform cryptocurrency.
         */
        name: string;

        /**
         * The ticker symbol for the parent platform cryptocurrency.
         */
        symbol: string;

        /**
         * The web URL friendly shorthand version of the parent platform cryptocurrency name.
         */
        slug: string;

        /**
         * The token address on the parent platform cryptocurrency.
         */
        token_address: string;
    };

    export type IDMapCryptocurrency =
    {
        /**
         * The unique CoinMarketCap ID for this cryptocurrency.
         */
        id: number;

        /**
         * The name of this cryptocurrency.
         */
        name: string;

        /**
         * The ticker symbol for this cryptocurrency, always in all caps.
         */
        symbol: string;

        /**
         * The web URL friendly shorthand version of this cryptocurrency name.
         */
        slug: string;

        /**
         * 1 if this cryptocurrency has at least 1 active market currently being tracked by the platform,
         * otherwise 0. A value of 1 is analogous with `listing_status=active`.
         */
        is_active: number;

        /**
         * The listing status of the cryptocurrency. _This field is only returned if requested through the `aux` request parameter._
         */
        status: string;

        /**
         * Timestamp (ISO 8601) of the date this cryptocurrency was first available on the platform.
         */
        first_historical_data: string;

        /**
         * Timestamp (ISO 8601) of the last time this cryptocurrency's market data was updated.
         */
        last_historical_data: string;

        /**
         * Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null.
         */
        platform: Platform;
    };

    export type MetadataCryptocurrency =
    {
        /**
         * The unique CoinMarketCap ID for this cryptocurrency.
         */
        id: number;

        /**
         * The name of this cryptocurrency.
         */
        name: string;

        /**
         * The ticker symbol for this cryptocurrency, always in all caps.
         */
        symbol: string;

        /**
         * The category for this cryptocurrency.
         */
        category: "coin" | "token";

        /**
         * The web URL friendly shorthand version of this cryptocurrency name.
         */
        slug: string;

        /**
         * Link to a CoinMarketCap hosted logo png for this cryptocurrency. 64px is default size returned.
         * Replace "64x64" in the image path with these alternative sizes: 16, 32, 64, 128, 200
         */
        logo: number;

        /**
         * A CoinMarketCap supplied brief description of this cryptocurrency. This field will return null if a description is not available.
         */
        description: string;

        /**
         * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
         */
        date_added: string;

        /**
         * A Markdown formatted notice that may highlight a significant event or condition that is impacting the cryptocurrency or how it is displayed,
         * otherwise null. A notice may highlight a recent or upcoming mainnet swap, symbol change, exploit event,
         * or known issue with a particular exchange or market, for example. If present, this notice is also displayed in an alert banner
         * at the top of the cryptocurrency's page on coinmarketcap.com.
         */
        notice: string;

        /**
         * Tags associated with this cryptocurrency.
         */
        tags: string[];

        /**
         * Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null.
         */
        platform: Platform;
    };

    export type TickerCryptocurrency =
    {
        /**
         * The unique CoinMarketCap ID for this cryptocurrency.
         */
        id: number;

        /**
         * The name of this cryptocurrency.
         */
        name: string;

        /**
         * The ticker symbol for this cryptocurrency, always in all caps.
         */
        symbol: string;

        /**
         * The web URL friendly shorthand version of this cryptocurrency name.
         */
        slug: string;

        /**
         * The cryptocurrency's CoinMarketCap rank by market cap.
         */
        cmc_rank: number;

        /**
         * The number of active trading pairs available for this cryptocurrency across supported exchanges.
         */
        num_market_pairs: number;

        /**
         * The approximate number of coins circulating for this cryptocurrency.
         */
        circulating_supply: number;

        /**
         * The approximate total amount of coins in existence right now (minus any coins that have been verifiably burned).
         */
        total_supply: number;

        /**
         * The market cap by total supply. _This field is only returned if requested through the `aux` request parameter._
         */
        market_cap_by_total_supply: number;

        /**
         * The expected maximum limit of coins ever to be available for this cryptocurrency.
         */
        max_supply: number;

        /**
         * Timestamp (ISO 8601) of the last time this cryptocurrency's market data was updated.
         */
        last_updated: string;

        /**
         * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
         */
        date_added: string;

        /**
         * Array of tags associated with this cryptocurrency. Currently only a mineable tag will be returned if the cryptocurrency is mineable.
         * Additional tags will be returned in the future.
         */
        tags: string[];

        /**
         * Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null.
         */
        platform: Platform;

        /**
         * A map of market quotes in different currency conversions. The default map included is USD.
         */
        quote: QuoteMap;
    };

    export type QuoteCryptocurrency =
    {
        /**
         * The unique CoinMarketCap ID for this cryptocurrency.
         */
        id: number;

        /**
         * The name of this cryptocurrency.
         */
        name: string;

        /**
         * The ticker symbol for this cryptocurrency, always in all caps.
         */
        symbol: string;

        /**
         * The web URL friendly shorthand version of this cryptocurrency name.
         */
        slug: string;

        /**
         * 1 if this cryptocurrency has at least 1 active market currently being tracked by the platform, otherwise 0.
         * A value of 1 is analogous with `listing_status=active`.
         */
        is_active: number;

        /**
         * 1 if this is a fiat
         */
        is_fiat: number;

        /**
         * The cryptocurrency's CoinMarketCap rank by market cap.
         */
        cmc_rank: number;

        /**
         * The number of active trading pairs available for this cryptocurrency across supported exchanges.
         */
        num_market_pairs: number;

        /**
         * The approximate number of coins circulating for this cryptocurrency.
         */
        circulating_supply: number;

        /**
         * The approximate total amount of coins in existence right now (minus any coins that have been verifiably burned).
         */
        total_supply: number;

        /**
         * The market cap by total supply. _This field is only returned if requested through the `aux` request parameter._
         */
        market_cap_by_total_supply: number;

        /**
         * The expected maximum limit of coins ever to be available for this cryptocurrency.
         */
        max_supply: number;

        /**
         * Timestamp (ISO 8601) of when this cryptocurrency was added to CoinMarketCap.
         */
        date_added: number;

        /**
         * Array of tags associated with this cryptocurrency. Currently only a mineable tag will be returned if the cryptocurrency is mineable. Additional tags will be returned in the future.
         */
        tags: string[];

        /**
         * Metadata about the parent cryptocurrency platform this cryptocurrency belongs to if it is a token, otherwise null.
         */
        platform: Platform;

        /**
         * Timestamp (ISO 8601) of the last time this cryptocurrency's market data was updated.
         */
        last_updated: string;

        /**
         * A map of market quotes in different currency conversions. The default map included is USD.
         */
        quote: QuoteMap;
    };

    export type Quote =
    {
        /**
         * Price in the specified currency for this historical.
         */
        price: number;

        /**
         * Rolling 24 hour adjusted volume in the specified currency.
         */
        volume_24h: number;

        /**
         * Rolling 24 hour reported volume in the specified currency. _This field is only returned if requested through the `aux` request parameter._
         */
        volume_24h_reported: number;

        /**
         * Rolling 7 day adjusted volume in the specified currency. _This field is only returned if requested through the `aux` request parameter._
         */
        volume_7d: number;

        /**
         * Rolling 7 day reported volume in the specified currency. _This field is only returned if requested through the `aux` request parameter._
         */
        volume_7d_reported: number;

        /**
         * Rolling 30 day adjusted volume in the specified currency. _This field is only returned if requested through the `aux` request parameter._
         */
        volume_30d: number;

        /**
         * Rolling 30 day reported volume in the specified currency. _This field is only returned if requested through the `aux` request parameter._
         */
        volume_30d_reported: string;

        /**
         * Market cap in the specified currency.
         */
        market_cap: number;

        /**
         * 1 hour change in the specified currency.
         */
        percent_change_1h: number;

        /**
         * 24 hour change in the specified currency.
         */
        percent_change_24h: number;

        /**
         * 7 day change in the specified currency.
         */
        percent_change_7d: number;

        /**
         * Timestamp (ISO 8601) of when the conversion currency's current value was referenced.
         */
        last_updated: string;
    };

    export type QuoteMap = { [id: string]: Quote };

    export type CryptocurrencyURLs =
    {
        /**
         * Array of website URLs.
         */
        website: string[];

        /**
         * Array of white paper or technical documentation URLs.
         */
        technical_doc: string[];

        /**
         * Array of block explorer URLs.
         */
        explorer: string[];

        /**
         * Array of source code URLs.
         */
        source_code: string[];

        /**
         * Array of message board URLs.
         */
        message_board: string[];

        /**
         * Array of chat service URLs.
         */
        chat: string[];

        /**
         * Array of announcement URLs.
         */
        announcement: string[];

        /**
         * Array of Reddit community page URLs.
         */
        reddit: string[];

        /**
         * Array of official twitter profile URLs.
         */
        twitter: string[];
    };

    export type Result<T> =
    {
        status: Status;
        data: T;
    };

    export default class CoinMarketCap
    {
        /**
         *
         * @param apiKey API key for accessing the CoinMarketCap API
         * @param options Options for the CoinMarketCap instance
         */
        public constructor(apiKey: string, options?: {
            /**
             * Version of API.
             *
             * @default "v2"
             */
            version: string;

            /**
             * Fetch function to use. Defaults to node-fetch
             */
            fetcher: (url: RequestInfo, init?: RequestInit) => Promise<Response>;

            /**
             * Configuration for fetch request
             */
            config: RequestInit;
        });

        /**
         * Get a paginated list of all cryptocurrencies by CoinMarketCap ID.
         *
         * @param args Options for the request
         *
         * @example
         * const client = new CoinMarketCap('api key')
         * client.getIdMap().then(console.log).catch(console.error)
         * client.getIdMap({listingStatus: 'inactive', limit: 10}).then(console.log).catch(console.error)
         * client.getIdMap({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
         * client.getIdMap({symbol: ['BTC', 'ETH']}).then(console.log).catch(console.error)
         * client.getIdMap({sort: 'cmc_rank'}).then(console.log).catch(console.error)
         */
        public getIdMap(args?: {
            /**
             * Only active cryptocurrencies are returned by default. Pass `inactive` to get a list of cryptocurrencies that are no longer active.
             * Pass `untracked` to get a list of cryptocurrencies that are listed but do not yet meet methodology requirements to have tracked markets available.
             * You may pass one or more comma-separated values.
             *
             * @default "active"
             */
            listingStatus?: "active" | "inactive" | "untracked";

            /**
             * Optionally offset the start (1-based index) of the paginated list of items to return.
             *
             * @default 1
             */
            start?: number;

            /**
             * Optionally specify the number of results to return. Use this parameter and the "start" parameter to determine your own pagination size.
             * Between 1 and 5000.
             */
            limit?: number;

            /**
             * Optionally pass a comma-separated list or an array of cryptocurrency symbols to return CoinMarketCap IDs for.
             * If this option is passed, other options will be ignored.
             */
            symbol?: string[] | string;

            /**
             * What field to sort the list of cryptocurrencies by.
             *
             * @default "id"
             */
            sort?: "id" | "cmc_rank";

            /**
             * Optionally specify a comma-separated list of supplemental data fields to return.
             * Pass `platform,first_historical_data,last_historical_data,is_active,status` to include all auxiliary fields.
             *
             * @default "platform,first_historical_data,last_historical_data,is_active"
             */
            aux?: string;
        }): Promise<Result<IDMapCryptocurrency[]>>;

        /**
         * Get static metadata for one or more cryptocurrencies.
         * Either id or symbol is required, but passing in both is not allowed.
         *
         * @param args Options for the request
         *
         * @example
         * const client = new CoinMarketCap('api key')
         * client.getMetadata({id: '1'}).then(console.log).catch(console.error)
         * client.getMetadata({id: [1, 2]}).then(console.log).catch(console.error)
         */
        public getMetadata(args: {
            /**
             * One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,2"
             */
            id: number[] | string[] | string | number;

            /**
             * Optionally specify a comma-separated list of supplemental data fields to return.
             * Pass `urls,logo,description,tags,platform,date_added,notice,status` to include all auxiliary fields.
             *
             * @default "urls,logo,description,tags,platform,date_added,notice"
             */
            aux?: string;
        }): Promise<Result<{ [id: string]: MetadataCryptocurrency }>>;

        /**
         * Get static metadata for one or more cryptocurrencies.
         * Either id or symbol is required, but passing in both is not allowed.
         *
         * @param args Options for the request
         *
         * @example
         * const client = new CoinMarketCap('api key')
         * client.getMetadata({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
         * client.getMetadata({symbol: ['BTC', 'ETH']}).then(console.log).catch(console.error)
         */
        public getMetadata(args: {
            /**
             * One or more comma-separated cryptocurrency symbols.
             * Example: "BTC,ETH". At least one "id" or "symbol" is required for this request.
             */
            symbol: string[] | string;

            /**
             * Optionally specify a comma-separated list of supplemental data fields to return.
             * Pass `urls,logo,description,tags,platform,date_added,notice,status` to include all auxiliary fields.
             *
             * @default "urls,logo,description,tags,platform,date_added,notice"
             */
            aux?: string;
        }): Promise<Result<{ [id: string]: MetadataCryptocurrency }>>;

        /**
         * Get static metadata for one or more cryptocurrencies.
         * Either id or symbol is required, but passing in both is not allowed.
         *
         * @param args Options for the request
         *
         * @example
         * const client = new CoinMarketCap('api key')
         * client.getMetadata({symbol: 'bitcoin,ethereum'}).then(console.log).catch(console.error)
         * client.getMetadata({symbol: ['bitcoin', 'ethereum']}).then(console.log).catch(console.error)
         */
        /*
        * TODO: implement the `slug` alternative
        public getMetadata(args: {
            slug: string[] | string
        }): Promise<Result<{ [id: string]: MetadataCryptocurrency }>>;
        */

        public getTickers(args: {
            /**
             * Optionally offset the start (1-based index) of the paginated list of items to return.
             *
             * @default 1
             */
            start?: number;

            /**
             * Optionally specify the number of results to return. Use this parameter and the "start" parameter to determine your own pagination size.
             *
             * @default 100
             */
            limit?: number;

            /**
             * Optionally specify a threshold of minimum USD price to filter results by.
             * Between 0 and 100.000.000.000.000.000.
             */
            price_min?: number;

            /**
             * Optionally specify a threshold of maximum USD price to filter results by.
             * Between 0 and 100.000.000.000.000.000.
             */
            price_max?: number;

            /**
             * Optionally specify a threshold of minimum market cap to filter results by.
             * Between 0 and 100.000.000.000.000.000.
             */
            market_cap_min?: number;

            /**
             * Optionally specify a threshold of maximum market cap to filter results by.
             * Between 0 and 100.000.000.000.000.000.
             */
            market_cap_max?: number;

            /**
             * Optionally specify a threshold of minimum 24 hour USD volume to filter results by.
             * Between 0 and 100.000.000.000.000.000.
             */
            volume_24h_min?: number;

            /**
             * Optionally specify a threshold of maximum 24 hour USD volume to filter results by.
             * Between 0 and 100.000.000.000.000.000.
             */
            volume_24h_max?: number;

            /**
             * Optionally specify a threshold of minimum circulating supply to filter results by.
             * Between 0 and 100.000.000.000.000.000.
             */
            circulating_supply_min?: number;

            /**
             * Optionally specify a threshold of maximum circulating supply to filter results by.
             * Between 0 and 100.000.000.000.000.000.
             */
            circulating_supply_max?: number;

            /**
             * Optionally specify a threshold of minimum 24 hour percent change to filter results by.
             * >= -100
             */
            percent_change_24h_min?: number;

            /**
             * Optionally specify a threshold of maximum 24 hour percent change to filter results by.
             * >= -100
             */
            percent_change_24h_max?: number;

            /**
             * Optionally calculate market quotes in up to 120 currencies at once by passing a comma-separated list of cryptocurrency or fiat currency symbols.
             * Each additional convert option beyond the first requires an additional call credit.
             * A list of supported fiat options can be found [here](https://coinmarketcap.com/api/documentation/v1/#section/Standards-and-Conventions).
             * Each conversion is returned in its own "quote" object.
             */
            convert?: string;

            /**
             * Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format.
             * Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
             */
            convert_id?: string;

            /**
             * What field to sort the list of cryptocurrencies by.
             *
             * @default "market_cap"
             */
            sort?: "name" | "symbol" | "date_added" | "market_cap" | "market_cap_strict" | "price" | "circulating_supply" | "total_supply" | "max_supply" | "num_market_pairs" | "volume_24h" | "percent_change_1h" | "percent_change_24h" | "percent_change_7d" | "market_cap_by_total_supply_strict" | "volume_7d" | "volume_30d";

            /**
             * The direction in which to order cryptocurrencies against the specified sort.
             */
            sort_dir: "asc" | "desc";

            /**
             * The type of cryptocurrency to include.
             *
             * @default "all"
             */
            cryptocurrency_type: "all" | "coins" | "tokens";

            /**
             * The tag of cryptocurrency to include.
             */
            tag: "all" | "defi" | "filesharing";

            /**
             * Optionally specify a comma-separated list of supplemental data fields to return.
             * Pass `num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply,market_cap_by_total_
             * supply,volume_24h_reported,volume_7d,volume_7d_reported,volume_30d,volume_30d_reported,is_market_cap_included_in_calc` to include all auxiliary fields.
             *
             * @default "num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply"
             */
            aux: string;
        }): Promise<Result<TickerCryptocurrency[]>>;

        /**
         * Get latest market quote for 1 or more cryptocurrencies.
         *
         * @param args Options for the request
         *
         * @example
         * const client = new CoinMarketCap('api key')
         * client.getQuotes({id: '1'}).then(console.log).catch(console.error)
         * client.getQuotes({id: [1, 2], convert: 'USD,EUR'}).then(console.log).catch(console.error)
         */
        public getQuotes(args: {
            /**
             * One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,2"
             */
            id: number[] | string[] | string | number;

            /**
             * Optionally calculate market quotes in up to 120 currencies at once by passing a comma-separated list of cryptocurrency or fiat currency symbols.
             * Each additional convert option beyond the first requires an additional call credit.
             * A list of supported fiat options can be found [here](https://coinmarketcap.com/api/documentation/v1/#section/Standards-and-Conventions).
             * Each conversion is returned in its own "quote" object.
             */
            convert?: string;

            /**
             * Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format.
             * Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
             */
            convert_id?: string;

            /**
             * Optionally specify a comma-separated list of supplemental data fields to return.
             * Pass `num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply,market_cap_by_total_supply,
             * volume_24h_reported,volume_7d,volume_7d_reported,volume_30d,volume_30d_reported,is_active,is_fiat` to include all auxiliary fields.
             *
             * @default "num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply,is_active,is_fiat"
             */
            aux?: string;

            /**
             * Pass `true` to relax request validation rules.
             * When requesting records on multiple cryptocurrencies an error is returned if no match is found for 1 or more requested cryptocurrencies.
             * If set to true, invalid lookups will be skipped allowing valid cryptocurrencies to still be returned.
             *
             * @default false
             */
            skip_invalid?: boolean;
        }): Promise<Result<{ [id: string]: QuoteCryptocurrency }>>;

        /**
         * Get latest market quote for 1 or more cryptocurrencies.
         *
         * @param args Options for the request
         *
         * @example
         * const client = new CoinMarketCap('api key')
         * client.getQuotes({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
         * client.getQuotes({symbol: ['BTC', 'ETH']}).then(console.log).catch(console.error)
         */
        public getQuotes(args: {
            /**
             * One or more comma-separated cryptocurrency symbols.
             * Example: "BTC,ETH". At least one "id" or "symbol" is required for this request.
             */
            symbol: string[] | string;

            /**
             * Optionally calculate market quotes in up to 120 currencies at once by passing a comma-separated list of cryptocurrency or fiat currency symbols.
             * Each additional convert option beyond the first requires an additional call credit.
             * A list of supported fiat options can be found [here](https://coinmarketcap.com/api/documentation/v1/#section/Standards-and-Conventions).
             * Each conversion is returned in its own "quote" object.
             */
            convert?: string;

            /**
              * Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This option is identical to `convert` outside of ID format.
              * Ex: convert_id=1,2781 would replace convert=BTC,USD in your query. This parameter cannot be used when `convert` is used.
              */
            convert_id?: string;

            /**
              * Optionally specify a comma-separated list of supplemental data fields to return.
              * Pass `num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply,market_cap_by_total_supply,
              * volume_24h_reported,volume_7d,volume_7d_reported,volume_30d,volume_30d_reported,is_active,is_fiat` to include all auxiliary fields.
              *
              * @default "num_market_pairs,cmc_rank,date_added,tags,platform,max_supply,circulating_supply,total_supply,is_active,is_fiat"
              */
            aux?: string;

            /**
              * Pass `true` to relax request validation rules.
              * When requesting records on multiple cryptocurrencies an error is returned if no match is found for 1 or more requested cryptocurrencies.
              * If set to true, invalid lookups will be skipped allowing valid cryptocurrencies to still be returned.
              *
              * @default false
              */
            skip_invalid?: boolean;
        }): Promise<Result<{ [id: string]: QuoteCryptocurrency }>>;

        /**
         * Get global information
         *
         * @param {} convert
         *
         * @example
         * const client = new CoinMarketCap()
         * client.getGlobal({convert: 'GBP'}).then(console.log).catch(console.error)
         */
        public getGlobal(args: {
            /**
             * Optionally calculate market quotes in up to 120 currencies at once by passing a comma-separated list of
             * cryptocurrency or fiat currency symbols. Each additional convert option beyond the first requires an additional call credit.
             * A list of supported fiat options can be found [here](https://coinmarketcap.com/api/documentation/v1/#section/Standards-and-Conventions).
             * Each conversion is returned in its own "quote" object.
             */
            convert?: string;

            /**
             * Optionally calculate market quotes by CoinMarketCap ID instead of symbol.
             * This option is identical to `convert` outside of ID format.
             * Ex: convert_id=1,2781 would replace convert=BTC,USD in your query.
             * This parameter cannot be used when `convert` is used.
             */
            convert_id?: string;
        }): Promise<void>;
    }
}
