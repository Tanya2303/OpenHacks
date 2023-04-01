import React from 'react'
import ProjectMetrics from '../components//ProjectMetrics';

export default function Analytics() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Analytics</div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pt-10 pb-20'>
                <ProjectMetrics owner="Tanya2303" repo="HackForCreators" />
                <ProjectMetrics owner="Tanya2303" repo="Hack-Around-the-World-2" />
                <ProjectMetrics owner="Tanya2303" repo="Black-Wings-Hacks-2023" />
                <ProjectMetrics owner="Tanya2303" repo="HackFit-2" />
                <ProjectMetrics owner="Tanya2303" repo="Hack-commerce" />
                <ProjectMetrics owner="Tanya2303" repo="SpacedMind-Tanya" />
            </div>

        </div>
    )
}
