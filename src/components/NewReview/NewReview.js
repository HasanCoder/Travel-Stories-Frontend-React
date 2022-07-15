import React from "react";
import Card from "../ui/card";

export default function NewReview() {
  return (
    <Card>
      <form className="form">
        <div>
          <label htmlFor="title">Give your review a title</label>
          <input type="text" required id="title" />
        </div>
        <div>
          <label htmlFor="place">Where did you go?</label>
          <input type="text" required id="place" />
        </div>
        <div>
          <label htmlFor="description">Describe how was your experience</label>
          <textarea required id="description" rows="10" />
        </div>
        <div>
          <label htmlFor="date">When did you go?</label>
          <input type="date" required id="date" />
        </div>
        <div>
          <label htmlFor="upload">Upload Images</label>
          <input type="file" required id="upload" />
        </div>
        <div className="HotelsSection">
          <h3>Hotels you have stayed</h3>
          <div>
            <label htmlFor="hotelname">Hotel Name</label>
            <input type="text" id="hotelname" />
          </div>
          <div>
            <label htmlFor="costofstay">Cost of stay per night</label>
            <input type="number" id="costofstay" />
          </div>
          <div>
            <label htmlFor="refhotel">Reference number</label>
            <input type="number" id="refnum" />
          </div>
          <button>Add Hotel</button>
        </div>
        <div className="TransportSection">
          <h3>Transportation Services you have availed</h3>
          <div>
            <label htmlFor="transport_name">
              Name of Transportation Service
            </label>
            <input type="text" id="transport_name" />
          </div>
          <div>
            <label htmlFor="reftransport">
              Reference number of transportation service (if any)
            </label>
            <input type="number" id="reftransport" />
          </div>
          <div>
            <label htmlFor="transport_cost">Cost</label>
            <input type="number" id="transport_cost" />
          </div>
          <button>Add Transportation</button>
        </div>
        <button>Submit Your Review</button>
      </form>
    </Card>
  );
}
