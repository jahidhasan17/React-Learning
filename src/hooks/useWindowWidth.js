import { useEffect, useState } from 'react';

const useWindowWidth = (screenSize) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    console.log("Called Hook");
    const x = setInterval(() => {
        setOnSmallScreen(!onSmallScreen);
    }, 5000);

    const checkScreenSize = () => {
        if(onSmallScreen !== (window.innerWidth < screenSize)){
            setOnSmallScreen(!onSmallScreen);
        }
    };

    useEffect(() => {
        console.log("Called Hook UseEffect ===> " + screenSize);

        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
            clearInterval(x);
            console.log("Custom Hook Off");
            return;
        }
    }, [screenSize]);

    return onSmallScreen;
};

export default useWindowWidth;