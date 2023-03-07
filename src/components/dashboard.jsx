import React from "react";
import Discover from "./discover";
import Button from "./ui/button";
import Card from "./ui/card";

function Dashboard() {
  return (
    <div>
      <header className=" shadow">
        <div className="flex justify-between items-center px-3  py-6 sm:px-6 lg:px-8">
          <div className=" flex items-center">
            <img
              class="w-16 h-20 rounded-full mx-6"
              src="/profile-pic.jpg"
              alt="Rounded avatar"
            />
            <div>
              <h3 className="text-white text-4xl font-bold">
                Hello,Bella &#x1f918;
              </h3>
              <p className="text-gray-400">A great day to get new NFT</p>
            </div>
          </div>
          <div className="flex">
         <Button>Mint NFT</Button> <div className="w-3"></div>
         <Button>Search NFT</Button>
          </div>
        </div>
      </header>
      <main>
        
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          
          <div className="px-4 py-6 sm:px-0 ">
            
           <Discover />
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
