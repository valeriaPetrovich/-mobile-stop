import React, {useEffect, useState} from 'react';
import styles from './Favorite.style';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchFavoriteSlise} from '../../store/redusers/searchFavoriteSlice';
import useFavorite from '../../hooks/useFavorite';
import Header from '../../components/Header/Header';
import TextInput from '../../components/TextInput/TextInput';

function Favorite({navigation}) {
  const [stop, setStop] = useState('');
  const dispatch = useDispatch();
  const {fetchFavorite, favorites} = useFavorite();
  const handlePress = item => {
    navigation.navigate('Parking', {item});
  };
  useEffect(() => {
    dispatch(setSearchFavoriteSlise(stop));
    fetchFavorite();
  }, [stop]);
  const search = useSelector(state => state.favorite.favorite);
  const filtStatus = favorites.filter(e => {
    return e.name.toLowerCase().includes(search);
  });
  const stretsItems = filtStatus.map(e => {
    return (
      <TouchableOpacity
        key={Math.random()}
        style={styles.button}
        onPress={() => handlePress(e.id)}>
        <Text>{e.name}</Text>
      </TouchableOpacity>
    );
    // return <Button key={Math.random()} style={styles.button} title={e}></Button>
  });

  return (
    <View style={styles.FavoritesPage} >
      <View style={styles.inputBlock}>
        <Header children={'Favorite'} back={<></>} />
        <TextInput children="Введите адресс" onChangeText={e => setStop(e)} errorMessage={''} />
      </View>
      <ScrollView>{stretsItems}</ScrollView>
    </View>
  );
}

export default Favorite;
