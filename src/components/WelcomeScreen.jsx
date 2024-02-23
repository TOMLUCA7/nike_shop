import { SignedOut, SignInButton, SignedIn } from "@clerk/clerk-react";
import React from "react";

const WelcomeScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-8">
        <SignInButton className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" />
        <p className="mt-4 text-sm text-gray-600">
          This content is public. Only signed out users can see this{" "}
          <span className="text-red-400">
            PRESS ON SIGN-IN BUTTON TO CONTINUE.
          </span>
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
