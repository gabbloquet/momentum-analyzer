export const clearForm = () => {
    document.getElementsByTagName("form")[0].reset();
}

export const isAnEmptyObject = (obj: Object) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
