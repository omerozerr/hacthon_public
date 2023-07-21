import Menubar from '../components/global/Menubar';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LendBox from '@/components/lend/LendBox';
import BorrowBox from '@/components/borrow/BorrowBox';

const Home = () => {
  return (
    // Then wrap your page's content with the Menubar component
    <Menubar>
      <div className={styles.container}>
        <Head>
          <title>Gercekten selaminhello mu</title>
          <meta
            content="Generated by @rainbow-me/create-rainbowkit"
            name="description"
          />
          <link href="/favicon.ico" rel="icon" />
        </Head>

        <LendBox />
        <BorrowBox />

        <footer className={styles.footer}>
          <a
            href="https://linktr.ee/odtubc"
            rel="noopener noreferrer"
            target="_blank"
          >
            Made with ❤️ by Ayıp Oluyo haha
          </a>
        </footer>
      </div>
    </Menubar>
  );
};

export default Home;