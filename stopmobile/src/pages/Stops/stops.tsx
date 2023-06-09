import React, {useEffect, useState} from 'react';
import styles from './Stops.style';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchStopsSlise} from '../../store/redusers/searchStopsSlice';
import SvgBoldStar from '../../assets/boldStar';
import SvgLightStar from '../../assets/lightStar';
import useStreets from '../../hooks/useStreets';
import Header from '../../components/Header/Header';
import TextInput from '../../components/TextInput/TextInput';

//style={styles.MenuScreenCopywriteText}

function Stops({navigation}) {
  const [stop, setStop] = useState('');
  const [click, setClick] = useState(false);
  const {fetchStreets, streets} = useStreets();
  const handlePress = item => {
    navigation.navigate('Parking', {item});
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchStopsSlise(stop));
    fetchStreets();
  }, [stop]);
  const search = useSelector(state => state.stop.stops);

  const filtStatus = streets.filter(e => {
    return e.name.toLowerCase().includes(search);
  });
  const stretsItems = filtStatus.map(e => {
    return (
      <TouchableOpacity
        key={Math.random()}
        style={styles.button}
        onPress={() => handlePress(e.id)}>
        <Text>{e.name}</Text>
        <TouchableOpacity onPress={() => setClick(click ? false : true)}>
          {click ? <SvgLightStar /> : <SvgBoldStar />}
        </TouchableOpacity>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.StopsPage} >
      <View style={styles.inputBlock}>
        <Header children={'Stops'} back={<></>} />
        <TextInput children={'Введите адресс'} onChangeText={e => setStop(e)} errorMessage={''} secureTextEntry={false}/>
      </View>
      <ScrollView>{stretsItems}</ScrollView>
    </View>
  );
}

export default Stops;
