import { Header } from './componentes/Header';
import { Post } from './componentes/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './componentes/Sidebar';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/Miguel-Augusto-BSN.png',
      nome: 'Miguel Augusto',
      role: 'Estagiário Mount Innovation'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'} ,
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-04-17 20:00:00'),
  },
{
  id: 2,
  author:{
    avatarUrl: 'https://github.com/maykbrito.png',
    nome: 'Mayk Brito',
    role: 'Estagiário Mount Innovation'
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋'} ,
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type:'link', content: 'jane.design/doctorcare' },
  ],
  publishedAt: new Date('2023-04-19 20:45:40'),
},
];

export function App() {
    return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map ( post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>

    )

}


