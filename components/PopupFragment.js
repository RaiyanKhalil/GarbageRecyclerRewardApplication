import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PopupFragment = ({ visible, onClose }) => {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  const handleInput1Change = (text) => {
    setInput1Value(text);
  };

  const handleInput2Change = (text) => {
    setInput2Value(text);
  };

  const handleSubmit = async () => {
    try {

      const data = {
        "applianceName": `${input1Value}`,
        "powerRatingWatt": input2Value,
        "dailyUsage": [
            { "date": "2023-01-01", "usageKWh": 20 },
            { "date": "2023-01-02", "usageKWh": 70 },
            { "date": "2023-01-03", "usageKWh": 100 },
            { "date": "2023-01-04", "usageKWh": 60 },
            { "date": "2023-01-05", "usageKWh": 90 },
            { "date": "2023-01-06", "usageKWh": 25 },
            { "date": "2023-01-07", "usageKWh": 65 }
        ]
    }
  
      const response = await fetch('https://2575-140-161-250-179.ngrok-free.app/appliances', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Data sent successfully');
      } else {
        console.error('Failed to send data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  
    onClose();
  };
  
  

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.label}>Appliance Name</Text>
          <TextInput
            style={styles.input}
            value={input1Value}
            onChangeText={handleInput1Change}
          />

          <Text style={styles.label}>Power Rating in KWh</Text>
          <TextInput
            style={styles.input}
            value={input2Value}
            onChangeText={handleInput2Change}
          />

          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => onClose()} style={styles.closeButton}>
            <Text style={{color: 'white'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, 
    width: '85%',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default PopupFragment;
