import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, WelcomeScreen } from '@pages'
import { RootStackParamList } from './navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="WelcomeScreen"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
