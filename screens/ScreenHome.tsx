import { View, Text, ScrollView, StyleSheet, Image } from "react-native"
import { useNavigation  } from '@react-navigation/native';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import Card from "../components/Card";


const ScreenHome: React.FC = () => {

    const navigation = useNavigation();

    const handleWastePress = (title: string) => {
        // console.log(`Card pressed: ${title}`);
        navigation.navigate('Waste', {title});
    };

    const handleElectricityPress = (tittle: string) => {
        // console.log(`Card pressed: ${tittle}`);
        navigation.navigate('Electricity', {tittle});
    }

    const handleGasPress = (tittle: string) => {
        // console.log(`Card pressed: ${tittle}`);
        navigation.navigate('Gas', {tittle});
    }

    const handleWaterPress = (tittle: string) => {
        // console.log(`Card pressed: ${tittle}`);
        navigation.navigate('Water', {tittle});
    }


    const wasteData = [
        {value: 15, text:'Plastic Botlle'},
        {value: 30, text:'Metal Can'},
        {value: 26, text:'Glass Bottle'},
        {value: 40, text:'Soy Box'}];

    const barData = [
        {value: 250, label: 'M'},
        {value: 500, label: 'T', frontColor: '#177AD5'},
        {value: 745, label: 'W', frontColor: '#177AD5'},
        {value: 320, label: 'T'},
        {value: 600, label: 'F', frontColor: '#177AD5'},
        {value: 256, label: 'S'},
        {value: 300, label: 'S'},
    ];

    const waterData = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>

                <Card height={110} width={"38%"} onPress={() => handleElectricityPress('Electricity')} >
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>Electricity</Text>
                        <Text style={styles.cardVal}>40w</Text>
                    </View>
                </Card>

                <Card height={110} width={"38%"} onPress={() => handleGasPress('gas')} active={true}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>Gas</Text>
                        <Text style={styles.cardVal}>20ft³</Text>                
                    </View>
                </Card>
                
                <Card height={110} width={"38%"} onPress={() => handleWastePress("Waste")} >
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>Waste</Text>
                        <Text style={styles.cardVal}>95%</Text>
                    </View>
                </Card>
                
                <Card height={110} width={"38%"} onPress={() => handleWaterPress('Water')} active={true}>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>Water</Text>
                        <Text style={styles.cardVal}>95L</Text>
                    </View>                
                </Card>
                
                <Card height={"auto"} width={"85%"} onPress={() => handleWastePress("Waste")} active={true}>
                    <Text>Type of Waste</Text>
                    <View style={styles.cardContent}>
                        <PieChart data={wasteData} radius={80} donut showText />
                    </View>     
                </Card>
                
                <Card height={"auto"} width={"85%"} onPress={() => handleElectricityPress('Electricity')} active={true}>
                    <Text>Monthly Electricity Consumption</Text>
                    <View style={styles.cardContent}>
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

                <Card height={"auto"} width={"85%"} onPress={() => handleGasPress('gas')} active={true}>
                    <Text>Monthly Gas Consumption</Text>
                    <View style={styles.cardContent}>
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

                <Card height={"auto"} width={"85%"} onPress={() => handleWaterPress('Water')} active={true}>
                    <Text>Monthly Water Consumption</Text>
                    <View style={styles.cardContent}>
                        <LineChart areaChart data={wasteData} curved/>
                    </View>   
                </Card>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex', 
        flexDirection: "row", 
        flexWrap: "wrap", 
        height: "auto", 
        width: "100%",
        // backgroundColor: "red",
        justifyContent: "center", 
        // padding: 15
    },
    cardContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: "auto",
        paddingBottom: 15
    },
    cardText: {
        alignSelf: 'center',
    },
    cardVal: {
        fontSize: 40,
        alignSelf: 'center'
    }
});

export default ScreenHome;