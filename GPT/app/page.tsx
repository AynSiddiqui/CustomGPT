import "./globals.css";
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-2 text-white h-screen">
        <h1 className="text-5xl font-bold mb-20">
          MyGPT
        </h1>
        <div className="flex flex-row space-x-2">

          <div>
            <div>
              <div className="flex flex-col items-center justify-center mb-3">
                {/* Sun */}
                <SunIcon className="h-8 w-8" />

                <h2 className="">Creative</h2>
              </div>

              <div className="space-y-2">
                <p className="info">
                  Explain me something
                </p>
                <p className="info">
                  What is the difference between a cat and a dog?
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-col items-center justify-center mb-3">
                {/* Cap */}
                <BoltIcon className="h-8 w-8" />

                <h2 className="">Capabilities</h2>
              </div>

              <div className="space-y-2">
                <p className="info">
                  All messages stored in Firebase
                </p>
                <p className="info">
                  Toast Notification to show Loading and Success
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-col items-center justify-center mb-3">
                {/* Lim */}
                <ExclamationTriangleIcon className="h-8 w-8" />

                <h2 className="">Limits</h2>
              </div>

              <div className="space-y-2">
                <p className="info">
                  Limited knowledge after 2021

                </p>
                <p className="info">May occasionally provide inaccurate information</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
