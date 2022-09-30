import useWindowWidth from '../hooks/useWindowWidth';

export default function LayoutComponentTwo() {

    const onSmallScreen = useWindowWidth("ComponentTwo", 768);
    
    console.log("Rendered LayoutComponentTwo ==> " + onSmallScreen);

    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>This is another component & browsing {onSmallScreen ? 'small' : 'large'}</h1>
        </div>
    );
}