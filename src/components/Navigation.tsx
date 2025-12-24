import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Shop', path: '/shop' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-ice-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ice-400 to-mint-400 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                            <img
                                src="/images/ICE CONE LOGO.png"
                                alt="ICE CONE"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-ice-600 to-mint-600 bg-clip-text text-transparent">
                            ICE CONE
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`relative text-sm font-medium transition-colors duration-300 ${isActive(link.path)
                                    ? 'text-ice-600'
                                    : 'text-slate-600 hover:text-ice-600'
                                    }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-ice-500 to-mint-500 rounded-full"></span>
                                )}
                            </Link>
                        ))}
                        <Link
                            to="/shop"
                            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-ice-500 to-mint-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Buy Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-ice-50 transition-colors"
                    >
                        <svg
                            className="w-6 h-6 text-slate-600"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-4 py-2 rounded-lg transition-colors ${isActive(link.path)
                                    ? 'bg-ice-100 text-ice-600 font-medium'
                                    : 'text-slate-600 hover:bg-ice-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/shop"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2.5 rounded-lg bg-gradient-to-r from-ice-500 to-mint-500 text-white font-medium text-center shadow-lg"
                        >
                            Buy Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
