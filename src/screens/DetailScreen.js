import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTaches } from '../context/TachesContext';
import { COULEURS } from '../styles/couleurs';

export default function DetailScreen({ route, navigation }) {
  const { id, titre } = route.params;
  const { taches, basculerTache } = useTaches();
  const tache = taches.find((t) => t.id === id);

  return (
    <View style={styles.ecran}>
      <Text style={styles.titre}>{titre}</Text>

      {tache ? (
        <>
          <Text style={styles.info}>Catégorie : {tache.categorie}</Text>
          <Text style={[styles.info, tache.terminee ? styles.termine : styles.aFaire]}>
            {tache.terminee ? '✓ Terminée' : '○ À faire'}
          </Text>

          <Pressable
            style={({ pressed }) => [styles.bouton, pressed && styles.boutonAppuye]}
            onPress={() => basculerTache(id)}
          >
            <Text style={styles.boutonTexte}>
              {tache.terminee ? 'Marquer à faire' : 'Marquer terminée'}
            </Text>
          </Pressable>
        </>
      ) : (
        <Text style={styles.info}>Cette tâche a été supprimée.</Text>
      )}

      <Pressable onPress={() => navigation.goBack()} style={styles.retour}>
        <Text style={styles.retourTexte}>Retour</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: COULEURS.fond,
    padding: 20,
    gap: 8,
  },
  titre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COULEURS.texte,
  },
  info: {
    fontSize: 14,
    color: COULEURS.texte,
  },
  termine: {
    color: COULEURS.succes,
  },
  aFaire: {
    color: COULEURS.muted,
  },
  bouton: {
    backgroundColor: COULEURS.primaire,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  boutonAppuye: {
    opacity: 0.8,
  },
  boutonTexte: {
    color: COULEURS.blanc,
    fontWeight: 'bold',
    fontSize: 15,
  },
  retour: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  retourTexte: {
    fontSize: 15,
    color: COULEURS.primaire,
  },
});
