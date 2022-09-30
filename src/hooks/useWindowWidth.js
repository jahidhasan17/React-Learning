import { useEffect, useState } from 'react';

const useWindowWidth = (componentName, screenSize) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

	console.log("Called From ==> " + componentName);

    useEffect(() => {
		console.log("Called UseEffect from ==> " + componentName);
        const checkScreenSize = () => {
            setOnSmallScreen(window.innerWidth < screenSize);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [screenSize]);

    return onSmallScreen;
};

export default useWindowWidth;