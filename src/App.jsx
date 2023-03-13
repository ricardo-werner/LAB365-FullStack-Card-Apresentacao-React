import './App.css'
import Card from './components/Card'

function App() {
  const usuario = {
    nome: "Ricardo Werner Grosscklauss",
    idade: 53,
    foto: "https://avatars.githubusercontent.com/u/105825127?v=4",
    github: "https://github.com/ricardo-werner",
    linkedin: "https://www.linkedin.com/in/ricardo-werner",
  }

  return (
      <div>
        <Card usuario = {usuario} />
      </div>
  )
}

export default App
