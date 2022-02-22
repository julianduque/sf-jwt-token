import { TokenOptions, TokenOutput } from './Interfaces';
export declare class SalesforceJwt {
    constructor(options: TokenOptions);
    private iss;
    private sub;
    private aud;
    private privateKey;
    get token(): string;
    get postUrl(): string;
    private generatePayload;
    private validateOptions;
    getToken(): Promise<TokenOutput>;
    static getToken(options: TokenOptions): Promise<TokenOutput>;
}
