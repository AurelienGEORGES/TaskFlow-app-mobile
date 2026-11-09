import { FlatList, StyleSheet, Text, View } from 'react-native';
import TacheCard from '../components/TacheCard';
import { useTaches } from '../context/TachesContext';
import { COULEURS } from '../styles/couleurs';

export default function AccueilScreen({ navigation }) {
  const { taches, supprimerTache } = useTaches();

  const ouvrirDetail = (tache) => {
    navigation.navigate('Detail', { id: tache.id, titre: tache.titre });
  };

  return (
    <FlatList
      style={styles.ecran}
      contentContainerStyle={styles.contenu}
      data={taches}
      keyExtractor={(tache) => tache.id}
      renderItem={({ item }) => (
        <TacheCard
          titre={item.titre}
          categorie={item.categorie}
          terminee={item.terminee}
          onPress={() => ouvrirDetail(item)}
          onSupprimer={() => supprimerTache(item.id)}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separateur} />}
      ListEmptyComponent={
        <View style={styles.vide}>
          <Text style={styles.videTitre}>Aucune tâche</Text>
          <Text style={styles.videTexte}>Appuyez sur « + Ajouter » pour en créer une.</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: COULEURS.fond,
  },
  contenu: {
    flexGrow: 1,
    padding: 20,
  },
  separateur: {
    height: 12,
  },
  vide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 60,
  },
  videTitre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COULEURS.primaire,
  },
  videTexte: {
    fontSize: 14,
    color: COULEURS.muted,
    textAlign: 'center',
  },
});
