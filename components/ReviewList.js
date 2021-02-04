import React from 'react';
import { Text, View,Button,FlatList,TouchableOpacity, } from 'react-native';


export default function ReviewList ({navigation}){
    const reviews = [{
            "name": "James",
            "rating": 5,
            "review": "very Good"
        },
        {
            "name": "John",
            "rating": 3,
            "review": "Average"
        },
        {
            "name": "Julie",
            "rating": 4,
            "review": "Nice Restaurant"
        }]

    return(
        
        <View>

           <FlatList
           data={reviews}
           renderItem={({ item }) => 
           <View>
        <TouchableOpacity onPress={()=>navigation.push('NewReviewDetail', {'item':item})}>
            <Text>{item.name}</Text> 
            <Text>{item.rating}</Text> 
            <Text>{item.review}</Text>  
        </TouchableOpacity>   
           </View>
           }
           />

        </View>
    )
    
}