import styles from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";

function App() {
  return (
    <div className={styles.page}>
      <container className={styles.container}>
        <AppHeader/>
        <main className={styles.main}>
          {/*<LogoBlock/>*/}
        </main>
        {/*<AppFooter/>*/}
      </container>
    </div>
  );
}

export default App;
