import React from 'react'
import { ImageProps } from 'react-native'
import Animated, { AnimatedProps } from 'react-native-reanimated'

export const AnimatedImage = (props: AnimatedProps<ImageProps>) => {
  return <Animated.Image {...props} />
}
