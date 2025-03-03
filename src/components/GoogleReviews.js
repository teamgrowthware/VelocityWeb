import { useEffect, useState } from "react";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const loadGoogleMapsScript = (callback) => {
    if (window.google && window.google.maps) {
      callback();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCD30xUi_KnwzDzqbp5Dil22N-84peQ89k&libraries=places`;
      script.async = true;
      script.onload = callback;
      script.onerror = () => setError("Failed to load Google Maps script.");
      document.body.appendChild(script);
    }
  };

  const fetchReviews = () => {
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    const request = {
      placeId: "ChIJiUOLJ8nqwjsRZIMjWdZC-IU", // Replace with your actual Place ID
      fields: ["reviews"],
    };

    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setReviews(place.reviews);
      } else {
        setError(`Failed to fetch reviews. Status: ${status}`);
      }
    });
  };

  useEffect(() => {
    loadGoogleMapsScript(fetchReviews);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Google Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <strong>{review.author_name}</strong> - ⭐{review.rating}
            <p>{review.text}</p>
          </div>
        ))
      ) : (
        <p>Loading reviews...</p>
      )}
    </div>
  );
};

export default GoogleReviews;
