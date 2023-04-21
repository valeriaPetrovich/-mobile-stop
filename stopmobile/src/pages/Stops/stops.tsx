import React, {useEffect, useState} from 'react';
import styles from './Stops.style';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import { setSearchStopsSlise } from '../../store/redusers/searchStopsSlice';
import SvgBoldStar from '../../assets/boldStar';
import SvgLightStar from '../../assets/lightStar';
import { strets } from '../../constant/data';
import useStreets from '../../hooks/useStreets';


//style={styles.MenuScreenCopywriteText}

function Stops({navigation}) {
  const [stop, setStop] = useState('');
  const [click, setClick] = useState(false);
  const {fetchStreets,streets} = useStreets();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchStopsSlise (stop));
    fetchStreets();
  },[]);
  const search = useSelector(state => state.stop.stops);

  
  const filtStatus = streets.filter(e=> {
    return e.name.toLowerCase().includes(search);
  });
  const stretsItems = filtStatus.map(e => {
    //setClick(click ? false : true)
    return (
      <TouchableOpacity key={Math.random()} style={styles.button} onPress={() => navigation.navigate('Parking')}>
        <Text>{e.name}</Text>
        <TouchableOpacity onPress={() => setClick(click ? false : true)}>
          {click ?  <SvgLightStar /> : <SvgBoldStar />}
        </TouchableOpacity>
      </TouchableOpacity>
    );
    // return <Button key={Math.random()} style={styles.button} title={e}></Button>
  });

  return (
    <View>
      <View style={styles.inputBlock}>
        <Input placeholder="Choose an address" onChangeText={e => setStop(e)} />
        {/* <Button title='input' onPress={(()=>setSrops())} ></Button> */}
      </View>
      <ScrollView>{stretsItems}</ScrollView>
    </View>
  );
}

export default Stops;
