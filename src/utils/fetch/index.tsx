export const handleJSONResponse = (response: any) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Something went wrong.');
};
