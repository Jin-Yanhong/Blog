import React, { Component, createRef } from 'react';
import './index.scss';
import { XYZ } from 'ol/source';

//
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import Point from 'ol/geom/Point';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import { Icon, Style, Text, Fill } from 'ol/style';
import { Tile, Vector as VectorLayer } from 'ol/layer';

let location = require('../../../static/icon/location.png');
let center = [103.825764, 36.054192];
const iconFeature = new Feature({
	geometry: new Point(center),
	name: 'Null Island',
	population: 4000,
	rainfall: 500,
});

const iconStyle = new Style({
	image: new Icon({
		anchor: [0.5, 60],
		anchorXUnits: 'fraction',
		anchorYUnits: 'pixels',
		src: location,
	}),

	text: new Text({
		font: '14px Microsoft YaHei',
		text: 'We are here',
		offsetY: 0,
		backgroundFill: new Fill({ color: '#3968CF' }),
		fill: new Fill({ color: '#ffffff' }),
		padding: [1, 4, 1, 4],
	}),
});

iconFeature.setStyle(iconStyle);

const vectorSource = new VectorSource({
	features: [iconFeature],
});

const vectorLayer = new VectorLayer({
	source: vectorSource,
});

let tileLayer = new Tile({
	source: new XYZ({
		url: 'http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
	}),
});

export default class AddressMap extends Component {
	mapContainer = createRef();
	constructor(props) {
		super(props);
		this.mapContainer = null;
		this.setMapContainer = el => {
			this.mapContainer = el;
		};
	}

	componentDidMount() {
		const map = new Map({
			target: this.mapContainer,
			layers: [tileLayer, vectorLayer],
			view: new View({
				projection: 'EPSG:4326', // 墨卡托投影
				// projection: 'EPSG:3857', //
				center: center,
				zoom: 15,
				minZoom: 4,
				maxZoom: 20,
			}),
			controls: [],
			interactions: [],
		});
	}

	render() {
		return (
			<div className='AddressMap'>
				<div className='AddressMap' ref={this.setMapContainer}></div>
			</div>
		);
	}
}
