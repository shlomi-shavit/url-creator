import { useState } from 'react';

const Logic = () => {

    const dropDownList = [
        { value: 'EQUALS', label: 'URL is' },
        { value: 'NOT_EQUALS', label: 'URL is not' },
        { value: 'CONTAINS', label: 'URL contains' },
        { value: 'NOT_CONTAINS', label: 'URL not contains' },
        { value: 'PREFIX', label: 'URL starts with' },
        { value: 'SUFFIX', label: 'URL ends with' },
    ]

    const [dropDown, setDropDown] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState({});
    const [urlInput, setUrlInput] = useState("");
    const [urlsBlocks, setUrlsBlocks] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);

    const test = () => {
        console.log('test');
        return 'asd'
    }

    const dropDownHandler = () => {
        setDropDown(!dropDown)
    }

    const selectedUrlHandler = (urlObj) => {
        setSelectedUrl(urlObj)
    }

    const findIndex = (urlArg) => {
        return urlsBlocks.findIndex(urlObj => urlObj.value === urlArg.value)
    }

    const addUrlHandler = () => {
        const urlExist = urlsBlocks.some(url => url.value === selectedUrl.value);
        const urlVlidation = urlInput.substring(0, 1) === '/';

        if ((urlInput.length && Object.keys(selectedUrl).length) > 0 && urlVlidation) {

            if (urlExist) {
                urlsBlocks[findIndex(selectedUrl)].urlInput = urlInput;
                const newUrlsBlocks = [...urlsBlocks];
                setUrlsBlocks(newUrlsBlocks);
            }
            else {
                setUrlsBlocks(oldArray => [...oldArray, {
                    selectedUrl: selectedUrl.label,
                    urlInput: urlInput,
                    value: selectedUrl.value
                }]);
            }

            setErrorMessage(false)
        }
        else {
            setErrorMessage(true)
        }
    }

    const removeUrlHandler = (url) => {
        if (selectedUrl.value === url.value) {
            urlsBlocks[findIndex(url)].urlInput = '';
            const newUrlsBlocks = [...urlsBlocks];
            setUrlsBlocks(newUrlsBlocks);
        } else {
            urlsBlocks.splice(findIndex(url), 1);
            const newUrlsBlocks = [...urlsBlocks];
            setUrlsBlocks(newUrlsBlocks);
        }
    }

    const urlInputHandler = (value) => {
        setUrlInput(value.target.value)
    }

    // add dispatch handler
    // add url block array

    return {
        dropDownList,
        dropDown,
        selectedUrl,
        urlInput,
        urlsBlocks,
        errorMessage,
        dropDownHandler,
        selectedUrlHandler,
        urlInputHandler,
        addUrlHandler,
        removeUrlHandler,
        test
    }
}

export default Logic;