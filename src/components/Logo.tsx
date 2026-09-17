import logoMark from '../assets/logo.png';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export default function Logo({ size = 48, className = '', showText = true, variant = 'dark' }: LogoProps) {
  const textColor = variant === 'dark' ? 'text-dark' : 'text-white';
  const accentColor = 'text-primary';

  // Source artwork aspect ratio (width / height) so the mark scales without distortion.
  const aspectRatio = 608 / 700;
  const width = Math.round(size * aspectRatio);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logoMark}
        alt="Step-Up Energy Solutions logo"
        width={width}
        height={size}
        style={{ width, height: size }}
        className="flex-shrink-0 object-contain"
        loading="eager"
        decoding="async"
      />
      {showText && (
        <div className="flex flex-col">
          <span className={`font-heading text-lg md:text-xl font-bold leading-tight tracking-wide ${textColor}`}>
            STEP-UP ENERGY
          </span>
          <span className={`font-heading text-xs md:text-sm font-medium tracking-widest ${accentColor} uppercase`}>
            Solutions
          </span>
        </div>
      )}
    </div>
  );
}
