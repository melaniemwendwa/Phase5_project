import { useState } from "react";

export default function ReportForm() {
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    date: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // 🔹 Later, you’ll send this data to Flask backend (POST /reports)
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 font-jost">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-[#224266] mb-6">
          Report a Disaster
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Disaster Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Disaster Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#224266] focus:outline-none"
              required
            >
              <option value="">Select</option>
              <option value="Flood">Flood</option>
              <option value="Earthquake">Earthquake</option>
              <option value="Wildfire">Wildfire</option>
              <option value="Landslide">Landslide</option>
              <option value="Storm">Storm</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#224266] focus:outline-none"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#224266] focus:outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Describe the disaster..."
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#224266] focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <p className="text-sm text-gray-500 mb-2 font-medium">
              Upload Images
            </p>
            <p className="text-xs text-gray-400 mb-4">
              Drag and drop or click to upload images
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer bg-[#224266] text-white px-4 py-2 rounded hover:bg-[#1a3650] transition"
            >
              Upload
            </label>
            {formData.image && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {formData.image.name}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
            type="submit"
            className="bg-[#224266] text-white px-6 py-2 rounded hover:bg-[#1a3650] transition w-full md:w-auto"
          >
            Submit
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
