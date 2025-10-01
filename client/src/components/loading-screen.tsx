import { useEffect, useState } from "react";
import loadingLogo from "@assets/image_1759294444044.png";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white bg-gradient-to-br from-blue-50 via-white to-indigo-100" data-testid="loading-screen">
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-blue-100/30 backdrop-blur-sm flex items-center justify-center animate-spin-slow">
          <div className="w-28 h-28 rounded-full bg-white p-2 flex items-center justify-center shadow-lg">
            <img 
              src={loadingLogo} 
              alt="Loading..." 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 animate-spin"></div>
      </div>
    </div>
  );
}
