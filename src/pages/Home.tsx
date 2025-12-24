import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('benefits');

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Full Screen Impact */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-ice-50 to-white">
        {/* Subtle animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ice-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mint-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-ice-200">
                <svg className="w-5 h-5 text-mint-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-slate-700">Dermatologist Recommended</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                <span className="block text-slate-900">Radiant</span>
                <span className="block bg-gradient-to-r from-ice-500 via-mint-500 to-ice-600 bg-clip-text text-transparent">
                  Skin Starts
                </span>
                <span className="block text-slate-900">Here</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl">
                Transform your skin with our Vitamin C Face Wash.
                Clinically proven to brighten, hydrate, and balance in just 2 weeks.
              </p>

              {/* Key Stats */}
              <div className="flex flex-wrap gap-8 py-4">
                <div>
                  <div className="text-4xl font-bold text-ice-600">98%</div>
                  <div className="text-sm text-slate-600">Saw brighter skin</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-mint-600">2 weeks</div>
                  <div className="text-sm text-slate-600">Visible results</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-ice-600">100%</div>
                  <div className="text-sm text-slate-600">Natural ingredients</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/shop"
                  className="group px-8 py-5 rounded-full bg-gradient-to-r from-ice-600 to-mint-600 text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Shop Now - 20% Off
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <button className="px-8 py-5 rounded-full border-2 border-slate-300 text-slate-700 font-semibold text-lg hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch How It Works
                </button>
              </div>
            </div>

            {/* Right: Product Image */}
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-ice-100 to-mint-100 opacity-40"></div>
              </div>

              {/* Product */}
              <div className="relative z-10 animate-float">
                <img
                  src="/images/facewash.png"
                  alt="ICE CONE Vitamin C Face Wash"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating info cards */}
              <div className="absolute top-10 -left-10 bg-white rounded-2xl shadow-xl p-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center text-white font-bold text-xl">
                    C
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Vitamin C</div>
                    <div className="text-xs text-slate-600">Brightens skin</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -right-10 bg-white rounded-2xl shadow-xl p-4 animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                    HA
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Hyaluronic Acid</div>
                    <div className="text-xs text-slate-600">Deep hydration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 text-center">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-ice-400 to-mint-400 border-2 border-white"></div>
                ))}
              </div>
              <span className="text-sm text-slate-600">10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-600">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-mint-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-slate-600">Dermatologist Tested</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Concerns Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-ice-600 uppercase tracking-wider">Targeted Solutions</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-slate-900">
              What's Your Skin Concern?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our Vitamin C formula addresses multiple skin concerns simultaneously
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '☀️', title: 'Dark Spots', desc: 'Fades hyperpigmentation' },
              { icon: '💧', title: 'Dryness', desc: 'Deep hydration boost' },
              { icon: '✨', title: 'Dullness', desc: 'Restores natural glow' },
              { icon: '🎯', title: 'Uneven Tone', desc: 'Balances complexion' },
            ].map((concern, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-ice-300 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-4">{concern.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{concern.title}</h3>
                <p className="text-slate-600">{concern.desc}</p>
                <div className="mt-4 text-ice-600 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Deep Dive with Tabs */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Product Image */}
            <div className="sticky top-24">
              <div className="relative bg-gradient-to-br from-slate-50 to-ice-50 rounded-3xl p-12">
                <img
                  src="/images/facewash in Circle.png"
                  alt="ICE CONE Product"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Tabbed Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
                Science Meets Nature
              </h2>

              {/* Tabs */}
              <div className="flex gap-2 mb-8 border-b border-slate-200">
                {[
                  { id: 'benefits', label: 'Benefits' },
                  { id: 'ingredients', label: 'Key Ingredients' },
                  { id: 'howto', label: 'How to Use' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 font-semibold transition-all ${activeTab === tab.id
                      ? 'text-ice-600 border-b-2 border-ice-600'
                      : 'text-slate-500 hover:text-slate-700'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === 'benefits' && (
                  <div className="space-y-6 animate-fade-in">
                    {[
                      { title: 'Brightens & Evens Skin Tone', desc: 'Vitamin C works to reduce dark spots, hyperpigmentation, and uneven skin tone for a radiant, glowing complexion.' },
                      { title: 'Deep Hydration', desc: 'Hyaluronic Acid attracts and retains moisture, keeping your skin plump, soft, and hydrated throughout the day.' },
                      { title: 'Balances Oil Production', desc: 'Niacinamide helps regulate sebum production, minimize pores, and maintain a healthy skin barrier.' },
                      { title: 'Gentle Yet Effective', desc: 'pH-balanced formula cleanses without stripping natural oils, suitable for all skin types including sensitive skin.' },
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-ice-500 to-mint-500 flex items-center justify-center text-white font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 mb-1">{benefit.title}</h3>
                          <p className="text-slate-600">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'ingredients' && (
                  <div className="space-y-6 animate-fade-in">
                    {[
                      { name: 'Vitamin C (15%)', benefit: 'Powerful antioxidant that brightens and protects', icon: 'C' },
                      { name: 'Niacinamide (5%)', benefit: 'Minimizes pores and balances oil production', icon: 'N' },
                      { name: 'Hyaluronic Acid (2%)', benefit: 'Deeply hydrates and plumps skin', icon: 'HA' },
                      { name: 'Aloe Vera Extract', benefit: 'Soothes and calms irritated skin', icon: '🌿' },
                    ].map((ingredient, idx) => (
                      <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-2xl">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-ice-500 to-mint-500 flex items-center justify-center text-white font-bold">
                          {ingredient.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 mb-1">{ingredient.name}</h3>
                          <p className="text-slate-600">{ingredient.benefit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'howto' && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="bg-ice-50 rounded-2xl p-6 mb-6">
                      <p className="text-slate-700 font-medium">For best results, use twice daily - morning and evening</p>
                    </div>
                    {[
                      { step: 1, title: 'Wet Your Face', desc: 'Start with lukewarm water to open pores' },
                      { step: 2, title: 'Apply Face Wash', desc: 'Take a small amount and create a gentle lather' },
                      { step: 3, title: 'Massage Gently', desc: 'Use circular motions for 30-60 seconds' },
                      { step: 4, title: 'Rinse Thoroughly', desc: 'Remove all product with cool water' },
                      { step: 5, title: 'Pat Dry', desc: 'Gently pat face dry with a clean towel' },
                    ].map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-ice-500 to-mint-500 flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-900 mb-1">{step.title}</h3>
                          <p className="text-slate-600">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-10">
                <Link
                  to="/shop"
                  className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-ice-600 to-mint-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Get Yours Now - 20% Off
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-ice-400 uppercase tracking-wider">Real Results</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              See The Transformation
            </h2>
            <p className="text-xl text-slate-300">
              Clinically proven results in just 2 weeks
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <img
              src="/images/beforeafter.png"
              alt="Before and After Results"
              className="w-full h-auto rounded-2xl"
            />
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-ice-400 mb-2">98%</div>
                <div className="text-slate-300">Noticed brighter skin</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-mint-400 mb-2">95%</div>
                <div className="text-slate-300">Felt more hydrated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-ice-400 mb-2">92%</div>
                <div className="text-slate-300">Saw reduced dark spots</div>
              </div>
            </div>
            <p className="text-center text-slate-400 mt-6 text-sm">
              *Based on a clinical study of 100 participants over 4 weeks
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-ice-600 uppercase tracking-wider">Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-slate-900">
              Loved by Thousands
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Priya Sharma', location: 'Mumbai', rating: 5, review: 'My skin has never looked better! The glow is real and it doesn\'t dry out my skin at all. I\'ve been using it for 3 weeks and my dark spots are visibly lighter.', image: '👩🏻' },
              { name: 'Rahul Mehta', location: 'Delhi', rating: 5, review: 'Best face wash I\'ve ever used! My dark spots are fading and my skin feels so fresh. Even my dermatologist noticed the improvement!', image: '👨🏽' },
              { name: 'Anjali Kapoor', location: 'Bangalore', rating: 5, review: 'Love the refreshing feel! It\'s gentle yet effective. My skin feels clean without being stripped. Highly recommend!', image: '👩🏾' },
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{review.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{review.image}</div>
                  <div>
                    <div className="font-bold text-slate-900">{review.name}</div>
                    <div className="text-sm text-slate-600">{review.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-ice-600 via-mint-600 to-ice-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Start Your Glow Journey Today
          </h2>
          <p className="text-2xl text-ice-100 mb-10">
            Limited time offer - Get 20% off your first purchase
          </p>
          <Link
            to="/shop"
            className="inline-block px-12 py-6 rounded-full bg-white text-ice-600 font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            Shop Now
          </Link>
          <p className="mt-6 text-ice-100">
            Free shipping on orders over ₹299 • 30-day money-back guarantee
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
