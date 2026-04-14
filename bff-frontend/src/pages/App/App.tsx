import './App.css'
import Header from '../../components/Header/Header'
import Posts from '../Posts/Posts'

function App() {
  return (
    <>
      <h1 className='logo'>Header</h1>
      <div className='container'>
        <div className='inner-container'>
          <Header />
          <Posts />
        </div>
      </div>
    </>
  )
}

export default App
