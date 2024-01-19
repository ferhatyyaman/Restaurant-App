import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';
import SearchBar from './components/SearchBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
          headerTitle: ({ color }) => (
            <View style={{ flex: 1, height: 100, backgroundColor: color }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Restoran Uygulaması</Text>
              <SearchBar/>
            </View>
          ),
        }}
      > 
       {/* <Stack.Navigator screenOptions={{headerTitle: 'Restoran Uygulaması'}}> */}
      <Stack.Screen name="Home" component={SearchScreen} />
      <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
