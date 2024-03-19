import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center ml-6">
          <img src="/images/schedule.png" alt="Icon 1" className="h-12 w-12 mr-4" />
          <p className="text-sm text-gray-600">Free onsite estimates with no hidden fees!</p>
        </div>
        
        <div className="flex items-center ml-6">
          <img src="/images/clock.png" alt="Icon 2" className="h-12 w-12 mr-4" />
          <p className="text-sm text-gray-600">We'll be there in time!</p>
        </div>
        
        <div className="flex items-center ml-6">
          <img src="/images/truck.png" alt="Icon 3" className="h-12 w-12 mr-4" />
          <p className="text-sm text-gray-600">We get things done!</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
