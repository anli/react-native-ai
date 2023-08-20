import clsx from 'clsx'
import React, { FC } from 'react'
import { Text as TextNative, TextProps } from 'react-native'

export const Text: FC<TextProps & { variant?: 'h1' | 'h2' }> = props => {
  const { variant = 'normal', className, ...textProps } = props
  const mergedClassName = clsx(
    'text-base',
    variant === 'h1' && 'font-bold text-gray-700 text-4xl',
    variant === 'h2' && ' tracking-wider font-semibold text-gray-600',
    className
  )

  return <TextNative className={mergedClassName} {...textProps} />
}
