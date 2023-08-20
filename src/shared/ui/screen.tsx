import React, { FC } from 'react'
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context'

export const Screen: FC<SafeAreaViewProps> = props => {
  return <SafeAreaView {...props} />
}
