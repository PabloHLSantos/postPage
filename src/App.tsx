import { Header } from "./components/TS/Header";
import './global.css';
import { NewPost } from "./components/TS/NewPost";
import { Post } from "./components/TS/Post";
import styles from "./App.module.css"
import { User } from "./components/TS/User";
import { PostsByUserId } from "./components/TS/Teste"

export function App() {
    return (
      <div>       
        <Header />
        <div className={styles.wrapper}>
            <User />
            <main>
                <NewPost/>
                <Post userId={1}/>          
            </main>      
        </div>
      </div>
      
    )
  }