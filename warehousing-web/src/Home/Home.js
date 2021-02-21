import React from 'react';
import Header from '../components/Menu/Header';
import Sidebar from '../components/Menu/Sidebar';
import { DashboardLayout } from '../components/Menu/Layout';

function Home() {
    return (
        <div>
            <Sidebar />
          <div class="p-5">
                <div className="p-5">
                    <div className="row justify-content ">
                        Dashboard
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;