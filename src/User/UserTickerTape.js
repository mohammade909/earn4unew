import { useEffect, useRef } from "react";

const UserTickerTape = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear existing script before adding a new one
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    // Correct way to set JSON data as a string
    script.textContent = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
        { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    });

    containerRef.current.appendChild(script);

    return () => {
      // Cleanup existing widgets to prevent duplicates
      containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full">
      <div ref={containerRef} className="tradingview-widget-container__widget w-full"></div>
    </div>
  );
};

export default UserTickerTape;
