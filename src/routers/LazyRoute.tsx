import React, { Suspense, lazy, ComponentType, FC } from 'react';

type LazyRouteProps = {
    importComponent: () => Promise<{ default: ComponentType<any> }>;
};

const LazyRoute: FC<LazyRouteProps> = ({ importComponent }) => {
    const Component = lazy(importComponent);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
    );
};

export default LazyRoute;
