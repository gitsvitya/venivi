import styles from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import LogoBlock from "../LogoBlock/LogoBlock";
import RunningLine from "../RunningLine/RunningLine";

function App() {
  return (
    <div className={styles.page}>
      <container className={styles.container}>
        <AppHeader/>
        <main className={styles.main}>
          <LogoBlock/>
          <RunningLine/>
        </main>
        {/*<AppFooter/>*/}
      </container>
    </div>
  );
}

export default App;
