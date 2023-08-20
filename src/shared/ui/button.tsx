import React, { FC } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { Text } from './text'
import clsx from 'clsx'

export const Button: FC<PressableProps & { title?: string }> = props => {
  const { title, ...pressableProps } = props
  const mergedContainerClassName = clsx(
    'bg-emerald-600 mx-5 p-4 rounded-2xl active:opacity-20'
  )
  const mergedTitleClassName = clsx('text-center font-bold text-white')

  return (
    <Pressable className={mergedContainerClassName} {...pressableProps}>
      {!!title && <Text className={mergedTitleClassName}>{title}</Text>}
    </Pressable>
  )
}
