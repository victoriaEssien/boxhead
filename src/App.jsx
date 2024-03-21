
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HeroSection } from './sections'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={
            <>
              <HeroSection />
            </>
          }>
          </Route>
          {/* <Route path='/create-account' element={<CreateAccount />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App