import { createContext, useContext, useState } from 'react';

const TACHES_INITIALES = [
  { id: '1', titre: 'Créer la maquette', categorie: 'Design', terminee: true },
  { id: '2', titre: 'Installer Expo', categorie: 'Setup', terminee: true },
  { id: '3', titre: 'Composant TacheCard', categorie: 'Dev', terminee: false },
  { id: '4', titre: "Écran d'accueil", categorie: 'Dev', terminee: false },
  { id: '5', titre: 'Tester sur téléphone', categorie: 'QA', terminee: false },
];

const TachesContext = createContext(null);

export function TachesProvider({ children }) {
  const [taches, setTaches] = useState(TACHES_INITIALES);

  const ajouterTache = (titre, categorie) => {
    const nouvelleTache = {
      id: Date.now().toString(),
      titre,
      categorie,
      terminee: false,
    };
    setTaches((precedentes) => [...precedentes, nouvelleTache]);
  };

  const basculerTache = (id) => {
    setTaches((precedentes) =>
      precedentes.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches((precedentes) => precedentes.filter((tache) => tache.id !== id));
  };

  return (
    <TachesContext.Provider value={{ taches, ajouterTache, basculerTache, supprimerTache }}>
      {children}
    </TachesContext.Provider>
  );
}

export function useTaches() {
  const contexte = useContext(TachesContext);
  if (!contexte) {
    throw new Error('useTaches doit être utilisé dans un <TachesProvider>');
  }
  return contexte;
}
