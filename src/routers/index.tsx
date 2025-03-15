import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

const HomePage = () => <LazyRoute importComponent={() => import('../pages/HomePage')} />;
const GettingStartedPage = () => <LazyRoute importComponent={() => import('../pages/GettingStarted')} />;
const ColorsPage = () => <LazyRoute importComponent={() => import('../pages/Colors')} />;
const DocumentationPage = () => <LazyRoute importComponent={() => import('../pages/Documentation')} />;
const InstallationPage = () => <LazyRoute importComponent={() => import('../pages/Installation')} />;

import Navbar from '../components/Navbar';
import LazyRoute from './LazyRoute';
import ButtonPage from '../pages/Components/ButtonPage';
import { useState } from 'preact/hooks';
import Sidebar from '../components/SlideBar';


function AppRouter() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SimpleLayout />}>
                    <Route index element={<HomePage />} />
                </Route>

                <Route path="/" element={
                    <Layout
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                    />
                }>
                    <Route path="getting-started" element={<GettingStartedPage />} />
                    <Route path="installation" element={<InstallationPage />} />
                    <Route path="documentation" element={<DocumentationPage />} />
                    <Route path="colors" element={<ColorsPage />} />

                    <Route path="components">
                        <Route path="button" index element={<ButtonPage />} />
                        <Route path="modal" element={<div>Modal</div>} />
                        <Route path="accordion" element={<div>Accordion</div>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Layout({ isSidebarOpen, setIsSidebarOpen }: { isSidebarOpen: boolean, setIsSidebarOpen: (isSidebarOpen: boolean) => void }) {
    return (
        <div className="min-h-screen bg-gradient-to-bl from-blue-900 to-blue-950 will-change-auto">
            {/* Optimized underwater texture overlay - reduced opacity and no blend mode for better performance */}
            <div className="absolute inset-0 bg-[url('/ocean-texture.png')] opacity-5 pointer-events-none"></div>
            
            {/* Main container with flex column layout */}
            <div className="relative flex min-h-screen flex-col">
                {/* Fixed Navbar */}
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="flex-shrink-0"
                />

                {/* Main content area */}
                <div className="flex flex-1">
                    {/* Sidebar */}
                    <Sidebar
                        isOpen={isSidebarOpen}
                        onClose={() => setIsSidebarOpen(false)}
                    />

                    {/* Main content with proper padding and spacing */}
                    <main className={`
                        flex-1 
                        w-full 
                        transition-transform
                        duration-300 
                        px-4 
                        sm:px-6 
                        lg:px-8
                        pb-16 sm:pb-8
                        pt-24
                        lg:pt-20
                        ${isSidebarOpen ? 'lg:pl-72' : 'lg:pl-8'}
                    `}>
                        {/* Content container with max width */}
                        <div className="mx-auto w-full max-w-4xl xl:max-w-5xl">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

function SimpleLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar isMenuOpen={false} />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}

export default AppRouter;
