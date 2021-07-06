import { observer } from 'mobx-react';
import React, { useState,useEffect } from 'react';
import {
  Text,
  Button,
  TextInput,
  View,
  FlatList,
  StyleSheet} from 'react-native';
import { Store } from './Store';

const DisplayList=observer(()=>{
  return(
          <View style={styles.container}>
            <Text style={styles.textstyle}>Product Lists</Text>

<FlatList data={Store.list} keyExtractor={item=>item.id}
              renderItem={({item})=>(
                <View style={styles.liststyle}>
                <Text>{item.name}
                <Button title="delete" onPress={()=>Store.deleteList(item.id)} />                
                </Text></View>
              )
              }/>
          </View>
  );
}
)
export default DisplayList;
const styles = StyleSheet.create({
    container: {
      flex: 1,
        margin:30,
    },
    liststyle:{
        padding:5,
        marginTop:10,
        flexDirection:'row'
    },
    textstyle:{
        justifyContent:'flex-end',
        fontSize:25,
        paddingBottom:20
    }
  });
  
