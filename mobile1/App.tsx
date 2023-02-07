import './src/lib/dayjs'
import { StatusBar, Button } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  }),
})

export default function App() {
  // Garantir o carregamento das fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  async function scheduleNotifications() {
    const trigger = new Date(Date.now());
    trigger.setMinutes(trigger.getMinutes() + 1)
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Olá, Bruno",
        body: "Você praticou seus hábitos hoje?"
      },
      trigger
    })
  }


  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }
      {/* Pesquisar o que é translucent */}
  return (
    // <> é Fragment
    <>
      <Routes></Routes>
      <StatusBar barStyle="light-content" backgroundColor="transparent"  translucent/>
    </>
  );
}
