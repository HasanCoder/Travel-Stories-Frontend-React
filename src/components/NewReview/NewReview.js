import React, { useRef, useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Stack } from "@mui/material";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { v4 } from "uuid";

const labels = {
  1: "Terrible",
  2: "Poor",
  3: "Average",
  4: "Good",
  5: "Excellent",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function NewReview(props) {
  const [Ratingvalue, setRatingValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const [imagefiles, setImagefiles] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const titleInputRef = useRef();
  const placeInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateInputRef = useRef();
  const imageInputRef = useRef();
  const hotelNameInputRef = useRef();
  const hotelCostInputRef = useRef();
  const hotelRefInputRef = useRef();
  const transportNameInputRef = useRef();
  const transportCostInputRef = useRef();
  const transportRefInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredPlace = placeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredhotelName = hotelNameInputRef.current.value;
    const enteredhotelCost = hotelCostInputRef.current.value;
    const enteredhotelRef = hotelRefInputRef.current.value;
    const enteredTransportName = transportNameInputRef.current.value;
    const enteredTransportRef = transportRefInputRef.current.value;
    const enteredTransportCost = transportCostInputRef.current.value;

    const ReviewData = {
      title: enteredTitle,
      place: enteredPlace,
      rating: Ratingvalue,
      description: enteredDescription,
      date: enteredDate,
      image: imageUrls,
      hotelName: enteredhotelName,
      hotelCost: enteredhotelCost,
      hotelRef: enteredhotelRef,
      transportName: enteredTransportName,
      transportRef: enteredTransportRef,
      transportCost: enteredTransportCost,
    };

    // console.log(ReviewData);
    // console.log(imageUrls);
    props.onAddReview(ReviewData);
  }
  const fileSelectHandler = (event) => {
    setImagefiles(event.target.files[0]);
  };
  const imagesListRef = ref(storage, "images/");
  const fileUploadHandler = (event) => {
    if (imagefiles == null) return;
    const imageRef = ref(storage, `images/${imagefiles.name + v4()}`);
    uploadBytes(imageRef, imagefiles).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   listAll(imagesListRef).then((listResults) => {
  //     const promises = listResults.items.map((item) => {
  //       return item.delete();
  //     });
  //     Promise.all(promises);
  //   });
  // }, []);

  // const getRatingValue = (enteredRating) => {
  //   ReviewData = {
  //     ...ReviewData,
  //     rating: enteredRating,
  //   };
  //   console.log(ReviewData);
  // };
  return (
    <>
      <form className="m-10 flex place-content-center" onSubmit={submitHandler}>
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
              ref={titleInputRef}
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
              placeholder="Enter the place you have travelled"
              className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              ref={placeInputRef}
            />
          </div>
          <div className="m-5">
            <label className="block mb-3 text-lg">
              <span>Rate Your Experience</span>
              <span>(required)</span>
            </label>
            <Box
              sx={{
                width: 400,
                height: 50,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Stack spacing={2}>
                <Rating
                  name="hover-feedback"
                  value={Ratingvalue}
                  precision={1}
                  size="large"
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  icon={<StarIcon fontSize="large" />}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="large" />
                  }
                />
              </Stack>
              {Ratingvalue !== null && (
                <Box sx={{ ml: 2 }} className="text-lg">
                  {labels[hover !== -1 ? hover : Ratingvalue]}
                </Box>
              )}
            </Box>
          </div>
          <div className="m-5">
            <label htmlFor="description" className="block mb-3 text-lg">
              Describe how was your experience
            </label>
            <textarea
              required
              id="description"
              rows="10"
              placeholder="Please tell us about your experience of your journey: describe the place or activity, recommendations for travellers?"
              className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              ref={descriptionInputRef}
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
              ref={dateInputRef}
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
              ref={imageInputRef}
              onChange={fileSelectHandler}
            />
            <button
              type="button"
              onClick={fileUploadHandler}
              className="mt-3 bg-violet-50 text-violet-700 font-semibold text-md rounded-full py-2 px-4 hover:bg-violet-100"
            >
              Upload
            </button>
          </div>
          {imageUrls.map((url) => {
            return <img src={url} className="w-1/5  m-10" />;
          })}
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
                ref={hotelNameInputRef}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="costofstay" className="block mb-3 text-lg">
                Cost of stay per night
              </label>
              <input
                type="text"
                id="costofstay"
                placeholder="Rs"
                className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                ref={hotelCostInputRef}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="refhotel" className="block mb-3 text-lg">
                Reference number
              </label>
              <input
                type="text"
                id="refnum"
                placeholder="+92"
                className="w-[70%] border border-gray-400 px-3 py-2 rounded-lg shadow-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                ref={hotelRefInputRef}
              />
            </div>
            {/* <button className="bg-[#FFA902] hover:bg-[#fac251] text-black p-5 rounded-lg text-lg font-semibold right-1">
              Add Hotel
            </button> */}
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
                ref={transportNameInputRef}
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
                ref={transportRefInputRef}
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
                ref={transportCostInputRef}
              />
            </div>
            {/* <button className=" bg-[#FFA902] hover:bg-[#fac251] text-black p-5 rounded-lg text-lg font-semibold mb-5">
              Add Transportation
            </button> */}
          </div>
          <button
            type="Submit"
            className="float-right mr-5 bg-[#FFA902] hover:bg-[#fac251] text-black p-5 rounded-lg text-2xl font-semibold"
          >
            Submit Your Review
          </button>
        </div>
      </form>
    </>
  );
}
