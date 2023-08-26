import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Button, Screen, AnimatedImage, Text } from '@shared/ui'

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
        <AnimatedImage
          source={require('@shared/assets/images/mocha.png')}
          className="w-72 h-72"
          sharedTransitionTag="mocha"
        />
      </View>
      <Button onPress={() => navigate('HomeScreen')} title="Get Started" />
    </Screen>
  )
}
