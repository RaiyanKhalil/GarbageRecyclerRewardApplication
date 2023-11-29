import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import Card from "../components/Card";
import PopupFragment from "../components/PopupFragment";

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
  const url = "https://2575-140-161-250-179.ngrok-free.app/appliances";
  const [data, setData] = useState<ApplianceData[]>([]);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

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
  }, [isPopupVisible]);

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
    return dayNames[day];
  };
  
  
  const generateBarData = (bar_Data) => {

    const sortedData = bar_Data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return sortedData.map(item => ({
      value: item.usageKWh,
      label: formatDateWithDay(item.date),
      frontColor: '#177AD5'
    }));
  };

  const handleLongPress = () => {
    console.log("Card long pressed!");
  };


  return (
    <View style={styles.containerView}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* <Text style={styles.cardText}>Welcome to your electricity monitoring pane. 
            Here you can monitor your daily electricity usage and cost.</Text> */}
        <Card height={'auto'} width={"38%"} active={true}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Electricity</Text>
            <Text style={styles.cardVal}>500w</Text>
          </View>
        </Card>
        <Card height={'auto'} width={"38%"} active={true}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Cost</Text>
            <Text style={styles.cardVal}>40$</Text>
          </View>
        </Card>

        {data ? 

          data.map( (data) => {
            
            return(
              <Card height={'auto'} width={"85%"} key={data._id} active={false} onLongPress={handleLongPress}>
                <View style={styles.cardContent}>
                  <Text style={styles.cardTextApp}>{data.applianceName}</Text>
                  <Text style={styles.cardTextApp}>Power Rating: {data.powerRatingWatt}W</Text>
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
        onPress={togglePopup}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
          <Text>Add</Text>
        </View>
      </TouchableOpacity>
      <PopupFragment visible={isPopupVisible} onClose={togglePopup} />
    </View>
  );
};

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
    justifyContent: 'center'
  },
  cardContent: {
    alignItems: 'center',
    flex: 1,
    height: "auto",
    paddingBottom: 15,
    overflow: "scroll"
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
