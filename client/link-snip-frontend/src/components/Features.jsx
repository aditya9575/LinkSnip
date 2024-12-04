import React from 'react'
import { Zap, Shield, BarChart3, Globe } from 'lucide-react';

const features = [
    {
        icon: <Zap className="h-6 w-6" />,
        title: 'Lightning Fast',
        description: 'Generate short URLs instantly with our optimized system'
    },
    {
        icon: <Shield className="h-6 w-6" />,
        title: 'Secure Links',
        description: 'All URLs are encrypted and protected against malicious activity'
    },
    {
        icon: <BarChart3 className="h-6 w-6" />,
        title: 'Analytics',
        description: 'Track clicks and visitor statistics in real-time'
    },
    {
        icon: <Globe className="h-6 w-6" />,
        title: 'Custom Domains',
        description: 'Use your own domain for branded short links'
    }
];

const Features = () => {
    return (
        <section id="features" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose LinkSnip?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-purple-600 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features