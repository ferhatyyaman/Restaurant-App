import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar({onTermChange,onTermSubmit,term}) {
  return (
    <View style={styles.container}>
        <EvilIcons style={styles.icon} name="search" size={24} color="black" />

        <TextInput 
        style={styles.input} 
        placeholder='Ara' 
        autoCorrect={false} 
        autoCapitalize='none'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
     
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"lightgray",
    flexDirection: "row",
    margin:10,
    height:45,
    alignItems:"center",
    borderRadius:10,
  },
  icon:{
    marginHorizontal:15,
  },
  input:{
    flex:1,
    fontSize:18,
  }
})