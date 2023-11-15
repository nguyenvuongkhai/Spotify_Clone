import { FlatList, StyleSheet, TextInput } from 'react-native';
import {useState} from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';

export default function SearchScreen() {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name='search' size={16} color={'gray'}/>
        <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="What do you want to listen to?"
        style={styles.input}
        />
        <Text>Cancel</Text>
      </View>
        <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem track={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flexDirection:'row',  
    alignItems: 'center',
  
  },
  input:{
    color:'white',
    backgroundColor:'#121314',
    flex:1,
    padding:8,
    marginHorizontal:10,
    borderRadius:5,


  }
 
});
