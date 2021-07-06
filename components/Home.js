import { observer } from 'mobx-react';
import React, { useState } from 'react';
import {
  Text,
  Button,
  TextInput,
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Store } from './Store';

export default Home=observer(()=>{
    const [name,setName]=useState('');
  return(
      <View style={styles.container}>
          <Text style={styles.textstyle}>Product Lists</Text>
          <TextInput style={styles.input} placeholder="text here" value={name} onChangeText={text=>setName(text)}/>
          <Button title="add" onPress={()=>Store.addList({name})}></Button>
          <Button title="View List" onPress={() => Actions.DisplayList()}/>
          <FlatList data={Store.list} keyExtractor={item=>item.id}
              renderItem={({item})=>(
                <View style={styles.liststyle}>
                <Text>{item.name}</Text>
                </View>
              )
              }/>  
              <Text style={styles.textstyle}>Total List:{Store.count}</Text>                
      </View>
  );
}
);
const styles = StyleSheet.create({
    container: {
      flex: 1,
        margin:30,
    },
    input:{
        borderWidth:2,
        borderColor:'grey',
    },
    liststyle:{
        padding:5,
        marginTop:10
    },
    textstyle:{
        justifyContent:'flex-end',
        fontSize:25,
        paddingBottom:20
    }
  });
  