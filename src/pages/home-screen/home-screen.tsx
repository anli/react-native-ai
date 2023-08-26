import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, View } from 'react-native'
import { Screen, AnimatedImage, Text } from '@shared'
import Voice from '@react-native-voice/voice'

export const HomeScreen = () => {
  return (
    <Screen className="flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row justify-center">
          <AnimatedImage
            source={require('@shared/assets/images/mocha.png')}
            className="w-40 h-40"
            sharedTransitionTag="mocha"
          />
        </View>
      </View>

      <View className="flex justify-center items-center">
        <ActionButtons />
      </View>
    </Screen>
  )
}

const ActionButtons = () => {
  const [loading, setLoading] = useState(false)
  const { recording, start: voiceStart, stop: voiceStop, result } = useVoice()
  const state = loading ? 'LOADING' : recording ? 'RECORDING' : 'NONE'

  const handleStartRecording = async () => {
    await voiceStart()
  }

  const handleStopRecording = async () => {
    try {
      setLoading(true)
      await voiceStop()
      await new Promise(resolve => setTimeout(() => resolve(null), 3000))
    } catch (error) {
      console.log('handleStopRecording', error)
    } finally {
      setLoading(false)
    }
  }

  if (state === 'LOADING') {
    return (
      <View className="justify-center w-20 h-20">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (state === 'RECORDING') {
    return (
      <>
        {!!result && (
          <View className="rounded-lg p-2 m-2 bg-red-300">
            <Text className="" variant="h2">
              {result}
            </Text>
          </View>
        )}
        <Pressable className="justify-center" onPress={handleStopRecording}>
          <Image
            source={require('@shared/assets/images/voiceLoading.gif')}
            className="rounded-full w-20 h-20"
          />
        </Pressable>
      </>
    )
  }

  return (
    <Pressable className="justify-center" onPress={handleStartRecording}>
      <Image
        source={require('@shared/assets/images/recordingIcon.png')}
        className="rounded-full w-20 h-20"
      />
    </Pressable>
  )
}

const useVoice = () => {
  const [recording, setRecording] = useState(false)
  const [result, setResult] = useState('')

  useEffect(() => {
    Voice.onSpeechStart = _ => {
      setResult('')
      setRecording(true)
    }
    Voice.onSpeechEnd = _ => {
      setRecording(false)
    }
    Voice.onSpeechResults = e => {
      const text = e.value?.[0] ?? ''
      setResult(text)
    }
    Voice.onSpeechError = _ => {
      setRecording(false)
    }
    Voice.onSpeechVolumeChanged = _ => {}

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  return {
    recording,
    start: () => Voice.start('en-GB'),
    stop: () => Voice.stop(),
    result
  }
}
