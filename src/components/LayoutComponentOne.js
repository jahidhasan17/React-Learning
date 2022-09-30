import useWindowWidth from '../hooks/useWindowWidth';

export default function LayoutComponentOne() {

    const onSmallScreen = useWindowWidth("ComponentOne", 600);

    console.log("Rendered LayoutComponentOne ==> " + onSmallScreen);

    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
            
        </div>
    );
}