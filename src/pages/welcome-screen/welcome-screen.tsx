import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, View } from 'react-native'
import { Button, Screen, Text } from '@shared'

export const WelcomeScreen = () => {
  const { navigate } = useNavigation()

  return (
    <Screen className="flex-1 flex justify-around bg-red-300">
      <View className="space-y-2">
        <Text className="text-center" variant="h1">
          Mocha
        </Text>
        <Text className="text-center" variant="h2">
          Your AI assistant is here at your service.
        </Text>
      </View>

      <View className="flex-row justify-center">
        <Image
          source={require('@shared/assets/images/welcome.png')}
          className="w-72 h-72"
        />
      </View>
      <Button onPress={() => navigate('HomeScreen')} title="Get Started" />
    </Screen>
  )
}
