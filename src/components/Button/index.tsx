import React from 'react';
import { ButtonSize, ButtonType, ButtonDisabled } from '../../enums';
import './index.scss';

interface ButtonProps {
	children?: any;
	size?: ButtonSize;
	type?: ButtonType;
	disabled?: ButtonDisabled;
	icon?: any;
}

interface ButtonState {
	children?: any;
}
export default class Button extends React.Component<ButtonProps, ButtonState> {
	constructor(props: any) {
		super(props);
	}
	render() {
		let { children } = this.props;
		return <div>{children}</div>;
	}
}
