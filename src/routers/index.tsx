import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Suspense, lazy, memo, useEffect, useRef } from 'react';

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

const MemoizedNavbar = memo(Navbar);
const MemoizedSidebar = memo(Sidebar);

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

const Layout = memo(({ isSidebarOpen, setIsSidebarOpen }: { isSidebarOpen: boolean, setIsSidebarOpen: (isSidebarOpen: boolean) => void }) => {
    const workerRef = useRef<Worker | null>(null);
    const [layoutData, setLayoutData] = useState<any>(null);

    useEffect(() => {
        workerRef.current = new Worker(new URL('../workers/performanceWorker.ts', import.meta.url));

        workerRef.current.onmessage = (e) => {
            const { type, data } = e.data;
            switch (type) {
                case 'LAYOUT_RESULT':
                    setLayoutData(data);
                    break;
                case 'DATA_RESULT':
                    break;
            }
        };

        return () => {
            workerRef.current?.terminate();
        };
    }, []);

    useEffect(() => {
        if (workerRef.current) {
            workerRef.current.postMessage({
                type: 'COMPUTE_LAYOUT',
                data: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    isSidebarOpen
                }
            });
        }
    }, [isSidebarOpen]);

    return (
        <div className="min-h-screen bg-gradient-to-bl from-blue-900 to-blue-950 will-change-auto">
            <div className="absolute inset-0 bg-[url('/ocean-texture.png')] opacity-5 pointer-events-none"></div>
            
            <div className="relative flex min-h-screen flex-col">
                <Suspense fallback={<div className="h-16 bg-blue-900 animate-pulse" />}>
                    <MemoizedNavbar
                        isSidebarOpen={isSidebarOpen}
                        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="flex-shrink-0"
                    />
                </Suspense>

                <div className="flex flex-1">
                    <Suspense fallback={<div className="w-64 bg-blue-900 animate-pulse" />}>
                        <MemoizedSidebar
                            isOpen={isSidebarOpen}
                            onClose={() => setIsSidebarOpen(false)}
                        />
                    </Suspense>

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
                            <Suspense fallback={<div className="h-96 bg-blue-900 animate-pulse rounded-lg" />}>
                                <Outlet />
                            </Suspense>
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
