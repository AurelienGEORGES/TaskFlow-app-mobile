import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useTaches } from '../context/TachesContext';
import { COULEURS } from '../styles/couleurs';

export default function AjouterScreen({ navigation }) {
  const { ajouterTache } = useTaches();
  const [titre, setTitre] = useState('');
  const [categorie, setCategorie] = useState('');

  const titreValide = titre.trim().length > 0;

  const valider = () => {
    if (!titreValide) return;
    ajouterTache(titre.trim(), categorie.trim() || 'Général');
    navigation.goBack();
  };

  return (
    <View style={styles.ecran}>
      <TextInput
        style={styles.champ}
        placeholder="Titre de la tâche"
        placeholderTextColor={COULEURS.muted}
        value={titre}
        onChangeText={setTitre}
        autoFocus
        returnKeyType="next"
      />
      <TextInput
        style={styles.champ}
        placeholder="Catégorie (ex : Dev, Design, QA)"
        placeholderTextColor={COULEURS.muted}
        value={categorie}
        onChangeText={setCategorie}
        returnKeyType="done"
        onSubmitEditing={valider}
      />
      <Pressable
        style={({ pressed }) => [
          styles.bouton,
          !titreValide && styles.boutonDesactive,
          pressed && styles.boutonAppuye,
        ]}
        onPress={valider}
        disabled={!titreValide}
      >
        <Text style={styles.boutonTexte}>Ajouter la tâche</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: COULEURS.fond,
    padding: 20,
    gap: 12,
  },
  champ: {
    backgroundColor: COULEURS.blanc,
    borderWidth: 1,
    borderColor: COULEURS.bordure,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: COULEURS.texte,
  },
  bouton: {
    backgroundColor: COULEURS.primaire,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  boutonDesactive: {
    opacity: 0.4,
  },
  boutonAppuye: {
    opacity: 0.8,
  },
  boutonTexte: {
    color: COULEURS.blanc,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
