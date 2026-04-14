import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Compliance from "./pages/Compliance";
import Domex from "./pages/Domex";
import Security from "./pages/Security";
import NotFound from "./pages/NotFound";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-white">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/"            element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/technology"  element={<PageWrapper><Technology /></PageWrapper>} />
            <Route path="/compliance"  element={<PageWrapper><Compliance /></PageWrapper>} />
            <Route path="/domex"       element={<PageWrapper><Domex /></PageWrapper>} />
            <Route path="/security"    element={<PageWrapper><Security /></PageWrapper>} />
            <Route path="*"            element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
