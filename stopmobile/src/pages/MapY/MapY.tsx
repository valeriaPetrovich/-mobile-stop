import React, {useState} from 'react';
import {YaMap} from 'react-native-yamap';
import styles from './MapY.style';

//YaMap.init('e143801e-6824-4b30-bbcf-de724b2d9080');

YaMap.setLocale('ru_RU'); 
const MapY = () => {
 const [marker, setMarker] = useState([])

  return (
    <YaMap
    showUserPosition={false}
    rotateGesturesEnabled={false}
    nightMode={false}
    mapType={'vector'}
    initialRegion={{
        lat: 30,
        lon: 30,
        zoom: 7,
        azimuth: 0,
        }}
        onMapPress={(e)=>console.log(e)}
    style={styles.MapStyles}
        >           

        </YaMap>
  );
};
export default MapY;
