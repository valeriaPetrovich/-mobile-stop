import React, {useEffect, useState} from 'react';
import styles from './Favorite.style';
import {
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native';
import {Input,Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import { setFavoriteSlise } from '../../store/redusers/favoriteSlice';

//style={styles.MenuScreenCopywriteText}

function Favorite() {
  const [stop, setStop] = useState('');
  const dispatch = useDispatch();
 useEffect(()=>{
    dispatch(setFavoriteSlise(stop))
 })
  const search = useSelector((state) => state.favorite.favorite);
  const strets = ['пр. Независимости, 4','ул. Бобруйская, 5','ул. Ленинградская, 8','ул. Ленинградская, 16','ул. К.Маркса, 31','ул. Ленинградская, 14','Курчатоваб 8','Курчатоваб 6','ул. Ленинградская, 14','ул. Ленинградская, 6', 'str','ул. Бобруйская, 5','ул. Ленинградская, 8','ул. Ленинградская, 16','ул. К.Маркса, 31','ул. Ленинградская, 14','Курчатоваб 8','Курчатоваб 6','ул. Ленинградская, 14','ул. Ленинградская, 6', 'str','ул. Бобруйская, 5','ул. Ленинградская, 8','ул. Ленинградская, 16','ул. К.Маркса, 31','ул. Ленинградская, 14','Курчатоваб 8','Курчатоваб 6','ул. Ленинградская, 14','ул. Ленинградская, 6', 'str'];
  const filtStatus = strets.filter((e) => {
      return e.toLowerCase().includes(search); 
  })
  const stretsItems = filtStatus.map((e)=>{
    return(
      <TouchableOpacity key={Math.random()} style={styles.button}>
        <Text>{e}</Text>
        </TouchableOpacity>
    )
      // return <Button key={Math.random()} style={styles.button} title={e}></Button>
  })

  return (
    <View>
        <View style={styles.inputBlock}>
        <Input placeholder="Choose an address" onChangeText={e => setStop(e)} />
        {/* <Button title='input' onPress={(()=>setSrops())} ></Button> */}
        </View>
      <ScrollView>
        {stretsItems}
      </ScrollView>
    </View>
  );
}

export default Favorite;
