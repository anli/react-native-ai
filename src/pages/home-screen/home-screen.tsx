import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { Screen } from '@shared'
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

export const HomeScreen = () => {
  return (
    <Screen className="flex-1 bg-red-300">
      <View className="flex-1">
        <View className="flex-row justify-center">
          <Animated.Image
            source={require('@shared/assets/images/mocha.png')}
            className="w-40 h-40"
            sharedTransitionTag="mocha"
            sharedTransitionStyle={sharedTransitionStyle}
          />
        </View>
      </View>

      <View className="flex justify-center items-center">
        <Pressable className="justify-center">
          <View className="bg-white absolute w-10 h-10 rounded-full self-center" />
          <Image
            source={require('@shared/assets/images/recording-icon.png')}
            className="rounded-full w-20 h-20"
          />
        </Pressable>
      </View>
    </Screen>
  )
}
