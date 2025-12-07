// src/components/QuoteBanner.jsx
import { useEffect, useState } from "react";

function QuoteBanner() {
  const [quote, setQuote] = useState({
    text: "Learning is a journey. Start where you are and keep moving.",
    
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();

        setQuote({
          text: data.content,
        
        });
      } catch (err) {
        console.log("Quote API failed — using default quote");
      }
      setLoading(false);
    }

    fetchQuote();
  }, []);

  return (
    <div className={`quote-banner ${loading ? "loading" : ""}`}>
      <div className="quote-text">“{quote.text}”</div>
      <div className="quote-author">— {quote.author}</div>
    </div>
  );
}

export default QuoteBanner;
