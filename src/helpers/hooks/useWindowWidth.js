import React, { useEffect, useState } from 'react'
import _debounce from 'lodash.debounce'


const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = _debounce(() => setWindowWidth(window.innerWidth), 100)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return windowWidth;
}

export default useWindowWidth