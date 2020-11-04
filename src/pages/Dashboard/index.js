import Navbar from '../../components/Navbar/Navbar'
import React from 'react'


export default function Dashboard() {
    
    document.title = "Dashboard | Orlem Connect";

    return (
        <div>
            <Navbar />
            <div>
                This is the dashboard.
            </div>
        </div>
    )
}
