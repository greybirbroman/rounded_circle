import { useState, useEffect } from 'react';

interface IMobile {
    mobileResolution: number;
}

const useIsMobileResolution = ({ mobileResolution }: IMobile) => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= mobileResolution);
  };

  useEffect(() => {
    // При монтировании компонента проверяем разрешение и устанавливаем начальное значение
    checkIsMobile();

    const handleResize = () => {
      checkIsMobile();
    };

    window.addEventListener('resize', handleResize);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileResolution]);

  return isMobile;
};

export default useIsMobileResolution;
