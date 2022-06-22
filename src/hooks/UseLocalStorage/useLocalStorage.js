import {useEffect, useState} from "react";

const getStateFromLocalStorage = (defaultValue, key) => {
    const storage = localStorage.getItem(key)
    if (storage) return JSON.parse(storage);
    return defaultValue
}

const setStateToLocalStorage = () => {

}

const useLocalStorage = (defaultValue, key) => {
    const initialValue = getStateFromLocalStorage(defaultValue, key)
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
    }, [value])


    return [value, setValue];

}

export default useLocalStorage;