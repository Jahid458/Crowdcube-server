import Lottie from "lottie-react";
import successAnimation from "../assets/sucess.json";

const SuccessStories = () => {
  return (
    <div className="p-5 rounded-2xl lg:p-0">
      {/* Add padding to prevent overlap with sticky navbar */}
      <div className="pt-20 px-6 lg:px-20 mb-5 mt-5">
        <h2 className="lg:text-4xl text-2xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
          Inspiring <span className="text-orange-600 dark:text-orange-400">Success Stories</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Ensure Lottie container does not overflow */}
          <div className="lg:w-1/2 w-full relative">
            <Lottie
              animationData={successAnimation}
              loop={true}
              className="max-h-80 mx-auto z-0" // Ensure Lottie has lower z-index
            />
          </div>

          <div className="lg:w-1/2 w-full space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Discover how CrowdCube has transformed ideas into reality. These
              stories showcase the power of community and the impact of collective
              support.
            </p>

            <div className="grid gap-6">
              <StoryCard
                title="Tech Startup Breakthrough"
                description="A group of developers turned their app idea into a reality, raising $200,000 in just 30 days."
                tag="Startup"
              />
              <StoryCard
                title="Medical Miracle"
                description="With the help of donors, a family raised funds for life-saving surgery for their child."
                tag="Health"
              />
              <StoryCard
                title="Creative Masterpiece"
                description="A filmmaker funded their passion project and premiered it at an international festival."
                tag="Creative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const StoryCard = ({ title, description, tag }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h4>
    <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    <span className="inline-block mt-4 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 py-1 px-3 rounded-full">
      {tag}
    </span>
  </div>
);

export default SuccessStories;
