
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { HeroSection, Stats, About, FeaturedArt, StayConnected, Footer } from './sections'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={
            <>
              <HeroSection />
              <Stats />
              <About />
              <FeaturedArt />
              <StayConnected />
              <Footer />
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