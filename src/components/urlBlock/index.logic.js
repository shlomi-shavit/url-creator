import { useState } from 'react';

const Logic = () => {


    const [dropDown, setDropDown] = useState(false);

    const dropDownHandler = () => {
        setDropDown(!dropDown)
    }


    return {
        dropDown,
        dropDownHandler,
    }
}

export default Logic;