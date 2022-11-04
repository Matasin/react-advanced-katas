import { lazy, Suspense } from 'react';

const BundleComponent = lazy(() =>
  import('./BundleComponent')
    .then(module => ({ default: module.BundleComponent }))
);

export const Bundle = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BundleComponent />
      </Suspense>
      <a href="/stats.html">You can see visualization of bundle here</a>
    </>
  );
};
