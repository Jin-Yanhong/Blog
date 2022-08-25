import React from 'react';
import './index.scss';

interface menuStatus {}

interface menuProps {}

export default class Button extends React.Component<menuProps, menuStatus> {
	render() {
		return <div className='Menu  pageContent'>菜单</div>;
	}
}
