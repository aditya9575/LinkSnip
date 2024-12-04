import React from 'react'

const Statistics = () => {
    return (
        <section id="statistics" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Trusted by Millions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-6">
                        <p className="text-4xl font-bold text-purple-600 mb-2">10M+</p>
                        <p className="text-gray-600">Links Shortened</p>
                    </div>
                    <div className="p-6">
                        <p className="text-4xl font-bold text-purple-600 mb-2">5M+</p>
                        <p className="text-gray-600">Monthly Clicks</p>
                    </div>
                    <div className="p-6">
                        <p className="text-4xl font-bold text-purple-600 mb-2">100K+</p>
                        <p className="text-gray-600">Active Users</p>
                    </div>
                    <div className="p-6">
                        <p className="text-4xl font-bold text-purple-600 mb-2">99.9%</p>
                        <p className="text-gray-600">Uptime</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics