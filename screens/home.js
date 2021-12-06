import React, { useState } from 'react';
import { StyleSheet, View, Text, Button,TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';


export default function Home({navigation}) {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
        ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText} >Home Screen</Text>
      <Text style={globalStyles.contextText} >Hello! This is Home Screen,</Text>

      {/* <Button title="Review Detail" onPress={() => navigation.push("ReviewDetail")} />
      <Button title="About" onPress={() => navigation.push("About")} /> */}

        {/* ReView Detail Navigatoin Button  */}
      {/* <TouchableOpacity 
        style={globalStyles.appButtonContainer} 
        onPress={() => navigation.push("ReviewDetail")}
        >
        <Text style={globalStyles.appButtonText} >Review Detail</Text>
      </TouchableOpacity> */}

        {/* About Navigatoin Button  */}
      <TouchableOpacity style={globalStyles.appButtonContainer} onPress={() => navigation.push("About")} >
        <Text style={globalStyles.appButtonText} >About</Text>
      </TouchableOpacity>

      < FlatList 
        style={globalStyles.itemListContainer}
            data={reviews}
            renderItem={({item}) => (
                <View style={globalStyles.detailItemWrapper}>
                    <View style={globalStyles.detailItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail', item)}>
                            <Text style={globalStyles.detailItemText}>{ item.title }</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
        )}
      />
   
    </View>
  );
}

