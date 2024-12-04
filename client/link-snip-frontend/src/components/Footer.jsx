import React from 'react'
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">LinkSnip</h3>
                        <p className="text-sm">Making the web more accessible, one short link at a time.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com/aditya9575" className="hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://x.com/AdityaMehto3" className="hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/aditya-m-0bb92b110/" className="hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} LinkSnip. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer