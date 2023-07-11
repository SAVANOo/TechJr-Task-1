import { useState } from 'react'
import SearchBar from './components/Search/SearchBar'
import TitleLabel from './components/TitleLabel/TitleLabel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='title'><span>to.<b>do</b></span></div>
      
      <div className="container">
        <div className="container-content">
          <form className='Form'>
            <TitleLabel />
            <div className="searchbox">
              <SearchBar />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
