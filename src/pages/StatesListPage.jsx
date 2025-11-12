import { useEffect, useState } from "react";
import { getStatesList } from "../api/aedLawsApi";
import USMap from "../components/USMap";
import { MapPin, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StatesListPage = () => {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const data = await getStatesList();
        setStates(data);
      } catch (error) {
        console.error("Error fetching states:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStates();
  }, []);

  // Filtered + prioritized list (searched first)
  const filteredStates = [...states].sort((a, b) => {
    if (!searchTerm) return a.name.localeCompare(b.name);
    const aMatch = a.name.toLowerCase().includes(searchTerm.toLowerCase());
    const bMatch = b.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    return a.name.localeCompare(b.name);
  });

  const handleSelect = (e) => {
    const slug = e.target.value;
    if (slug) navigate(`/aed-laws/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AED Laws by State
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Click on any state to view detailed information about AED requirements and regulations
          </p>

          {/* 🔍 Searchable dropdown */}
          <div className="relative inline-block w-full sm:w-80">
            <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm">
              <Search className="ml-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search state..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 rounded-r-lg focus:outline-none text-sm"
              />
            </div>

            {searchTerm && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredStates.length > 0 ? (
                  filteredStates.map((s) => (
                    <div
                      key={s.slug}
                      onClick={() => navigate(`/aed-laws/${s.slug}`)}
                      className="px-3 py-2 hover:bg-red-50 cursor-pointer text-sm text-gray-700"
                    >
                      {s.name}
                    </div>
                  ))
                ) : (
                  <div className="px-3 py-2 text-gray-500 text-sm">No results found</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Map */}
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : (
          <div className="w-full h-[800px]">
            <USMap />
          </div>
        )}

        {/* All States List */}
        {!loading && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              All AED State Laws
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 text-sm sm:text-base text-gray-800">
              {filteredStates.map((s) => (
                <div
                  key={s.slug}
                  onClick={() => navigate(`/aed-laws/${s.slug}`)}
                  className="flex items-center gap-2 hover:text-red-600 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-red-500" />
                  {s.name} AED laws
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Facts */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">50</div>
              <div className="text-gray-700">States with AED legislation</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-700">Lives saved annually by AEDs</div>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-700">Survival rate with immediate AED use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesListPage;
