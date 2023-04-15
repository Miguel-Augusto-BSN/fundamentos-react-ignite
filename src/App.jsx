import { Header } from './componentes/Header';
import { Post } from './componentes/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './componentes/Sidebar';

export function App() {
    return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
            <Post 
              author="Miguel Augusto" 
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sed accusantium adipisci obcaecati fuga laborum quam blanditiis reiciendis necessitatibus mollitia. A, quos quidem! Tempore quae et veniam, cum minus ad!"
            />
          <Post
              author="Miguel Nascimento"
              content="Um novo post muito legal!"
          />
        </main>
      </div>
    </div>

    )

}


