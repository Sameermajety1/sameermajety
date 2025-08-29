import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingParticle } from '../components/FloatingElements';
import { FaTimes, FaCamera, FaHeart, FaStar } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  width: 'small' | 'medium' | 'large';
  height: 'small' | 'medium' | 'large';
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/images/gallery/1.jpg",
      alt: "White Water Rafting Adventure",
      title: "White Water Rafting Adventure",
      category: "Travel & Adventure",
      width: 'small',
      height: 'small'
    },
    {
      id: 2,
      src: "/images/gallery/2.jpg",
      alt: "Night Skating Sprint",
      title: "Night Skating Sprint",
      category: "Sports & Lifestyle",
      width: 'small',
      height: 'small'
    },
    {
      id: 3,
      src: "/images/gallery/3.jpg",
      alt: "Academic Excellence Award",
      title: "Academic Excellence Award",
      category: "Achievements",
      width: 'large',
      height: 'large'
    },
    {
      id: 4,
      src: "/images/gallery/4.jpg",
      alt: "Moments of Joy",
      title: "Moments of Joy",
      category: "Lifestyle & Personal",
      width: 'large',
      height: 'large'
    },
    {
      id: 5,
      src: "/images/gallery/5.jpg",
      alt: "Unconditional Love with Jo & Bruno",
      title: "Unconditional Love with Jo & Bruno",
      category: "Lifestyle & Pets",
      width: 'small',
      height: 'small'
    },
    {
      id: 6,
      src: "/images/gallery/6.jpg",
      alt: "Research Presentation",
      title: "Research Presentation",
      category: "Academic & Achievements",
      width: 'small',
      height: 'small'
    },
    
    {
      id: 7,
      src: "/images/gallery/7.jpg",
      alt: "Clinical Research Poster Presentation",
      title: "Clinical Research Poster Presentation",
      category: "Academic & Achievements",
      width: 'small',
      height: 'small'
    },
    {
      id: 9,
      src: "/images/gallery/9.jpg",
      alt: "Soaring the Skies",
      title: "Soaring the Skies",
      category: "Travel & Adventure",
      width: 'small',
      height: 'small'
    },
    {
      id: 8,
      src: "/images/gallery/8.jpg",
      alt: "Morning at the Shore with Jo",
      title: "Morning at the Shore with Jo",
      category: "Lifestyle & Pets",
      width: 'large',
      height: 'large'
    },
    {
      id: 10,
      src: "/images/gallery/10.JPG",
      alt: "The Art of Public Speaking",
      title: "The Art of Public Speaking",
      category: "Professional & Academic",
      width: 'large',
      height: 'large'
    },
    {
      id: 11,
      src: "/images/gallery/11.jpg",
      alt: "Reaching New Heights",
      title: "Reaching New Heights",
      category: "Travel & Adventure",
      width: 'small',
      height: 'small'
    },
    
    {
      id: 13,
      src: "/images/gallery/13.jpeg",
      alt: "Strength in Balance",
      title: "Strength in Balance",
      category: "TFitness & Lifestyle",
      width: 'small',
      height: 'small'
    },
    
    {
      id: 14,
      src: "/images/gallery/14.jpg",
      alt: "Guiding Through Uncertainty",
      title: "Guiding Through Uncertainty",
      category: "Education & Seminars",
      width: 'small',
      height: 'small'
    },
    {
      id: 15,
      src: "/images/gallery/15.jpg",
      alt: "Union Member's Address",
      title: "Union Member's Address",
      category: "Public Speaking & Leadership",
      width: 'small',
      height: 'small'
    },
    {
      id: 12,
      src: "/images/gallery/12.JPG",
      alt: "Focused Minds at Work",
      title: "Focused Minds at Work",
      category: "Events & Portraits",
      width: 'large',
      height: 'large'
    },
    {
      id: 19,
      src: "/images/gallery/19.jpg",
      alt: "Dancing Spirits",
      title: "Dancing Spirits",
      category: "Events & Celebrations",
      width: 'large',
      height: 'large'
    },
    {
      id: 16,
      src: "/images/gallery/16.png",
      alt: "Leap of Faith",
      title: "Leap of Faith",
      category: "Adventure & Extreme Sports",
      width: 'small',
      height: 'small'
    },
    {
      id: 17,
      src: "/images/gallery/17.jpg",
      alt: "Power and Positivity",
      title: "Power and Positivity",
      category: "Fitness & Lifestyle",
      width: 'small',
      height: 'small'
    },
    {
      id: 18,
      src: "/images/gallery/18.jpg",
      alt: "Ready for Takeoff",
      title: "Ready for Takeoff",
      category: "Adventure & Outdoor Sports",
      width: 'large',
      height: 'large'
    },
    {
      id: 20,
      src: "/images/gallery/20.jpg",
      alt: "No Tobacco Awareness Drive",
      title: "No Tobacco Awareness Drive",
      category: "Social Initiative / Campaign",
      width: 'large',
      height: 'large'
    },
    
    
  ];

  const getTileSize = (width: string, height: string) => {
    const widthClasses = {
      small: 'col-span-1',
      medium: 'col-span-1',
      large: 'col-span-2'
    };
    
    const heightClasses = {
      small: 'row-span-1',
      medium: 'row-span-1',
      large: 'row-span-2'
    };

    return `${widthClasses[width as keyof typeof widthClasses]} ${heightClasses[height as keyof typeof heightClasses]}`;
  };

  const getAspectRatio = (width: string, height: string) => {
    // Simplified aspect ratios to prevent layout issues
    const aspectRatios = {
      'small-small': 'aspect-square',
      'small-medium': 'aspect-square',
      'small-large': 'aspect-square',
      'medium-small': 'aspect-square',
      'medium-medium': 'aspect-square',
      'medium-large': 'aspect-square',
      'large-small': 'aspect-[4/3]',
      'large-medium': 'aspect-[4/3]',
      'large-large': 'aspect-[4/3]'
    };
    
    const key = `${width}-${height}`;
    return aspectRatios[key as keyof typeof aspectRatios] || 'aspect-square';
  };

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative min-h-screen">
      {/* Floating Elements */}
      <FloatingParticle
        size={4}
        position={{ top: '15%', right: '10%' }}
        color="rgba(79, 173, 243, 0.6)"
        duration={7}
      />
      <FloatingParticle
        size={3}
        position={{ bottom: '25%', left: '15%' }}
        color="rgba(99, 102, 241, 0.7)"
        delay={1}
        duration={5}
      />
      <FloatingParticle
        size={5}
        position={{ top: '30%', left: '25%' }}
        color="rgba(220, 20, 60, 0.6)"
        delay={0.8}
        duration={4}
      />
      
      <div className="container mx-auto px-6 pt-8 md:pt-16 pb-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-secondary/10 to-accent/10 px-8 py-3 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              📸 My Life Through<span className="gradient-text"> Your Eyes</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Capturing moments from sports achievements, professional milestones, and personal adventures
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`${getTileSize(image.width, image.height)} relative overflow-hidden rounded-2xl cursor-pointer group ${getAspectRatio(image.width, image.height)}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => openModal(image)}
            >
              {/* Glassy Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 border border-gray/20 rounded-2xl" />
              
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <FaCamera className="text-white/80 text-sm" />
                  <span className="text-white/80 text-xs font-medium">{image.category}</span>
                </div>
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
              </div>
              
              {/* Hover Effects */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-[90vw] max-w-5xl h-[80vh] bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden shadow-2xl dark:from-primary/95 dark:to-primary/95 dark:border-gray"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-200 hover:scale-110 dark:bg-light/20 dark:hover:bg-light/30"
              >
                <FaTimes className="text-white text-xl" />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section - Fixed Size */}
                <div className="lg:w-[60%] h-[50%] lg:h-full relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>

                {/* Content Section - Fixed Size */}
                <div className="lg:w-[40%] h-[50%] lg:h-full p-6 lg:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-white/20 overflow-y-auto dark:from-primary/10 dark:to-primary/5 dark:border-gray/20">
                  <div className="h-full flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-secondary/20 backdrop-blur-sm rounded-full p-3">
                        <FaCamera className="text-secondary text-xl" />
                      </div>
                      <span className="text-secondary font-bold text-lg">{selectedImage.category}</span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">{selectedImage.title}</h2>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <FaStar className="text-yellow-400 text-base" />
                        <span className="text-white text-base font-medium">Featured</span>
                      </div>
                      <div className="flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <FaHeart className="text-red-400 text-base" />
                        <span className="text-white text-base font-medium">Loved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
