import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons'

export default function Conditions({weather}){
    return(
        <View style={styles.Container}>

            <View style={styles.condition}>
               <Feather name='wind' size={22} color="#1fd6ff" />
               <Text>{weather.results.wind_speedy}</Text>
            </View>

            <View style={styles.condition}>
               <MaterialCommunityIcons name='weather-sunset-up' size={22} color="#1fd6ff" />
               <Text>{weather.results.sunrise}</Text>
            </View>

            <View style={styles.condition}>
               <MaterialCommunityIcons name='weather-sunset-down' size={22} color="#1fd6ff" />
               <Text>{weather.results.sunset}</Text>
            </View>

            <View style={styles.condition}>
               <Feather name='droplet' size={22} color="#1fd6ff" />
               <Text>{weather.results.humidity}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
   Container:{
       marginTop:15,
       padding:10,
       backgroundColor:'#fff',
       flexDirection:'row',
       width:'95%',
       justifyContent:'space-around',
       borderRadius:8
   },
   condition:{
       alignItems:'center',
       justifyContent:'center'
   },
})