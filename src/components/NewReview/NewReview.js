import React from "react";
import Card from "../ui/card";

export default function NewReview() {
  return (
    <>
      <form className="m-10 flex place-content-center">
        <div className="w-1/2">
          <div className="m-5">
            <label htmlFor="title" className="block mb-3 text-lg">
              Give your review a title
            </label>
            <input
              type="text"
              required
              id="title"
              placeholder="Enter title for your review"
              className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder:text-md"
            />
          </div>
          <div className="m-5">
            <label htmlFor="place" className="block mb-3 text-lg">
              Where did you go?
            </label>
            <input
              type="text"
              required
              id="place"
              placeholder="Enter place(s) you have travelled"
              className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="m-5">
            <label htmlFor="description" className="block mb-3 text-lg">
              Describe how was your experience
            </label>
            <textarea
              required
              id="description"
              rows="10"
              placeholder="Please tell us about your experience of your journey"
              className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="m-5">
            <label htmlFor="date" className="block mb-3 text-lg">
              When did you start your journey?
            </label>
            <input
              type="date"
              required
              id="date"
              placeholder="Pick the date when you travelled"
              className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="m-5">
            <label htmlFor="upload" className="block mb-3 text-lg">
              Upload Images
            </label>
            <input
              type="file"
              required
              id="upload"
              className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
            />
          </div>
        </div>

        <div className="w-1/2">
          <div className="m-5 border border-gray-400 p-10 rounded-lg">
            <h3 className="text-2xl font-bold mb-5">Hotels you have stayed</h3>
            <div className="mb-5">
              <label htmlFor="hotelname" className="block mb-3 text-lg">
                Hotel Name
              </label>
              <input
                type="text"
                id="hotelname"
                placeholder="Name of Hotel"
                className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="costofstay" className="block mb-3 text-lg">
                Cost of stay per night
              </label>
              <input
                type="number"
                id="costofstay"
                placeholder="Rs"
                className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="refhotel" className="block mb-3 text-lg">
                Reference number
              </label>
              <input
                type="number"
                id="refnum"
                placeholder="+92"
                className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button className="bg-[#FFA902] hover:bg-[#fac251] text-black p-5 rounded-lg text-lg font-semibold right-1">
              Add Hotel
            </button>
          </div>
          <div className="m-5 border border-gray-400 p-10 rounded-lg ">
            <h3 className="text-2xl font-bold mb-5">
              Transportation Services you have availed
            </h3>
            <div className="mb-5">
              <label htmlFor="transport_name" className="block mb-3 text-lg">
                Name of Transportation Service
              </label>
              <input
                type="text"
                id="transport_name"
                placeholder="Enter name of the transportation service you availed"
                className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="reftransport" className="block mb-3 text-lg">
                Reference number of transportation service (if any)
              </label>
              <input
                type="number"
                id="reftransport"
                placeholder="+92"
                className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="transport_cost" className="block mb-3 text-lg">
                Cost
              </label>
              <input
                type="number"
                id="transport_cost"
                placeholder="Rs"
                className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button className=" bg-[#FFA902] hover:bg-[#fac251] text-black p-5 rounded-lg text-lg font-semibold mb-5">
              Add Transportation
            </button>
          </div>
          <button className="float-right mr-5 bg-[#FFA902] hover:bg-[#fac251] text-black p-5 rounded-lg text-2xl font-semibold">
            Submit Your Review
          </button>
        </div>
      </form>
    </>
  );
}
