import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Tile, Vector as VectorLayer } from 'ol/layer';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { Fill, Icon, Style, Text } from 'ol/style';
import View from 'ol/View';
import { Component, createRef } from 'react';
import './index.scss';

let location = require('../../../static/icon/location.png');

export default class AddressMap extends Component {
	mapContainer = createRef();
	constructor(props) {
		super(props);
		this.mapContainer = null;
		this.state = {
			center: [],
		};
		this.setMapContainer = (el) => {
			this.mapContainer = el;
		};
	}

	componentDidMount() {
		let center = this.props.center;

		const iconFeature = new Feature({
			geometry: new Point(center),
			name: 'Null Island',
			population: 4000,
			rainfall: 500,
		});

		const iconStyle = new Style({
			image: new Icon({
				anchor: [0.5, 48],
				anchorXUnits: 'fraction',
				anchorYUnits: 'pixels',
				src: location,
			}),
			text: new Text({
				font: '14px Microsoft YaHei',
				text: '3310室',
				offsetY: -64,
				backgroundFill: new Fill({ color: '#3968CF' }),
				fill: new Fill({ color: '#ffffff' }),
				padding: [2, 4, 0, 4],
			}),
		});

		iconFeature.setStyle(iconStyle);

		const vectorSource = new VectorSource({
			features: [iconFeature],
		});

		const vectorLayer = new VectorLayer({
			source: vectorSource,
		});

		const tileLayer = new Tile({
			source: new XYZ({
				url: 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}',
			}),
		});

		new Map({
			target: this.mapContainer,
			layers: [tileLayer, vectorLayer],
			view: new View({
				projection: 'EPSG:4326', // 墨卡托投影
				center: center,
				zoom: 15,
				minZoom: 4,
				maxZoom: 20,
			}),
			controls: [],
			interactions: [],
		});

		// map.on('click', function (e) {
		// 	console.log(e.coordinate);
		// });
	}

	render() {
		return (
			<div className="AddressMap">
				<div className="AddressMap" ref={this.setMapContainer}></div>
			</div>
		);
	}
}
