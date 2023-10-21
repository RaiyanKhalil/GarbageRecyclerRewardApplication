import { View, Text, TouchableOpacity, FlatList, ScrollView, StyleSheet, Image } from "react-native"
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import Card from "../components/Card";

const ElectricityScreen: React.FC = () => {
    const barData = [
        {value: 250, label: 'M'},
        {value: 500, label: 'T', frontColor: '#177AD5'},
        {value: 500, label: 'W', frontColor: '#177AD5'},
        {value: 320, label: 'T'},
        {value: 600, label: 'F', frontColor: '#177AD5'},
        {value: 256, label: 'S'},
        {value: 300, label: 'S'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.cardText}>Welcome to your electricity monitoring pane. 
                Here you can monitor your dailyelectricity usage and cost.</Text>
            <Card height={110} width={"38%"}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardText}>Electricity</Text>
                    <Text style={styles.cardVal}>500w</Text>
                </View>
            </Card>
            <Card height={110} width={"38%"} >
                <View style={styles.cardContent}>
                    <Text style={styles.cardText}>Cost</Text>
                    <Text style={styles.cardVal}>40$</Text>
                </View>
            </Card>
            <Card height={330} width={"85%"}>
                <View style={styles.cardContent}>
                    <Text style={styles.cardTextApp}>Fridge</Text>
                    <Text style={styles.cardTextApp}>Weekly Usage: 500w</Text>
                    {/* <Text style={styles.cardVal}>40w</Text> */}
                    <BarChart
                        barWidth={15}
                        noOfSections={5}
                        barBorderRadius={4}
                        frontColor="lightgray"
                        data={barData}
                        yAxisThickness={0}
                        xAxisThickness={0}
                    />
                </View>
     
            </Card>
            <TouchableOpacity
                style={styles.fab} onPress={() => {
                    // navigation.navigate('CameraScreen', {title});
                }}
                >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                    <Text>Add</Text>
                </View>
            </TouchableOpacity>
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
    cardContent: {
        alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
        height: "auto",
        paddingBottom: 15
    },
    cardText: {
        alignSelf: 'center',
        fontSize: 18,
        // padding: 15
    },
    cardTextApp: {
        alignSelf: 'flex-start',
        fontSize: 18,
        // padding: 15
    },
    cardVal: {
        fontSize: 40,
        alignSelf: 'center'
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
});
export default ElectricityScreen;