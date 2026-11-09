import { StyleSheet, Text, View } from 'react-native';
import { COULEURS } from '../styles/couleurs';

/**
 * Carte affichant une tâche unique.
 * Entièrement pilotée par ses props : titre, categorie, terminee.
 */
export default function TacheCard({ titre, categorie, terminee = false }) {
  return (
    <View style={styles.carte}>
      <View style={styles.contenu}>
        <Text style={styles.titre} numberOfLines={2}>
          {titre}
        </Text>
        <Text style={[styles.statut, terminee ? styles.statutTermine : styles.statutAFaire]}>
          {terminee ? '✓ Terminée' : '○ À faire'}
        </Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeTexte}>{categorie}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carte: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: COULEURS.blanc,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  contenu: {
    flex: 1,
    gap: 4,
  },
  titre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COULEURS.texte,
  },
  statut: {
    fontSize: 13,
  },
  statutTermine: {
    color: COULEURS.succes,
  },
  statutAFaire: {
    color: COULEURS.muted,
  },
  badge: {
    backgroundColor: COULEURS.accent,
    borderRadius: 999,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  badgeTexte: {
    fontSize: 11,
    fontWeight: '600',
    color: COULEURS.primaire,
  },
});
