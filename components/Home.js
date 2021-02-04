import React, {useState} from 'react';
import { Text, View, Button,TextInput, StyleSheet, } from 'react-native';
export default function Home ({navigation}){
    const [name, setName] = useState('');
    return(
        <View>
            <Text>This is Home</Text>
            <TextInput style={styles.textInput} placeholder="Name" value = {name} onChangeText={val=> setName(val)}/>
            <Button onPress={()=>navigation.push('About', {'name':name})} title="Open About"/>
            <Button onPress={()=>navigation.push('ReviewDetail')} title="Open Review"/>
            <Button onPress={()=>navigation.push('ReviewList')} title="Open Review List"/>


        </View>
    )
}

const styles = StyleSheet.create({

   textInput:{
    width: "50%",
    height:50,  
    fontSize: 22,
    color: "black",
    margin:10,
   },

  });