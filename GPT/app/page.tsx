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

              <h2 className="">Sun</h2>
            </div>

            <div className="space-y-2">
              <p className="info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatum!
              </p>
              <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, perferendis?</p>
              <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ratione?</p>
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
              <p className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ab?</p>
              <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, perferendis?</p>
              <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ratione?</p>
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
              <p className="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ab?</p>
              <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, perferendis?</p>
              <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ratione?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
