import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar.js'
import useResults from '../hooks/useResults.js'
import ResultsList from '../components/ResultsList.js'


export default function SeacrhScreen() {
  const [searchApi, results]=useResults()
  const filterResultsByPrice=(price)=>{
    return results.filter((results)=>{
      return results.price===price
    })
  }
  return (
    <View>
      
     <SearchBar/>
     <ResultsList title='Ucuz Restoranlar' results={filterResultsByPrice('₺')} />
     <ResultsList title='Uygun Restoranlar' results={filterResultsByPrice('₺₺')} />
     <ResultsList title='Pahalı Restoranlar' results={filterResultsByPrice('₺₺₺')} />
    </View>
  )
}

const styles = StyleSheet.create({})