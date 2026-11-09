import { Pressable, StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccueilScreen from '../screens/AccueilScreen';
import AjouterScreen from '../screens/AjouterScreen';
import DetailScreen from '../screens/DetailScreen';
import { COULEURS } from '../styles/couleurs';

const Stack = createNativeStackNavigator();

export default function AccueilStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Retour',
        headerTintColor: COULEURS.primaire,
        contentStyle: { backgroundColor: COULEURS.fond },
      }}
    >
      <Stack.Screen
        name="Accueil"
        component={AccueilScreen}
        options={({ navigation }) => ({
          title: 'TaskFlow',
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Ajouter')} hitSlop={8}>
              <Text style={styles.boutonAjouter}>+ Ajouter</Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen name="Ajouter" component={AjouterScreen} options={{ title: 'Nouvelle tâche' }} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({ title: route.params.titre })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  boutonAjouter: {
    fontSize: 15,
    fontWeight: '600',
    color: COULEURS.primaire,
  },
});
