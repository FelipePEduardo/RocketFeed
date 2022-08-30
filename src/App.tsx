// JSX = JavaScript + XML (HTML)
// Todos os componentes da aplicação react precisam ter extenção jsx
import { Header } from "./components/Header"
import { SideBar } from "./components/Sidebar";
import { Post } from "./components/Post"

import styles from './App.module.css';

import './global.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/FelipePEduardo.png',
      name: 'Felipe Eduardo',
      role: 'Desenvolvedor Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},             
    ],
    publishedAt: new Date('2022-08-21 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},             
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

// iteração: repetir alguma coisa, criar uma estrutura de repetição

// O método forEach não tem nenhum retorno
// {posts.forEach(post => { <Post /> })} não irá aparecer os posts na tela pois o forEach não está estornando nada

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
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
