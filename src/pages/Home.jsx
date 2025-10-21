import React from 'react';
import drought from "../assets/drought2.webp";
import flood from "../assets/flood-1.jpeg";
import locust from "../assets/locust.jpg";
import landslide from "../assets/landslide.jpeg";

const disasterReports = [
  {
    id: 1,
    priority: 'High Priority',
    title: 'Drought in Turkana',
    description: 'A severe drought in Turkana has led to widespread crop failure and livestock deaths. Immediate food and water aid are needed.',
    image: drought,
    location: 'Turkana'
  },
  {
    id: 2,
    priority: 'High Priority',
    title: 'Flooding in Kisumu',
    description: 'Heavy rains have caused severe flooding in Kisumu, displacing many residents. Shelter and supplies are urgently required.',
    image: flood,
    location: 'Kisumu'
  },
  {
    id: 3,
    priority: 'Medium Priority',
    title: 'Locust Swarms in Mandera',
    description: 'Locust swarms are devastating agricultural gardens, threatening food security. Fast action on infestation is needed.',
    image: locust,
    location: 'Mandera'
  },
  {
    id: 4,
    priority: 'Low Priority',
    title: 'Landslide in Murang\'a',
    description: 'Minor landslide occurred near a main road due to heavy downpour. Cleanup efforts are underway, and the road is partially passable.',
    image: landslide,
    location: 'Muranga'
  },
];

const DisasterReportCard = ({ report }) => {
  let priorityColor = 'text-green-600';
  if (report.priority.includes('High')) {
    priorityColor = 'text-red-600';
  } else if (report.priority.includes('Medium')) {
    priorityColor = 'text-yellow-600';
  }

  return (
    <div className="flex flex-col md:flex-row items-start justify-between border-b border-gray-200 py-6">
      <div className="flex-1 max-w-2xl">
        <p className={`text-sm font-semibold ${priorityColor} mb-1`}>
          {report.priority}
        </p>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {report.title}
        </h3>
        <p className="text-gray-600 text-base">
          {report.description}
        </p>
      </div>

      <div className="mt-4 md:mt-0 md:ml-10 w-full md:w-auto">
        <img
          src={report.image}
          alt={report.title}
          className="rounded-lg shadow-md object-cover w-full h-48 md:w-64 md:h-40"
        />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Recent Disaster Reports in Kenya
        </h1>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          {disasterReports.map((report) => (
            <DisasterReportCard key={report.id} report={report} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;