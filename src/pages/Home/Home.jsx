import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import DefultButton from "../../components/buttons/DefultButton";

const Home = () => {
  return (
    <div className="mt-50 px-4 flex flex-col items-center justify-center text-center">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full">
        <div className="text-gray-700 mb-6">
          <FaGraduationCap className="text-5xl text-gray-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Hello There</h1>
          <p className="text-gray-500 text-lg">
            Explore lessons, track your progress, and start your learning
            journey now.{" "}
          </p>
        </div>
        <DefultButton name={" Start Now"}/>
      </div>
    </div>
  );
};

export default Home;
