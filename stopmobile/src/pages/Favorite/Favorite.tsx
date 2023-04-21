import React, {useEffect, useState} from 'react';
import styles from './Favorite.style';
import {
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native';
import {Input,Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import { setSearchFavoriteSlise } from '../../store/redusers/searchFavoriteSlice';
import useFavorite from '../../hooks/useFavorite';

function Favorite() {
  const [stop, setStop] = useState('');
  const dispatch = useDispatch();
  const {fetchFavorite,favorites} = useFavorite()
 useEffect(()=>{
    dispatch(setSearchFavoriteSlise(stop))
    fetchFavorite();
 },[])
  const search = useSelector((state) => state.favorite.favorite);
  const filtStatus = favorites.filter((e) => {
      return e.name.toLowerCase().includes(search); 
  })
  const stretsItems = filtStatus.map((e)=>{
    return(
      <TouchableOpacity key={Math.random()} style={styles.button}>
        <Text>{e.name}</Text>
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
