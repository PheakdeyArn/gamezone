import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Home({navigation}) {

    const [reviews, setReviews] = useState([
          { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
          { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
          { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
        ]);

  return (
    <View style={globalStyles.container}>
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

