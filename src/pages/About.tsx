import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-ice-50">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-sm font-semibold text-ice-600 uppercase tracking-wider">Our Story</span>
                    <h1 className="text-6xl md:text-7xl font-bold mt-6 mb-8 text-slate-900">
                        Skincare That
                        <span className="block bg-gradient-to-r from-ice-600 to-mint-600 bg-clip-text text-transparent">
                            Actually Works
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                        We're on a mission to make premium, effective skincare accessible to everyone.
                        No gimmicks, no empty promises—just science-backed formulas that deliver real results.
                    </p>
                </div>
            </section>

            {/* Mission Statement with Image */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-semibold text-ice-600 uppercase tracking-wider">Our Mission</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-slate-900">
                                Transforming Skincare, One Face at a Time
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    ICE CONE was born from a simple frustration: why is effective skincare so complicated and expensive?
                                    We believed there had to be a better way.
                                </p>
                                <p>
                                    After years of research and collaboration with dermatologists, we created a formula that combines
                                    the most effective ingredients—Vitamin C, Niacinamide, and Hyaluronic Acid—in optimal concentrations
                                    for maximum results.
                                </p>
                                <p>
                                    Today, we're proud to serve over 10,000 customers who trust us with their skin. Every bottle is a
                                    testament to our commitment to quality, transparency, and your skin's health.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-ice-600 mb-2">10K+</div>
                                    <div className="text-sm text-slate-600">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-mint-600 mb-2">98%</div>
                                    <div className="text-sm text-slate-600">Satisfaction Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-ice-600 mb-2">4.9★</div>
                                    <div className="text-sm text-slate-600">Average Rating</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-ice-200 to-mint-200 rounded-3xl blur-3xl opacity-30"></div>
                            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
                                <img
                                    src="/src/images/facewash in Circle.png"
                                    alt="ICE CONE Product"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-ice-600 uppercase tracking-wider">What We Stand For</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            These principles guide every decision we make
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: 'Science-Backed Formulas',
                                desc: 'Every ingredient is chosen based on clinical research and proven efficacy. We work with dermatologists to ensure our products deliver real, measurable results.'
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                title: 'Sustainable Practices',
                                desc: 'We\'re committed to protecting the planet. Our packaging is recyclable, and we source ingredients responsibly, ensuring minimal environmental impact.'
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                ),
                                title: '100% Cruelty-Free',
                                desc: 'We never test on animals, period. Beauty should never come at the expense of our furry friends. All our products are certified cruelty-free.'
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ),
                                title: 'Customer-First Approach',
                                desc: 'Your satisfaction is our priority. We listen to feedback, continuously improve our products, and stand behind every bottle with our 30-day guarantee.'
                            },
                        ].map((value, idx) => (
                            <div key={idx} className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-ice-300 hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ice-500 to-mint-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Details */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-ice-600 uppercase tracking-wider">The Science</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
                            What Makes Us Different
                        </h2>
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-ice-50 rounded-3xl p-8 md:p-12 border border-slate-200">
                        <img
                            src="/src/images/Description.png"
                            alt="Product Description"
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>

                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-gradient-to-br from-ice-50 to-white rounded-3xl border border-ice-200">
                            <div className="text-5xl font-bold bg-gradient-to-r from-ice-600 to-mint-600 bg-clip-text text-transparent mb-3">
                                15%
                            </div>
                            <div className="text-lg font-semibold text-slate-900 mb-2">Vitamin C</div>
                            <div className="text-slate-600">Optimal concentration for maximum brightening</div>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-mint-50 to-white rounded-3xl border border-mint-200">
                            <div className="text-5xl font-bold bg-gradient-to-r from-mint-600 to-ice-600 bg-clip-text text-transparent mb-3">
                                5%
                            </div>
                            <div className="text-lg font-semibold text-slate-900 mb-2">Niacinamide</div>
                            <div className="text-slate-600">Clinically proven pore-minimizing dose</div>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-br from-ice-50 to-white rounded-3xl border border-ice-200">
                            <div className="text-5xl font-bold bg-gradient-to-r from-ice-600 to-mint-600 bg-clip-text text-transparent mb-3">
                                2%
                            </div>
                            <div className="text-lg font-semibold text-slate-900 mb-2">Hyaluronic Acid</div>
                            <div className="text-slate-600">Deep hydration that lasts all day</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Commitment */}
            <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-sm font-semibold text-ice-400 uppercase tracking-wider">Our Promise</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
                        Committed to Your Skin's Health
                    </h2>
                    <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                        <p>
                            We're not just selling face wash—we're building a community of people who believe in the power
                            of quality skincare. Every bottle of ICE CONE is crafted with precision, tested rigorously, and
                            delivered with care.
                        </p>
                        <p>
                            Our team of skincare experts and dermatologists work tirelessly to ensure that every product
                            meets our high standards. We listen to your feedback, continuously improve our formulas, and
                            stay committed to transparency in everything we do.
                        </p>
                        <p className="text-xl font-semibold text-ice-300">
                            Thank you for choosing ICE CONE. Here's to healthier, happier skin! ❄️
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/shop"
                            className="px-10 py-4 rounded-full bg-gradient-to-r from-ice-500 to-mint-500 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                            Try ICE CONE Today
                        </Link>
                        <Link
                            to="/"
                            className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Certifications & Trust Badges */}
            <section className="py-16 px-6 bg-white border-y border-slate-200">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        {[
                            { icon: '🏆', label: 'Award Winning' },
                            { icon: '🧪', label: 'Dermatologist Tested' },
                            { icon: '🌱', label: '100% Natural' },
                            { icon: '🐰', label: 'Cruelty Free' },
                        ].map((badge, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl mb-2">{badge.icon}</div>
                                <div className="text-sm font-semibold text-slate-700">{badge.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
