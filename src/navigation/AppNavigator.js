import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccueilStack from './AccueilStack';
import ProfilScreen from '../screens/ProfilScreen';
import { COULEURS } from '../styles/couleurs';

const Tab = createBottomTabNavigator();

const iconeOnglet = (symbole) => ({ focused }) => (
  <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>{symbole}</Text>
);

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COULEURS.primaire,
        tabBarInactiveTintColor: COULEURS.muted,
        sceneStyle: { backgroundColor: COULEURS.fond },
      }}
    >
      <Tab.Screen
        name="Taches"
        component={AccueilStack}
        options={{
          title: 'Tâches',
          headerShown: false, // le Stack affiche déjà son propre en-tête
          tabBarIcon: iconeOnglet('☰'),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{ title: 'Profil', tabBarIcon: iconeOnglet('👤') }}
      />
    </Tab.Navigator>
  );
}
