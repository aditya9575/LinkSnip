import React from 'react'
import { Link2 } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Link2 className="h-8 w-8" />
                        <h1 className="text-2xl font-bold">LinkSnip</h1>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#features" className="hover:text-blue-200 transition-colors">Features</a></li>
                            <li><a href="#statistics" className="hover:text-blue-200 transition-colors">Statistics</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header