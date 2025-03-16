"use client"

import { useEffect, useRef, useState } from 'react'

interface YouTubeBackgroundProps {
  videoId: string
}

export default function YouTubeBackground({ videoId }: YouTubeBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Function to dispatch status events
  const dispatchStatusEvent = (status: 'loading' | 'loaded' | 'error') => {
    const event = new CustomEvent('youtube-video-status', { 
      detail: { status }
    });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    // Dispatch initial loading event
    dispatchStatusEvent('loading');
    console.log('YouTube background loading...');
    
    const timer = setTimeout(() => {
      if (!hasError) {
        setIsLoaded(true);
        dispatchStatusEvent('loaded');
        console.log('YouTube background loaded');
      }
    }, 1500);
    
    return () => {
      clearTimeout(timer);
    };
  }, [hasError]);

  const handleIframeError = () => {
    console.error('Error loading YouTube iframe');
    setHasError(true);
    dispatchStatusEvent('error');
  };

  const handleIframeLoad = () => {
    console.log('YouTube iframe loaded');
    setIsLoaded(true);
    dispatchStatusEvent('loaded');
  };

  // Fallback gradient background style with static image
  const staticBackgroundStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/salon-interior.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  } as React.CSSProperties;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Static background shown until video loads or if error */}
      {(!isLoaded || hasError) && <div style={staticBackgroundStyle} />}
      
      {/* Dark overlay - reduced opacity for better video visibility */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* YouTube iframe container with direct embed approach */}
      <div 
        className="absolute inset-0 overflow-hidden z-5"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '300%',
            height: '300%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        >
          <iframe
            ref={iframeRef}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?si=7e_KKxpLe9e8aSrh&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 1s ease',
              border: 'none'
            }}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          ></iframe>
        </div>
      </div>
    </div>
  )
} 