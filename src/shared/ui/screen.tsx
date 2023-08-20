import React, { FC } from 'react'
import {
  SafeAreaView,
  SafeAreaViewProps,
  useSafeAreaInsets
} from 'react-native-safe-area-context'

export const Screen: FC<SafeAreaViewProps> = props => {
  const { top } = useSafeAreaInsets()
  const { style, ...rest } = props

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[...(style as any), { paddingTop: top }]}
      {...rest}
    />
  )
}
