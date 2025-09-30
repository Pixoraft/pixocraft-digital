interface FluidGlassHeroProps {
  text?: string;
  colorHex?: string;
}

export default function FluidGlassHero({ text = 'Pixocraft', colorHex = '#667eea' }: FluidGlassHeroProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Animated glass-like shapes using CSS */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main rotating shape */}
          <div 
            className="absolute w-48 h-48 md:w-96 md:h-96 rounded-full opacity-20 animate-spin-slow"
            style={{
              background: `radial-gradient(circle, ${colorHex}80, transparent 70%)`,
              filter: 'blur(40px)',
              animationDuration: '20s'
            }}
          />
          
          {/* Secondary pulsing shape */}
          <div 
            className="absolute w-64 h-64 md:w-[500px] md:h-[500px] rounded-full opacity-15 animate-pulse"
            style={{
              background: `radial-gradient(circle, ${colorHex}60, transparent 60%)`,
              filter: 'blur(60px)',
              animationDuration: '4s'
            }}
          />
          
          {/* Floating orbs */}
          <div 
            className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-30 animate-float"
            style={{
              background: 'radial-gradient(circle, #667eea80, transparent 70%)',
              filter: 'blur(30px)',
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-40 h-40 md:w-56 md:h-56 rounded-full opacity-25 animate-float"
            style={{
              background: 'radial-gradient(circle, #f093fb60, transparent 70%)',
              filter: 'blur(35px)',
              animationDelay: '2s',
              animationDuration: '8s'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-36 md:h-36 rounded-full opacity-30 animate-float"
            style={{
              background: 'radial-gradient(circle, #4facfe70, transparent 70%)',
              filter: 'blur(25px)',
              animationDelay: '1s',
              animationDuration: '6s'
            }}
          />
        </div>
      </div>
    </div>
  );
}
