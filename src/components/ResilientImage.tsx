import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackTitle,
  className = 'w-full h-full object-cover',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full min-h-[260px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#EAEFE8] to-[#DCE3DA] text-[#35423A]"
      >
        <Building2 className="w-8 h-8 mb-3 text-[#14532D] opacity-80" aria-hidden="true" />
        <p className="font-serif text-base font-semibold text-[#111814]">{fallbackTitle}</p>
        <p className="text-xs text-[#4A554E] mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
