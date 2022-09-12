import React from 'react';

class Button extends React.Component {
    
    shouldComponentUpdate(nextProps) {
        ///console.log(this.props, nextProps, this.state, typeof this.props.change);
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale } = this.props;
        console.log("Button component Rendered", change, locale);
        return (
            <button type="button" onClick={() => {
                console.log("From Button",this.state, locale);
                change(locale);
            }}>
                Click here
            </button>
        );
    }
}

export default Button;