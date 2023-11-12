import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import Card from "../components/Card";

interface DailyUsage {
  _id: string;
  date: string;
  usageKWh: number;
}

interface ApplianceData {
  _id: string;
  applianceName: string;
  powerRatingWatt: number;
  dailyUsage: DailyUsage[];
}

const ElectricityScreen: React.FC = () => {
  
  //Backend Server URL
  const url = "http://192.168.1.80:3000/appliances";
  const [data, setData] = useState<ApplianceData[]>([]);

  //Will only run once after the module is loaded
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();

        setData(jsonData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    if(data != null){

    }
  }, []);

  // Use a default chart data if the fetch fails or takes time
  const defaultBarData = [
    { value: 250, label: 'M' },
    { value: 500, label: 'T', frontColor: '#177AD5' },
    { value: 500, label: 'W', frontColor: '#177AD5' },
    { value: 320, label: 'T' },
    { value: 600, label: 'F', frontColor: '#177AD5' },
    { value: 256, label: 'S' },
    { value: 300, label: 'S' },
  ];



  //Sort and Store data in an an array to create cards and display
  const formatDateWithDay = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDay();
    const dayNames = ["S", "M", "T", "W", "TH", "F", "SA"];

    console.log(date, dayNames[day])
    return dayNames[day];
  };
  
  
  const generateBarData = (bar_Data) => {

    const sortedData = bar_Data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // console.log(sortedData)
    return sortedData.map(item => ({
      value: item.usageKWh,
      label: formatDateWithDay(item.date),
    }));
  };


  return (
    <View >
      <ScrollView contentContainerStyle={styles.container}>

        {/* <Text style={styles.cardText}>Welcome to your electricity monitoring pane. 
            Here you can monitor your daily electricity usage and cost.</Text> */}
        <Card height={110} width={"38%"}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Electricity</Text>
            <Text style={styles.cardVal}>500w</Text>
          </View>
        </Card>
        <Card height={110} width={"38%"}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Cost</Text>
            <Text style={styles.cardVal}>40$</Text>
          </View>
        </Card>

        {data ? 

          data.map( (data) => {
            
            return(
              <Card height={330} width={"85%"} key={data._id}>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTextApp}>{data.applianceName}</Text>
                  <Text style={styles.cardTextApp}>Weekly Usage: 500w</Text>
                  <BarChart
                    barWidth={15}
                    noOfSections={5}
                    barBorderRadius={4}
                    frontColor="lightgray"
                    data={data ? generateBarData(data.dailyUsage) : defaultBarData}
                    yAxisThickness={0}
                    xAxisThickness={0}
                  />
                </View>
              </Card>           
            )
          })
        
        : 
          <></>
        }
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          // navigation.navigate('CameraScreen', {title});
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Text>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    height: "auto",
    width: "100%",
    justifyContent: 'center'
  },
  cardContent: {
    alignItems: 'center',
    flex: 1,
    height: "auto",
    paddingBottom: 15
  },
  cardText: {
    alignSelf: 'center',
    fontSize: 18,
  },
  cardTextApp: {
    alignSelf: 'flex-start',
    fontSize: 18,
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
