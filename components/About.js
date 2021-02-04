import React from 'react';
import { Text, View,Button } from 'react-native';

export default function About ({navigation}){
    
    return(
        <View>
            <Text>This is About</Text>
            <Text> You Are {navigation.getParam('name')} </Text> 
            <Button onPress={()=>navigation.goBack()} title="Go Back"/>
        </View>
    )
}