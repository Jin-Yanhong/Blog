// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {} from '../../api/home';
import { RootState } from '../../store/type';
import AddressMap from './AddressMap';
import './index.scss';

interface ContactUsState {
	address: string;
	email: string;
	phone: string;
}
interface ContactUsProps {}

const ContactUs: React.FunctionComponent = function (props: ContactUsProps, state: ContactUsState) {
	// let [links, setLinks] = useState([]);
	// const mapContainer = useRef<HTMLInputElement>(null);
	let sysConfig = useSelector((state: RootState) => state.sysConfig.sysConfig);
	let { address = '', email = '', phone = '' } = sysConfig.contactInfo ?? {};
	let { lanLong = [] } = sysConfig;
	// useEffect(() => {}, []);

	return (
		<div className="ContactUs">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
						<div className="mapContainer">{lanLong?.length > 0 ? <AddressMap center={lanLong} /> : ''}</div>
					</div>
					<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
						<div className="info">
							<p>
								<span className="iconfont icon-email"></span>
								<a href={'mailto:' + email} target="_blank" rel="noopener noreferrer">
									<span className="email">{email}</span>
								</a>
							</p>
							<p>
								<span className="iconfont icon-lbs"></span> <span className="address">{address}</span>
							</p>
							<p>
								<span className="iconfont icon-dianhuatianchong"></span>
								<span className="phone">{phone}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
