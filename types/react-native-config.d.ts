declare module 'react-native-config' {
  export interface NativeConfig {
    OPEN_AI_API_KEY?: string
  }

  export const Config: NativeConfig
  export default Config
}
