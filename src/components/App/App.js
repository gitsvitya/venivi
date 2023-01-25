import styles from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import LogoBlock from "../LogoBlock/LogoBlock";
import RunningLine from "../RunningLine/RunningLine";
import AboutBlock from "../AboutBlock/AboutBlock";
import ScreenshotsBlock from "../ScreenshotsBlock/ScreenshotsBlock";
import AuthorsBlock from "../AuthorsBlock/AuthorsBlock";
import AppFooter from "../AppFooter/AppFooter";

function App() {
  return (
    <div className={styles.page}>
      <container className={styles.container}>
        <AppHeader/>
        <main className={styles.main}>
          <LogoBlock/>
          {/*<RunningLine/>*/}
          <AboutBlock/>
          <ScreenshotsBlock/>
          <AuthorsBlock/>
        </main>
        <AppFooter/>
      </container>
    </div>
  );
}

export default App;
