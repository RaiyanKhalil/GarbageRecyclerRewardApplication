import { View, Text, TouchableOpacity, StyleSheet, ScrollView} from "react-native"
import { useNavigation  } from '@react-navigation/native';
import Card from "../components/Card";

const WasteScreen = ({route}) => {

    const { title } = route.params;
    const navigation = useNavigation();

    return (

        <View style={styles.containerView}>
          <ScrollView contentContainerStyle={styles.container}>
            {/* <Text style={styles.cardText}>Welcome to your garbage recycler. Here you can take 
            pictures of your waste and we will do some machine learning mgic and 
            give you an estimate to how much money you can get back based on your wastes.</Text> */}
            <Card height={"auto"} width={"38%"} active={true}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardText}>Plastic</Text>
                    <Text style={styles.cardVal}>40</Text>
                </View>
            </Card>
            <Card height={"auto"} width={"38%"} active={true}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardText}>Glass</Text>
                    <Text style={styles.cardVal}>30</Text>
                </View>
            </Card>
            <Card height={"auto"} width={"38%"} active={true}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardText}>Metal</Text>
                    <Text style={styles.cardVal}>20</Text>
                </View>
            </Card>
            <Card height={"auto"} width={"38%"} active={true}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardText}>Organic</Text>
                    <Text style={styles.cardVal}>5lb</Text>
                </View>
            </Card>
            <Card height={"auto"}  width={"85%"} active={true}>
                <View style={styles.cardContent}>
                  <Text>Latest Reutrn</Text>
                  <Text>Plastic: 3</Text>
                  <Text>Glass: 3</Text>
                  <Text>Metal: 3</Text>
                  <Text>organinc: 1kg</Text>
                  <Text>Total Recieved: $5</Text>
                </View>
            </Card>
            <Card height={"auto"}  width={"85%"} active={true}>
                <View style={styles.cardContent}>
                  <Text>Latest Reutrn</Text>
                  <Text>Plastic: 3</Text>
                  <Text>Glass: 3</Text>
                  <Text>Metal: 3</Text>
                  <Text>organinc: 1kg</Text>
                  <Text>Total Recieved: $5</Text>
                </View>
            </Card>
            <Card height={"auto"}  width={"85%"} active={true}>
                <View style={styles.cardContent}>
                  <Text>Latest Reutrn</Text>
                  <Text>Plastic: 3</Text>
                  <Text>Glass: 3</Text>
                  <Text>Metal: 3</Text>
                  <Text>organinc: 1kg</Text>
                  <Text>Total Recieved: $5</Text>
                </View>
            </Card>
            

          </ScrollView>
          <TouchableOpacity
              style={styles.fab} onPress={() => {
                navigation.navigate('CameraScreen', {title});
              }}
            >
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text>Camera</Text>
              </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        height: '100%'
    },
    container: {
        display: 'flex', 
        flexDirection: "row", 
        flexWrap: "wrap", 
        height: "auto", 
        width: "100%",
        // backgroundColor: "red",
        justifyContent: "center", 
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
