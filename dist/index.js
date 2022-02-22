import { SalesforceJwt } from './SalesforceJwt';
export async function getToken(options) {
    return await SalesforceJwt.getToken(options);
}
export { Base64Url } from 'base64url-xplatform';
export { SalesforceJwt } from './SalesforceJwt';
