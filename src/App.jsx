import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicLayout from './components/layout/PublicLayout'
import Home from './pages/Home'
import OurApproach from './pages/OurApproach'
import Programs from './pages/Programs'
import Admission from './pages/Admission'
import Gallery from './pages/Gallery'
import BookATour from './pages/BookATour'
import { ROUTES } from './lib/routes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.ourApproach} element={<OurApproach />} />
          <Route path={ROUTES.programs} element={<Programs />} />
          <Route path={ROUTES.admission} element={<Admission />} />
          <Route path={ROUTES.gallery} element={<Gallery />} />
          <Route path={ROUTES.bookATour} element={<BookATour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
