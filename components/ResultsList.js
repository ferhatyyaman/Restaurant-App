import { StyleSheet, Text, View, FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'
import { useNavigation } from '@react-navigation/native'

export default function ResultsList({title, results}) {
   const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
      data={results} 
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate("ResultsShow",{id:item.id})}>
                <ResultDetail result={item} />
            </TouchableOpacity>
        )
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    title:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:18,
        marginBottom:10
    }
})