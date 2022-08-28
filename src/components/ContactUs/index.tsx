import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import AddressMap from './AddressMap';
import {} from '../../api/home';
import { RootState } from '../../store/type';
import './index.scss';

interface ContactUsState {
	address: string;
	email: string;
	phone: string;
}
interface ContactUsProps {}

const ContactUs: React.FunctionComponent = function (props: ContactUsProps, state: ContactUsState) {
	let [links, setLinks] = useState([]);

	// const mapContainer = useRef<HTMLInputElement>(null);

	let sysConfig = useSelector((state: RootState) => state.sysConfig.sysConfig);
	let {
		contactInfo: { address, email, phone },
	} = sysConfig;
	useEffect(() => {}, []);

	return (
		<div className='ContactUs'>
			<div className='container'>
				<div className='row'>
					<div className='col-6'>
						<div className='info'>
							<p>
								<span className='iconfont icon-email'></span>{' '}
								<a href={'mailto:' + email} target='_blank' rel='noopener noreferrer'>
									<span className='email'>{email}</span>
								</a>
							</p>
							<p>
								<span className='iconfont icon-lbs'></span> <span className='address'>{address}</span>
							</p>
							<p>
								<span className='iconfont icon-dianhuatianchong'></span> <span className='phone'>{phone}</span>
							</p>
						</div>
					</div>
					<div className='col-6'>
						<div className='mapContainer'>
							<AddressMap />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
