import { Home, Second, Planing, Map } from './view'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import buisness from './exemple.json'

const Stack = createNativeStackNavigator()



export default function App() {

  //console.log(buisness.data[0].name)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        />
        <Stack.Screen
          name="Second"
          component={Second}
        />
        <Stack.Screen
          name="Planing"
          component={Planing}
        />
        <Stack.Screen
          name="Map"
          component={Map}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}