// Performance monitoring utilities
// Add this to your components to track performance

export const measurePerformance = (metricName, callback) => {
  if (typeof window === 'undefined') return callback();
  
  const startTime = performance.now();
  const result = callback();
  const endTime = performance.now();
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`⚡ ${metricName}: ${(endTime - startTime).toFixed(2)}ms`);
  }
  
  return result;
};

export const reportWebVitals = (metric) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vitals:', metric);
  }
  
  // You can send to analytics here
  // Example: sendToAnalytics(metric);
};

// Intersection Observer for lazy loading
export const createLazyObserver = (callback, options = {}) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01,
    ...options,
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce for scroll events
export const debounce = (func, wait = 100) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle for scroll events
export const throttle = (func, limit = 100) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Prefetch on hover for better navigation
export const prefetchOnHover = (href) => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};
