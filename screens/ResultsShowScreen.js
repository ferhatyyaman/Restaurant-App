import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from "../api/yelp";
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultsShowScreen({route}) {
    const id=route.params.id;
    const [result, setresult] = useState(null)

    const getResult=async()=>{
        const response =await yelp.get(`/${id}`)
        setresult(response.data);
    }

    useEffect(()=>{
        getResult(id);
    },[])
    if(!result){
        return null;
    }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>

        <View style={styles.icon}>
        {result.is_closed ? (
        <AntDesign name="closecircle" size={24} color="black" />
      ):(
        <MaterialIcons name="delivery-dining" size={24} color="black" />

      )}
        </View>
     
     
      <FlatList data={result.photos} horizontal renderItem={({item})=>{
        return(
            <Image style={styles.image} source={{uri:item}}/>
        )
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        fontWeight:"bold",
        marginTop:10,
    },
    image:{
        width:300, 
        height:200,
        borderRadius:10,
        marginLeft:15,
        marginTop:10,

    },
    name:{
        fontSize:20,
        alignSelf:"center"
    },
    phone:{
        fontSize:16,
        alignSelf:"center"
    },
    icon:{
        alignSelf:"center"
    }
})