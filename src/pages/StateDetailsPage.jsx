import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStateDetails } from "../api/aedLawsApi";

export default function StateDetailsPage() {
  const { slug } = useParams();
  const [stateData, setStateData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getStateDetails(slug)
      .then(setStateData)
      .catch((err) => setError(err.message));
  }, [slug]);

  if (error) return <p className="p-6 text-red-600">{error}</p>;
  if (!stateData) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        ← Back to Map
      </button>

      <h1 className="text-3xl font-bold mb-4">{stateData.name}</h1>
      <p className="text-gray-700 mb-6">{stateData.lawSummary}</p>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p>{stateData.content}</p>
      </div>
    </div>
  );
}
