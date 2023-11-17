import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';

const osmLayer = new TileLayer({
    source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

const satelliteLayer = new TileLayer({
    source: new XYZ({
        url: 'https://worldview.earthdata.nasa.gov/?v=-25.196042743789125,-0.7967792391702702,56.51503745789475,82.64059138930975&l=Reference_Labels_15m,Reference_Features_15m,Coastlines_15m,BlueMarble_NextGeneration,VIIRS_NOAA20_CorrectedReflectance_TrueColor,VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor&lg=true&s=6.9551,50.9417&t=2023-11-16-T11%3A14%3A36Z', // Replace with actual NASA Worldview URL
        crossOrigin: 'Anonymous',
        visible: true
    })
});

const map = new Map({
    target: 'map',
    layers: [satelliteLayer, osmLayer],
    view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2
    })
});

document.getElementById('satelliteMapButton').addEventListener('click', () => {
    const isVisible = satelliteLayer.getVisible();
    satelliteLayer.setVisible(isVisible);
});

