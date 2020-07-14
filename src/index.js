import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

class RootComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
        this.state = {
            height: 0,
            className: "close",
        };
    }

    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        children: PropTypes.any,
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const { isOpen: wasOpen } = prevProps;
        const { isOpen } = this.props;
        let className;
        if (isOpen !== wasOpen) {
            if (isOpen) {
                className = "opening";
            } else {
                className = "closing";
            }
            return {
                className,
            };
        }
        return null;
    }

    setHeight = () => {
        const { isOpen } = this.props;
        const ele = this.itemRef.current;
        const height = ele.scrollHeight;
        this.setState({ height: isOpen ? height : 0 });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            this.setState(
                {
                    ...snapshot,
                },
                this.setHeight,
            );
        }
    }

    finishTransition = () => {
        const { isOpen } = this.props;
        this.setState({ className: isOpen ? "open" : "close" });
    };

    render() {
        const { children, isOpen } = this.props;
        const { height, className } = this.state;

        return (
            <div
                className={`react-accordion-comp ${className}`}
                onTransitionEnd={this.finishTransition}
                ref={this.itemRef}
                style={{
                    height,
                }}
            >
                {children}
            </div>
        );
    }
}

export default RootComponent;
