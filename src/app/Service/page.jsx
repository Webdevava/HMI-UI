import React from "react";

const Service = () => {
  // Example service details
  const serviceDetails = {
    serviceCenter: "Water Treatment Plant Service Center",
    address: "123 Service St, Cityville, Country",
    contactEmail: "service@example.com",
    contactPhone: "+1 (123) 456-7890",
    workingHours: "Monday - Friday: 9:00 AM - 5:00 PM",
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Service Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">
          {serviceDetails.serviceCenter}
        </h2>
        <p className="mb-2">{serviceDetails.address}</p>
        <p className="mb-2">Email: {serviceDetails.contactEmail}</p>
        <p className="mb-2">Phone: {serviceDetails.contactPhone}</p>
        <p>{serviceDetails.workingHours}</p>
      </div>
    </div>
  );
};

export default Service;
