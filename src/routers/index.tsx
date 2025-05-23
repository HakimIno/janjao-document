import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Suspense, lazy, memo } from 'react';

const HomePage = () => <LazyRoute importComponent={() => import('../pages/HomePage')} />;
const GettingStartedPage = () => <LazyRoute importComponent={() => import('../pages/GettingStarted')} />;
const ColorsPage = () => <LazyRoute importComponent={() => import('../pages/Colors')} />;
const DocumentationPage = () => <LazyRoute importComponent={() => import('../pages/Documentation')} />;
const InstallationPage = () => <LazyRoute importComponent={() => import('../pages/Installation')} />;

const Navbar = lazy(() => import('../components/Navbar'));
const Sidebar = lazy(() => import('../components/SlideBar'));
import LazyRoute from './LazyRoute';
import ButtonPage from '../pages/Components/ButtonPage';
import { useState } from 'preact/hooks';
import AccordionPage from '../pages/Components/AccordionPage';
import CheckBoxPage from '../pages/Components/CheckBoxPage';

const MemoizedNavbar = memo(Navbar);
const MemoizedSidebar = memo(Sidebar);

function AppRouter() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <BrowserRouter>
            <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-900 to-blue-950">
                    <div className="absolute inset-0 bg-[url('/ocean-texture.png')] opacity-5 pointer-events-none"></div>
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-blue-400/30 rounded-full"></div>
                        <div className="absolute inset-0 animate-water-wave">
                            <div className="w-16 h-8 bg-blue-400/60 rounded-full blur-sm transform translate-y-4"></div>
                        </div>
                        <div className="absolute inset-0 animate-spin">
                            <div className="w-16 h-16 border-t-4 border-blue-400 rounded-full"></div>
                        </div>
                        
                        {/* Bubbles */}
                        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-300/40 rounded-full animate-bubble-rise-1"></div>
                        <div className="absolute -bottom-1 left-6 w-2 h-2 bg-blue-300/40 rounded-full animate-bubble-rise-2"></div>
                        <div className="absolute -bottom-3 left-3 w-2 h-2 bg-blue-300/40 rounded-full animate-bubble-rise-3"></div>
                    </div>
                </div>
            }>
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
                            <Route path="accordion" element={<AccordionPage />} />
                            <Route path="button" index element={<ButtonPage />} />
                            <Route path="modal" element={<div>Modal</div>} />
                            <Route path="checkBox" element={<CheckBoxPage />} />
                            <Route path="input" element={<div>Input</div>} />
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

const Layout = memo(({ isSidebarOpen, setIsSidebarOpen }: { isSidebarOpen: boolean, setIsSidebarOpen: (isSidebarOpen: boolean) => void }) => {
    return (
        <div className="min-h-screen bg-gradient-to-bl from-blue-900 to-blue-950 will-change-auto">
            <div className="absolute inset-0 bg-[url('/ocean-texture.png')] opacity-5 pointer-events-none"></div>

            <div className="relative flex min-h-screen flex-col">
                <MemoizedNavbar
                    isSidebarOpen={isSidebarOpen}
                    onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="flex-shrink-0"
                />

                <div className="flex flex-1">
                    <MemoizedSidebar
                        isOpen={isSidebarOpen}
                        onClose={() => setIsSidebarOpen(false)}
                    />

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
                        <div className="mx-auto w-full max-w-4xl xl:max-w-5xl">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
});

const SimpleLayout = memo(() => {
    return (
        <div className="flex flex-col min-h-screen">
            <MemoizedNavbar isMenuOpen={false} />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
});

export default AppRouter;
