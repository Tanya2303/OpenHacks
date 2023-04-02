import React, {useState} from 'react'
import ProjectMetrics from '../components//ProjectMetrics';

export default function Analytics() {

    const [user, setUser] = useState(null);

    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Analytics</div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pt-10 pb-20'>
                <ProjectMetrics owner={user.displayName} repo={user.repo} />
            </div>

        </div>
    )
}
