import { StyleSheet, View, FlatList } from 'react-native';
import {tracks} from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';
import Player from '../../components/Player';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     <FlatList
     data={tracks}
     renderItem={({item})=><TrackListItem track={item}/>}
     ListHeaderComponent={()=> <Player/>}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
