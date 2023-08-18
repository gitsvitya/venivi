import React from 'react';
import styles from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import LogoBlock from "../LogoBlock/LogoBlock";
import AboutBlock from "../AboutBlock/AboutBlock";
import ScreenshotsBlock from "../ScreenshotsBlock/ScreenshotsBlock";
import AuthorsBlock from "../AuthorsBlock/AuthorsBlock";
import AppFooter from "../AppFooter/AppFooter";
import { rusLng, engLng } from '../../utils/lng';

function App() {

  const [Language, ChangeLanguage] = React.useState('en');

  let currentText = engLng;

  if (Language == 'en')
    currentText = engLng;
  else
    currentText = rusLng;

  return (
    <div className={styles.page}>
      <AppHeader text={currentText} ChangeLanguage={ChangeLanguage} Language={Language}/>
      <main className={styles.main}>
        <LogoBlock text={currentText}/>
        <AboutBlock text={currentText}/>
        <ScreenshotsBlock text={currentText}/>
        <AuthorsBlock text={currentText}/>
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;
// Add transform animation
