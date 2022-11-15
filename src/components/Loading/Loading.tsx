import React from "react";
export default function Loading() {
  return (
    <div className=" h-screen w-screen bg-slate-900 flex items-center justify-center overflow-auto">
      <div>
        <div className=" flex items-center justify-center">
          <div className="">
            <div className=" relative  overflow-hidden">
              <div className="animate-pulse  top-1/2 left-4  absolute bg-blue-500 h-8 w-8 rounded-full blur-sm"></div>
              <div className=" top-3 right-3  absolute bg-blue-50 h-7 w-7 rounded-full blur-sm"></div>
              <div
                className="  backdrop-blur flex items-center justify-center h-20 w-20 text-4xl  uppercase font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-blue-600/5
                  to-blue-800/30"
              >
                <span className=" text-white/60 ">t</span>
              </div>
            </div>
            <div
              className="animate-pulse h-8 w-20 rounded-full bg-gradient-to-t from-blue-500/20
                  to-blue-700/80  blur-xl"
            ></div>
          </div>
          <div className="ml-4">
            <div className=" relative  overflow-hidden">
              <div className="animate-pulse  top-1/2 left-4  absolute bg-red-500 h-8 w-8 rounded-full blur-sm"></div>
              <div className=" top-3 right-3  absolute bg-red-50 h-7 w-7 rounded-full blur-sm"></div>
              <div
                className="  backdrop-blur flex items-center justify-center h-20 w-20 text-4xl  uppercase font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-red-600/5
                  to-red-800/30"
              >
                <span className=" text-white/60 ">a</span>
              </div>
            </div>
            <div
              className="animate-pulse h-8 w-20 rounded-full bg-gradient-to-t from-red-500/20
                  to-red-700/80  blur-xl"
            ></div>
          </div>
          <div className="ml-4">
            <div className=" relative  overflow-hidden">
              <div className="animate-pulse  top-1/2 left-4  absolute bg-green-500 h-8 w-8 rounded-full blur-sm"></div>
              <div className=" top-3 right-3  absolute bg-green-50 h-7 w-7 rounded-full blur-sm"></div>
              <div
                className="  backdrop-blur flex items-center justify-center h-20 w-20 text-4xl  uppercase font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-green-600/5
                  to-green-800/30"
              >
                <span className=" text-white/60 ">n</span>
              </div>
            </div>
            <div
              className="animate-pulse h-8 w-20 rounded-full bg-gradient-to-t from-green-500/20
                  to-green-700/80  blur-xl"
            ></div>
          </div>

          <div className="ml-4">
            <div className=" relative  overflow-hidden">
              <div className="animate-pulse  top-1/2 left-4  absolute bg-purple-500 h-8 w-8 rounded-full blur-sm"></div>
              <div className=" top-3 right-3  absolute bg-purple-50 h-7 w-7 rounded-full blur-sm"></div>
              <div
                className="  backdrop-blur flex items-center justify-center h-20 w-20 text-4xl  uppercase font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-purple-600/5
                  to-purple-800/30"
              >
                <span className=" text-white/60 ">i</span>
              </div>
            </div>
            <div
              className="animate-pulse h-8 w-20 rounded-full bg-gradient-to-t from-purple-500/20
                  to-purple-700/80  blur-xl"
            ></div>
          </div>
          <div className="mx-4">
            <div className=" relative  overflow-hidden">
              <div className="animate-pulse  top-1/2 left-4  absolute bg-orange-500 h-8 w-8 rounded-full blur-sm"></div>
              <div className=" top-3 right-3  absolute bg-orange-50 h-7 w-7 rounded-full blur-sm"></div>
              <div
                className="  backdrop-blur flex items-center justify-center h-20 w-20 text-4xl  uppercase font-bold text-center  transition duration-200 rounded-full  bg-gradient-to-t from-orange-600/5
                  to-orange-800/30"
              >
                <span className=" text-white/60 ">m</span>
              </div>
            </div>
            <div
              className="animate-pulse h-8 w-20 rounded-full bg-gradient-to-t from-orange-500/20
                  to-orange-700/80  blur-xl"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
