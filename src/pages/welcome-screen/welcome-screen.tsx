import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Button, Screen, Text } from '@shared'
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated'

const sharedTransitionStyle = SharedTransition.custom(values => {
  'worklet'
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
    originX: withSpring(values.targetOriginX),
    originY: withSpring(values.targetOriginY)
  }
})

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
        <Animated.Image
          source={require('@shared/assets/images/mocha.png')}
          className="w-72 h-72"
          sharedTransitionTag="mocha"
          sharedTransitionStyle={sharedTransitionStyle}
        />
      </View>
      <Button onPress={() => navigate('HomeScreen')} title="Get Started" />
    </Screen>
  )
}
