import styles from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import LogoBlock from "../LogoBlock/LogoBlock";
import AboutBlock from "../AboutBlock/AboutBlock";
import ScreenshotsBlock from "../ScreenshotsBlock/ScreenshotsBlock";
import AuthorsBlock from "../AuthorsBlock/AuthorsBlock";
import AppFooter from "../AppFooter/AppFooter";

function App() {
  return (
    <div className={styles.page}>
      <AppHeader/>
      <main className={styles.main}>
        <LogoBlock/>
        {/* <AboutBlock/>
        <ScreenshotsBlock/>
        <AuthorsBlock/> */}
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;

// Add transform animation
