import React from "react";
import Wallet from "../../images/purse.png";
import Tasks from "../../images/list.png";
import Add from "../../images/add.png";
import Issues from "../../images/Issues.png";
import People from "../../images/people.png";
import Server from "../../images/server.png";
import Arrows from "../../images/arrow.png";
import Green from "../../images/caret green.png";
import Yellow from "../../images/caret yellow.png";
import Red from "../../images/caret red.png";

function DataAnalytics() {
  return (
    <div className="">
      <div className="flex flex-wrap w-full">
        <div className="w-full p-2 lg:w-1/3">
          <div className="w-full h-24 pb-1 bg-green-500 rounded-lg">
            <div className="flex items-center w-full h-full p-4 bg-white rounded-lg ">
              <div>
                <div className="w-16 h-16 bg-green-500 rounded-full">
                  <img src={Wallet} alt="wallet" />
                </div>
              </div>
              <div className="w-2/3 text-center ">
                <div className="text-sm text-gray-600">
                  <b>TOTAL REVENUE</b>
                </div>
                <div className="text-3xl">
                  <b>
                    $3249
                    <img src={Green} alt="meow" className="inline w-5" />
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="w-full h-24 pb-1 bg-yellow-600 rounded-lg">
            <div className="flex items-center w-full h-full p-4 bg-white rounded-lg ">
              <div>
                <div className="w-16 h-16 bg-yellow-600 rounded-full">
                  <img src={People} alt="hehe" />
                </div>
              </div>
              <div className="w-2/3 text-center ">
                <div className="text-sm text-gray-600">
                  <b>TOTAL USERS</b>
                </div>
                <div className="text-3xl text-center ">
                  <b>
                    249
                    <img src={Arrows} alt="hehe" className="inline w-5 mx-2" />
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="w-full h-24 pb-1 bg-yellow-500 rounded-lg">
            <div className="flex items-center w-full h-full p-4 bg-white rounded-lg ">
              <div>
                <div className="w-16 h-16 bg-yellow-500 rounded-full">
                  <img src={Add} alt="lol" />
                </div>
              </div>
              <div className="w-2/3 text-center ">
                <div className="text-sm text-gray-600">
                  <b>NEW USERS</b>
                </div>
                <div className="text-3xl">
                  <b>
                    2<img src={Yellow} alt="huehue" className="inline w-5" />
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="w-full h-24 pb-1 bg-blue-600 rounded-lg">
            <div className="flex items-center w-full h-full p-4 bg-white rounded-lg ">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full">
                  <img src={Server} alt="lol" />
                </div>
              </div>
              <div className="w-2/3 text-center ">
                <div className="text-sm text-gray-600">
                  <b>SERVER UPTIME</b>
                </div>
                <div className="text-3xl">
                  <b>152 days</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="w-full h-24 pb-1 bg-indigo-500 rounded-lg">
            <div className="flex items-center w-full h-full p-4 bg-white rounded-lg ">
              <div>
                <div className="w-16 h-16 bg-indigo-500 rounded-full">
                  <img src={Tasks} alt="task" />
                </div>
              </div>
              <div className="w-2/3 text-center ">
                <div className="text-sm text-gray-600">
                  <b>TO DO LIST</b>
                </div>
                <div className="text-3xl">
                  <b>7 tasks</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="w-full h-24 pb-1 bg-red-500 rounded-lg">
            <div className="flex items-center w-full h-full p-4 bg-white rounded-lg ">
              <div>
                <div className="w-16 h-16 bg-red-500 rounded-full">
                  <img src={Issues} alt="lol" />
                </div>
              </div>
              <div className="w-2/3 text-center ">
                <div className="text-sm text-gray-600">
                  <b>ISSUES</b>
                </div>
                <div className="text-3xl">
                  <b>
                    3<img src={Red} alt="red" className="inline w-5" />
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAnalytics;
