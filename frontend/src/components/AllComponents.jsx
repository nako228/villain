import { useLocation, Route, Routes } from 'react-router-dom'
import About from "./About"
import ContactsForm from './ContactsForm'
import Excursion from "./Excursion"
import First from "./First"
import Footer from "./Footer"
import Galereya from "./Galereya"
import Kabinet from "./Kabinet"
import Navigation from "./Navigation"
import NewExcurs from "./NewExcurs"
import NoPage from "./NoPage"
import Reviews from "./Reviews"

function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<First />} />
                <Route path="/about" element={<About />} />
                <Route path="/kabinet" element={<Kabinet/>} />
                <Route path="*" element={<NoPage />} />
                <Route path="/newExcurs" element={<NewExcurs />} />
                <Route path="/contactsForm" element={<ContactsForm />} />
                <Route path="/reviews" element={<Reviews/>} />

            </Route>
        </Routes>
    );
}

export default AllComponents;