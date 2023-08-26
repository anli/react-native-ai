import { useMutation } from 'react-query'
import axios from 'axios'
import Config from 'react-native-config'

const chatgptUrl = 'https://api.openai.com/v1/chat/completions'

const client = axios.create({
  headers: {
    Authorization: `Bearer ${Config.OPEN_AI_API_KEY}`,
    'Content-Type': 'application/json'
  }
})

type ChatCompletionsPropsMessage = {
  role: 'user' | 'assistant'
  content: string
}

const chatCompletions = async (messages: ChatCompletionsPropsMessage[]) => {
  const res = await client.post(chatgptUrl, {
    model: 'gpt-3.5-turbo',
    messages
  })

  const answer = res.data?.choices[0]?.message?.content
  return {
    success: true,
    data: [...messages, { role: 'assistant', content: answer.trim() }]
  }
}

const useChatCompletions = () =>
  useMutation('chatCompletions', (messages: ChatCompletionsPropsMessage[]) =>
    chatCompletions(messages)
  )

export const OpenAi = {
  useChatCompletions
}
