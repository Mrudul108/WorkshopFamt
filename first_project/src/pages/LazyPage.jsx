import React, { Suspense } from 'react'
const D = React.lazy(() => import("../components/Data"))

function LazyPage() {
    return (
        <div>
            <Suspense fallback={<h2 className='text-center'>Loading... Please wait.</h2>}>
                <D />
            </Suspense>
        </div>
    )
}

export default LazyPage