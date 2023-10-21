import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from "react-native"
import { useNavigation  } from '@react-navigation/native';
import Card from "../components/Card";

const WasteScreen = ({route}) => {

    const { title } = route.params;
    const navigation = useNavigation();

    return (

        <View >
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.cardText}>Welcome to your garbage recycler. Here you can take 
            pictures of your waste and we will do some machine learning mgic and 
            give you an estimate to how much money you can get back based on your wastes.</Text>
            <Card height={110} width={"38%"}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardText}>Plastic</Text>
                    <Text style={styles.cardVal}>40</Text>
                </View>
            </Card>
            <Card height={110} width={"38%"} >
                <View style={styles.cardContent}>
                    <Text style={styles.cardText}>Glass</Text>
                    <Text style={styles.cardVal}>30</Text>
                </View>
            </Card>
            <Card height={110} width={"38%"}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardText}>Metal</Text>
                    <Text style={styles.cardVal}>20</Text>
                </View>
            </Card>
            <Card height={110} width={"38%"} >
                <View style={styles.cardContent}>
                    <Text style={styles.cardText}>Organic</Text>
                    <Text style={styles.cardVal}>5kg</Text>
                </View>
            </Card>
            <Card height={130} width={"85%"}>
                <View style={styles.cardContent}>
                  <Text>Latest Reutrn</Text>
                  <Text>Plastic: 3</Text>
                  <Text>Glass: 3</Text>
                  <Text>Metal: 3</Text>
                  <Text>organinc: 1kg</Text>
                  <Text>Total Recieved: $5</Text>

                </View>
            </Card>
            
            <TouchableOpacity
              style={styles.fab} onPress={() => {
                navigation.navigate('CameraScreen', {title});
              }}
            >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text>Camera</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: "row", 
        flexWrap: "wrap", 
        height: "100%", 
        width: "100%", 
        padding: 15
    },
    fab: {
        position: "absolute",
        bottom: 16,
        right: 16,
        height: 80,
        width: 80,
        borderRadius: 50,
        backgroundColor: "gray",
        margin: 5,
    },
    cardContent: {
        // alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        height: "auto",
        paddingBottom: 15
    },
    cardText: {
        alignSelf: 'center',
        fontSize: 18,
        textAlign: 'justify',
        // padding: 15
    },
    cardVal: {
        fontSize: 40,
        alignSelf: 'center'
    },
})
export default WasteScreen;
