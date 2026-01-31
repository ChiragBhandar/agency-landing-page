'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * Optimized Image Component with loading states and blur placeholder
 * Automatically handles loading states for better UX
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-400 text-sm">
          Failed to load image
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={85}
          loading={priority ? 'eager' : 'lazy'}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`
            duration-700 ease-in-out
            ${isLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'}
          `}
          {...props}
        />
      )}
    </div>
  );
}

// Shimmer effect for loading
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#1f2937" offset="20%" />
      <stop stop-color="#374151" offset="50%" />
      <stop stop-color="#1f2937" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#1f2937" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
