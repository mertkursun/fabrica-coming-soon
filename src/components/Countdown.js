import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate, aboutText, logoSrc }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <h1>We Are Live!</h1>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      {/* Logo */}
        <div>
          <img src="logo-white.png" alt="Logo" className="logo" />
        </div>


      {/* Başlık */}
      <h1 class="title1">   Web Sitemiz <span class="id-color">Çok Yakında</span> Hizmetinizde...
</h1>


      {/* Sayaç */}
      <div className="countdown-container">
        <div className="countdown-item timer">
          <p>{timeLeft.days}</p>
          <span>Gün</span>
        </div>
        <div className="countdown-item timer">
          <p>{timeLeft.hours}</p>
          <span>Saat</span>
        </div>
        <div className="countdown-item timer">
          <p>{timeLeft.minutes}</p>
          <span>Dakika</span>
        </div>
        <div className="countdown-item timer">
          <p>{timeLeft.seconds}</p>
          <span>Saniye</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
