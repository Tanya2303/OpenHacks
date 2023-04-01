import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Analytics from '../pages/Analytics';
import FindProjects from '../pages/FindProjects';

function Index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/findProjects" element={<FindProjects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
