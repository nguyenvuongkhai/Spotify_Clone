import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Track } from '../types'
import { usePlayerContext } from '../providers/PlayerProvider';
type TrackListItemProps = {
    track: Track;
}
const TrackListItem = ({ track }: TrackListItemProps) => {
    const { playTrack } = usePlayerContext();
    const image = track?.album?.images?.[0];
    return (
        <Pressable onPress={() => playTrack(track)}>
            <View style={styles.container}>
                {image && <Image source={{ uri: image.url }} style={styles.image} />}
                <View>
                    <Text style={styles.title}>{track.name}</Text>
                    <Text style={styles.subtitle}>{track.artists[0]?.name}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default TrackListItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        width: 50,
        aspectRatio: 1,
        marginRight:10,
        borderRadius:5,
    },
    title: {
        fontWeight:'500',
        fontSize: 16,
        color:'white',

    },
    subtitle: {
        color:'gray',
    }
})