export type RootStackParamList = {
  HomeScreen: undefined
  WelcomeScreen: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
