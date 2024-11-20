export function setDataLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}