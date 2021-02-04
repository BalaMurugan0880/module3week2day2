import React from 'react';
import { Text, View,Button } from 'react-native';

export default function NewReviewDetail ({navigation}){
    const item = navigation.getParam('item')
    return(
        <View>
            <Text>{item.name} </Text> 
            <Text>{item.rating} </Text> 
            <Text>{item.review} </Text> 
            <Button onPress={()=>navigation.goBack()} title="Go Back"/>
        </View>
    )
}