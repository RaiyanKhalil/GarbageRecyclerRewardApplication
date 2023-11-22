import { View, Text, TouchableOpacity, FlatList, ScrollView, StyleSheet, Image } from "react-native"
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from "expo-location";


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

    const topContributors = Array.from({ length: 10 })

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
            <View style={styles.topContributerCircleHolder}>
                <FlatList
                    horizontal
                    data={topContributors}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                    <View style={styles.topContributerBubbles} key={index} />
                    )}
                />
            </View>
            <ScrollView style={styles.topContriCardsView}>
                <View>
                    
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
    topContributerCircleHolder : {
        width: '100%',
        height: 80,
        // backgroundColor: 'black',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'visible',
        
    },
    topContributerBubbles: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: "red",
        margin: 5
    },
    topContriCardsView: {

    }
})

export default CommunityScreen;