import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Brain, Share2 } from 'lucide-react';

const slides = [
  {
    title: "Track Health Metrics",
    description: "Monitor your vital signs and health parameters in real-time with our advanced tracking system.",
    icon: Activity,
    color: "text-blue-500",
  },
  {
    title: "Predict Heart Risk",
    description: "Advanced AI algorithms analyze your health data to predict potential heart risks early.",
    icon: Brain,
    color: "text-purple-500",
  },
  {
    title: "Share Data Securely",
    description: "Your health data is encrypted and securely shared via blockchain technology.",
    icon: Share2,
    color: "text-green-500",
  },
];

export function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => currentSlide < slides.length - 1 && setCurrentSlide(curr => curr + 1),
    onSwipedRight: () => currentSlide > 0 && setCurrentSlide(curr => curr - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" {...handlers}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="onboarding-slide"
        >
          <div className={`text-6xl ${slides[currentSlide].color} mb-8`}>
            {React.createElement(slides[currentSlide].icon, { size: 80 })}
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-lg text-gray-600 max-w-md text-center mb-12">
            {slides[currentSlide].description}
          </p>

          <div className="flex gap-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {currentSlide === slides.length - 1 ? (
            <button
              onClick={() => navigate('/login')}
              className="button-primary"
            >
              Get Started
            </button>
          ) : (
            <button
              onClick={() => setCurrentSlide(curr => curr + 1)}
              className="button-secondary"
            >
              Next
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}