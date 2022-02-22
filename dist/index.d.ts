import { TokenOptions, TokenOutput } from './Interfaces';
export declare function getToken(options: TokenOptions): Promise<TokenOutput>;
export { Base64Url } from 'base64url-xplatform';
export { SalesforceJwt } from './SalesforceJwt';
