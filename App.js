import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { TachesProvider } from './src/context/TachesContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <TachesProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </TachesProvider>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
