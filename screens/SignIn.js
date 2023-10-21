import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const SignIn = () => {
    const [userID, onChangeUserID] = useState('');
    const [userPassword, onChangeUserPassword] = useState('');


    const navigation = useNavigation(); // Hook to access navigation

    return (
        <View style={styles.viewStyle}>
            {/* <Text style={styles.heading}>Login</Text> */}
            <TextInput
                style={styles.textInput}     
                placeholder='User ID'
                onChangeText={onChangeUserID}
                value={userID}
            />
            <TextInput 
                style={styles.textInput}
                secureTextEntry={true}
                placeholder='Password'
                onChangeText={onChangeUserPassword}
                value={userPassword}
            />
            <TouchableOpacity 
                style={styles.btn}
                title='Login'
                onPress={() => {
                    console.log('tolo')
                    if(userID == 'Raiyan' && userPassword == '12345') {
                        try {
                             AsyncStorage.setItem('appState', 'true');
                             navigation.navigate('Main');
                          } catch (e) {
                            console.log(e)
                          }
                    }
                }}
            ><Text style={{color: "white"}}>Login</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        // backgroundColor: "#2F4858",
    },
    heading: {
        fontSize: 30,
        marginBottom: 15,
    },
    textInput: {
        width: 200,
        height: 60,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: "#2F4858",
        borderRadius: 5,
        textAlign: "center",
    },
    btn: {
        width: 150,
        height: 60,
        textC: "white",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2F4858",
    }
  });

export default SignIn;