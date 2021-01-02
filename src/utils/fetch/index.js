/**
 * Recovery of basic data for the construction of an url with the base, the endpoint and the parameters if necessary,
 * it returns a usable url for API calls.
 * @param {URLConfig} urlConfig - The URL configuration object
 * @returns {string} - The URL built
 */
export const urlConstructor = ({ baseUrl, apiEndpoint, queryParams }: any) =>
    queryParams
        ? `${baseUrl}${apiEndpoint}?${new URLSearchParams(queryParams)}`
        : `${baseUrl}${apiEndpoint}`;

/**
 * It is used to handle JSON Response.
 * @param {object} response - The response
 * @returns {object} - The JSON content or throw an error if it's not OK.
 */
export const handleJSONResponse = (response: any) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Something went wrong.');
};
