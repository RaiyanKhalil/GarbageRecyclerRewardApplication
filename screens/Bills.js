import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Card from "../components/Card";

const Bills = () => {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
            <Card height={'auto'} width={"85%"} active={true}>
                <View style={styles.cardContent}>
                    <Text style={styles.title}>November Utility Bill</Text>
                    <Text style={styles.amount}>Amount: $80</Text>
                    <Text style={styles.amount}>Payment Status: Unpaid</Text>
                    <Text style={styles.date}>Due Date: December 5th, 2023</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Pay Bill</Text>
                    </TouchableOpacity>
                </View>
            </Card>
            <Card height={'auto'} width={"85%"} active={true}>
                <View style={styles.cardContent}>
                    <Text style={styles.title}>October Utility Bill</Text>
                    <Text style={styles.amount}>Amount: $150</Text>
                    <Text style={styles.amount}>Payment Status: Paid</Text>
                    <Text style={styles.date}>Due Date: December 5th, 2023</Text>
                    {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Button</Text>
                    </TouchableOpacity> */}
                </View>
            </Card>
            <Card height={'auto'} width={"85%"}>
                <View style={styles.cardContent} active={true}>
                    <Text style={styles.title}>September Utility Bill</Text>
                    <Text style={styles.amount}>Amount: $180</Text>
                    <Text style={styles.amount}>Payment Status: Paid</Text>
                    <Text style={styles.date}>Due Date: December 5th, 2023</Text>
                    {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Button</Text>
                    </TouchableOpacity> */}
                </View>
            </Card>
            <Card height={'auto'} width={"85%"}>
                <View style={styles.cardContent} active={true}>
                    <Text style={styles.title}>August Utility Bill</Text>
                    <Text style={styles.amount}>Amount: $120</Text>
                    <Text style={styles.amount}>Payment Status: Paid</Text>
                    <Text style={styles.date}>Due Date: December 5th, 2023</Text>
                    {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Button</Text>
                    </TouchableOpacity> */}
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
      justifyContent: 'center'
    },
    cardContent: {
        padding: 20,
    },
    title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    amount: {
    fontSize: 16,
    marginBottom: 5,
    },
    date: {
    fontSize: 14,
    color: '#777',
    },
    paymentBtn: {
        height: '20px',
        width: 'auto',
        padding: 5,
        backgroundColor: "Green"
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });

export default Bills