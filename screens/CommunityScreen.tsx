import { View, Text, TouchableOpacity, FlatList, ScrollView, StyleSheet, Image } from "react-native"
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Avatar } from '@rneui/themed';

type AvatarData = {
    image_url: string;
};

const dataList: AvatarData[] = [
    {
        image_url:
          'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
    },
    {
      image_url: 'https://randomuser.me/api/portraits/men/36.jpg',
    },
    {
      image_url:
        'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
    },
    {
      image_url:
        'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
    },
    {
      image_url:
        'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
    },
    {
      image_url:
        'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
    },
    {
        image_url:
          'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
    },
    {
        image_url:
          'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
    },
];

const CommunityScreen: React.FC = () => {
    const [location, setLocation] = useState<any>(null);


    useEffect(() => {
        (async () => {
          try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
              console.error("Location permission not granted");
              return;
            }
    
            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);
          } catch (error) {
            console.error("Error getting location:", error);
          }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.mapBorder}>
                {location ? (
                    <MapView
                        style={styles.map}
                        initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        title="Plastic Bottle"
                        />
                    </MapView>
                ) : (
                    <View>
                        <Text>Loading...</Text>
                    </View>
                )}
            </View>
            <View style={styles.scrollView} >
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {dataList.map((l, i) => (
                        <Avatar
                            size={64}
                            containerStyle={
                                {
                                    marginRight: 5,
                                }
                            }
                            rounded
                            source={l.image_url ? { uri: l.image_url } : {}}
                            key={`${i}-${i}`}
                        />
                    ))}
                </ScrollView>
            </View>
            <ScrollView style={styles.topContriCardsView}>
                <View>
                    <Text>yolo</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    mapBorder: {
        width: '100%',
        height: '30%',
        alignSelf: 'center',
        borderRadius: 80,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    scrollView: {

        marginBottom: 10,
        marginTop: 10,

    },
    topContriCardsView: {

    }
})

export default CommunityScreen;