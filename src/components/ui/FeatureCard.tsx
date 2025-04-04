import { FaTwitter, FaYoutube, FaGoogle, FaFolderOpen, FaTags, FaSearch } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <div className="bg-purple-300 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-4 gradient-title">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1: Import Content */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex justify-center gap-4 text-3xl text-gray-500 mb-4">
            <FaTwitter />
            <FaYoutube />
            <FaGoogle />
          </div>
          <h3 className="text-xl font-semibold mb-2">Import Content Easily</h3>
          <p className="text-gray-600">Seamlessly capture tweets, videos, and docs all in one place.</p>
        </div>

        {/* Feature 2: Smart Organization */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex justify-center gap-4 text-3xl text-gray-500 mb-4">
            <FaFolderOpen />
            <FaTags />
          </div>
          <h3 className="text-xl font-semibold mb-2">Share Your Brain</h3>
          <p className="text-gray-600">Turn your saved content into shareable knowledge,let others benefit from your Brain</p>
        </div>

        {/* Feature 3: AI Search */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex justify-center text-3xl text-gray-500 mb-4">
            <FaSearch />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI-Powered Search(Coming Soon)</h3>
          <p className="text-gray-600">Find what you need instantly with intelligent embeddings.</p>
        </div>
      </div>
    </div>
  );
}
