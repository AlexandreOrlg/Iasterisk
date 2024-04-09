import { getCommandWindow, getSettingsWindow } from "../main/windowManager";
import { clipboard, ipcMain, dialog, globalShortcut } from "electron";
import { store } from '../store';
import { getIcon } from '../main/utils';
import { tray } from '../main/tray';
import error from "svelte/types/compiler/utils/error";
import { OpenAiService } from "./aiService";

const apiKey = store?.get('apiKey') || '';
const openAiService = new OpenAiService(apiKey);

// Fonction pour obtenir et traiter la correction
export const getCorrection = async (value: string): Promise<void> => {

  getCommandWindow().once('ready-to-show', () => {
    getCommandWindow().show();
  });



  try {
    const text = clipboard.readText();
    tray.setImage(getIcon('load'));

    let correctionString = ""
    let update = (data_) => {
      correctionString += data_
      getCommandWindow().webContents.send('update', {
        loading : false,
        initialText : text,
        editedText : correctionString,
      });
    }
    let size =  calculerHauteurNecessaire(text)
    getCommandWindow().setSize(600, size + 80)

    await openAiService.getCorrection(value, text, update);
    //clipboard.writeText(correctionString);

    globalShortcut.register('enter', () => {
      clipboard.writeText(correctionString);
      getCommandWindow().close();
      globalShortcut.unregister('enter')
    })

    globalShortcut.register('esc', () => {
      getCommandWindow().close();
      globalShortcut.unregister('esc')
    })

    updateHistory(text, correctionString);

    getSettingsWindow().webContents.send('update-history', store?.get('history'));
    tray.setImage(getIcon('idle'));
  } catch (error) {
    handleCorrectionError(error);
  }
};

// Mise à jour de l'historique
const updateHistory = (origin: string, result: string): void => {
  const historyEntry = { origin, result, date: Date.now() };
  const history = store?.get('history') ?? [];
  store?.set('history', [historyEntry, ...history]);
};

// Gestion des erreurs
const handleCorrectionError = (error: any): void => {
  console.error('Correction error:', error);
  tray.setImage(getIcon('idle'));
  dialog.showErrorBox('Error Title', error instanceof Error ? error.message : String(error));
};


const calculerHauteurNecessaire = ( texte, largeur= 600, lineHieght = 19, largeurMoyenneCaractere = 10) => {
  // Estimation du nombre de caractères par ligne
  const caracteresParLigne = Math.floor(largeur / largeurMoyenneCaractere);

  // Calcul du nombre de lignes nécessaires
  const nombreDeLignes = Math.ceil(texte.length / caracteresParLigne);
  console.log(nombreDeLignes);

  // Hauteur estimée : nombre de lignes * taille de la police
  // Vous pouvez ajuster le multiplicateur pour prendre en compte l'espacement entre les lignes
  const hauteur = nombreDeLignes * lineHieght;

  return hauteur;
}
