import { navList } from './router';

enum fontWeight {
	Bold = 'Oswald-Bold',
	Light = 'Oswald-Light',
	Regular = 'Oswald-Regular',
	ExtraLight = 'Oswald-ExtraLight',
	Medium = 'Oswald-Medium',
	SemiBold = 'Oswald-SemiBold',
}

const setting = {
	navList,
	defaultActiveClass: 'activeNavItem',
	defaultNavClass: `navItem enFont-${fontWeight.ExtraLight}`,
};

export default setting;
