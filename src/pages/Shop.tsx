import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';

const Shop = () => {
    const [quantity, setQuantity] = useState(1);

    const buyingOptions = [
        {
            platform: 'Amazon',
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.53.406-3.045.61-4.516.61-2.265 0-4.446-.433-6.538-1.297-2.1-.868-3.95-2.07-5.558-3.598-.116-.116-.178-.235-.178-.354 0-.106.046-.18.135-.227zm23.71-5.024c.28-.574.28-.96 0-1.156-.28-.197-.67-.096-1.17.3-.483.397-.83.87-1.047 1.422-.217.55-.163.95.16 1.2.322.25.73.127 1.224-.37.494-.496.832-1.02 1.014-1.57z" />
                </svg>
            ),
            description: 'Fast delivery with Prime',
            badge: 'Most Popular',
            link: 'https://www.amazon.com',
            color: 'from-orange-500 to-yellow-600',
        },
        {
            platform: 'Flipkart',
            icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.833 0C1.718 0 0 1.718 0 3.833v16.334C0 22.282 1.718 24 3.833 24h16.334C22.282 24 24 22.282 24 20.167V3.833C24 1.718 22.282 0 20.167 0H3.833zm8.638 3.2c2.88 0 5.213 2.333 5.213 5.213s-2.333 5.213-5.213 5.213-5.213-2.333-5.213-5.213S9.591 3.2 12.471 3.2zm0 1.6c-1.995 0-3.613 1.618-3.613 3.613s1.618 3.613 3.613 3.613 3.613-1.618 3.613-3.613S14.466 4.8 12.471 4.8zm-5.6 11.2h11.2v1.6H6.871v-1.6z" />
                </svg>
            ),
            description: 'Exclusive offers available',
            badge: 'Best Value',
            link: 'https://www.flipkart.com',
            color: 'from-blue-500 to-yellow-500',
        },
        {
            platform: 'Official Store',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            description: 'Direct from manufacturer',
            badge: 'Fastest Shipping',
            link: '#',
            color: 'from-ice-500 to-mint-500',
        },
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-slate-50 via-white to-ice-50">
                <div className="max-w-7xl mx-auto">
                    {/* Limited Offer Banner */}
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-ice-600 to-mint-600 text-white rounded-full shadow-xl">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">Limited Time Offer - Get 20% Off Your First Purchase!</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Product Image Section */}
                        <div className="sticky top-24">
                            <div className="relative">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-ice-300 to-mint-300 rounded-full blur-3xl opacity-20"></div>

                                {/* Main product image */}
                                <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-slate-200">
                                    <img
                                        src="/images/Vitamin C Facewash.png"
                                        alt="ICE CONE Vitamin C Face Wash"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>

                                {/* Trust badges */}
                                <div className="mt-6 grid grid-cols-3 gap-4">
                                    <div className="text-center p-3 bg-white rounded-xl shadow-md border border-slate-200">
                                        <div className="text-2xl mb-1">🏆</div>
                                        <div className="text-xs font-semibold text-slate-700">Award Winning</div>
                                    </div>
                                    <div className="text-center p-3 bg-white rounded-xl shadow-md border border-slate-200">
                                        <div className="text-2xl mb-1">🧪</div>
                                        <div className="text-xs font-semibold text-slate-700">Dermatologist Tested</div>
                                    </div>
                                    <div className="text-center p-3 bg-white rounded-xl shadow-md border border-slate-200">
                                        <div className="text-2xl mb-1">🐰</div>
                                        <div className="text-xs font-semibold text-slate-700">Cruelty Free</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div>
                            <div className="mb-4">
                                <span className="text-sm font-semibold text-ice-600 uppercase tracking-wider">Premium Skincare</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                                ICE CONE Vitamin C Face Wash
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-slate-600">4.9/5 (2,847 reviews)</span>
                            </div>

                            {/* Price */}
                            <div className="mb-8 p-6 bg-gradient-to-br from-ice-50 to-mint-50 rounded-2xl border border-ice-200">
                                <div className="flex items-baseline gap-4 mb-2">
                                    <span className="text-5xl font-bold text-slate-900">₹499</span>
                                    <span className="text-2xl text-slate-500 line-through">₹599</span>
                                    <span className="px-3 py-1 bg-gradient-to-r from-mint-500 to-ice-500 text-white text-sm font-bold rounded-full">
                                        Save 20%
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600">Inclusive of all taxes • Free shipping on orders over ₹299</p>
                            </div>

                            {/* Key Benefits */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-4 text-slate-900">Key Benefits</h3>
                                <div className="space-y-3">
                                    {[
                                        { icon: '☀️', title: 'Brightens & Evens Skin Tone', desc: 'Vitamin C reduces dark spots and hyperpigmentation' },
                                        { icon: '💧', title: 'Deep Hydration', desc: 'Hyaluronic Acid locks in moisture for plump skin' },
                                        { icon: '🎯', title: 'Balances Oil Production', desc: 'Niacinamide minimizes pores and controls sebum' },
                                        { icon: '✨', title: 'Gentle & Safe', desc: 'Suitable for all skin types including sensitive skin' },
                                    ].map((benefit, idx) => (
                                        <div key={idx} className="flex gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-ice-300 transition-colors">
                                            <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                                                <p className="text-sm text-slate-600">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-slate-900 mb-3">Quantity</label>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border-2 border-slate-300 rounded-full overflow-hidden">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="px-6 py-3 hover:bg-slate-100 transition-colors font-semibold text-slate-700"
                                        >
                                            −
                                        </button>
                                        <span className="px-8 py-3 font-semibold text-slate-900">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="px-6 py-3 hover:bg-slate-100 transition-colors font-semibold text-slate-700"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className="text-sm text-slate-600">
                                        {quantity > 1 && `Total: ₹${499 * quantity}`}
                                    </span>
                                </div>
                            </div>

                            {/* Sticky CTA */}
                            <div className="sticky bottom-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 shadow-xl">
                                <div className="text-sm text-slate-600 mb-3">Choose where to buy:</div>
                                <div className="grid grid-cols-1 gap-3">
                                    {buyingOptions.map((option, idx) => (
                                        <a
                                            key={idx}
                                            href={option.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group relative p-4 rounded-xl bg-gradient-to-r ${option.color} text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-between`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                                    {option.icon}
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-bold">{option.platform}</div>
                                                    <div className="text-xs opacity-90">{option.description}</div>
                                                </div>
                                            </div>
                                            {option.badge && (
                                                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                                                    {option.badge}
                                                </span>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Buy Section */}
            <section className="py-16 px-6 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: '🚚', title: 'Free Shipping', desc: 'On orders above ₹299' },
                            { icon: '💯', title: '30-Day Guarantee', desc: 'Money back if not satisfied' },
                            { icon: '⚡', title: 'Fast Delivery', desc: '2-3 business days' },
                            { icon: '🎁', title: 'Free Samples', desc: 'With every order' },
                        ].map((feature, idx) => (
                            <div key={idx} className="text-center p-6">
                                <div className="text-5xl mb-3">{feature.icon}</div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ingredients Breakdown */}
            <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-ice-600 uppercase tracking-wider">The Formula</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
                            Powerful Ingredients
                        </h2>
                        <p className="text-xl text-slate-600">
                            Each ingredient is carefully selected for maximum effectiveness
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Vitamin C', percentage: '15%', color: 'from-orange-400 to-yellow-400', icon: 'C', benefit: 'Brightens and protects from free radicals' },
                            { name: 'Niacinamide', percentage: '5%', color: 'from-mint-400 to-ice-400', icon: 'N', benefit: 'Minimizes pores and balances oil' },
                            { name: 'Hyaluronic Acid', percentage: '2%', color: 'from-blue-400 to-cyan-400', icon: 'HA', benefit: 'Deeply hydrates and plumps skin' },
                        ].map((ingredient, idx) => (
                            <div key={idx} className="group p-8 bg-white rounded-3xl border border-slate-200 hover:shadow-xl transition-all duration-300">
                                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${ingredient.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {ingredient.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-center mb-2 text-slate-900">{ingredient.name}</h3>
                                <div className="text-center text-ice-600 font-bold text-lg mb-4">{ingredient.percentage}</div>
                                <p className="text-center text-slate-600">{ingredient.benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-ice-600 uppercase tracking-wider">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
                            What Our Customers Say
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Priya Sharma', location: 'Mumbai', rating: 5, review: 'My skin has never looked better! The glow is real and it doesn\'t dry out my skin at all. I\'ve been using it for 3 weeks and my dark spots are visibly lighter.', image: '👩🏻', verified: true },
                            { name: 'Rahul Mehta', location: 'Delhi', rating: 5, review: 'Best face wash I\'ve ever used! My dark spots are fading and my skin feels so fresh. Even my dermatologist noticed the improvement!', image: '👨🏽', verified: true },
                            { name: 'Anjali Kapoor', location: 'Bangalore', rating: 5, review: 'Love the refreshing feel! It\'s gentle yet effective. My skin feels clean without being stripped. Highly recommend!', image: '👩🏾', verified: true },
                        ].map((review, idx) => (
                            <div key={idx} className="p-8 bg-slate-50 rounded-3xl hover:shadow-xl transition-all duration-300">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-slate-700 mb-6 leading-relaxed italic">"{review.review}"</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="text-4xl">{review.image}</div>
                                        <div>
                                            <div className="font-bold text-slate-900">{review.name}</div>
                                            <div className="text-sm text-slate-600">{review.location}</div>
                                        </div>
                                    </div>
                                    {review.verified && (
                                        <div className="flex items-center gap-1 text-xs text-mint-600 font-semibold">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Verified
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-sm font-semibold text-ice-600 uppercase tracking-wider">FAQ</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
                            Common Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'Is this suitable for sensitive skin?', a: 'Yes! Our formula is pH-balanced and dermatologist-tested for all skin types, including sensitive skin.' },
                            { q: 'How long until I see results?', a: 'Most customers notice brighter, more hydrated skin within 2 weeks of consistent use.' },
                            { q: 'Can I use this twice daily?', a: 'Absolutely! We recommend using it morning and evening for best results.' },
                            { q: 'Is it safe during pregnancy?', a: 'While our ingredients are natural, we recommend consulting your doctor before use during pregnancy.' },
                        ].map((faq, idx) => (
                            <details key={idx} className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-ice-300 transition-colors">
                                <summary className="font-semibold text-lg text-slate-900 cursor-pointer flex justify-between items-center">
                                    {faq.q}
                                    <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 bg-gradient-to-br from-ice-600 via-mint-600 to-ice-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Ready for Radiant Skin?
                    </h2>
                    <p className="text-2xl text-ice-100 mb-10">
                        Join 10,000+ happy customers. Limited time offer - 20% off!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={buyingOptions[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-12 py-5 rounded-full bg-white text-ice-600 font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                        >
                            Shop on Amazon
                        </a>
                        <a
                            href={buyingOptions[1].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-12 py-5 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold text-xl border-2 border-white hover:bg-white/20 transition-all duration-300"
                        >
                            Shop on Flipkart
                        </a>
                    </div>
                    <p className="mt-8 text-ice-100 text-lg">
                        ✓ Free shipping on orders over ₹299 • ✓ 30-day money-back guarantee • ✓ Free samples included
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Shop;
