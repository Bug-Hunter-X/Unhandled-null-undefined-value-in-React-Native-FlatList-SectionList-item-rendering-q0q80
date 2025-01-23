// bugSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: null },
  { id: 3, name: 'Item 3' },
  { id: 4, name: undefined },
  { id: 5, name: 'Item 5' },
];

const Item = ({ item }) => (
  <View>
    <Text>{item.name ?? 'Item Name Not Available'}</Text>  </View>
);

const MyList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyList;