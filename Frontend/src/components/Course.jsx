import React, { useEffect, useRef, useState } from "react";

import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async (req, res) => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl ">
            We are delighted to have you{" "}
            <span className="text-pink-500">here!!!</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sed
            veniam veritatis provident ad. Quidem ipsum quas sequi aut vel
            officia asperiores nisi laudantium, iste est, totam, quo maiores.
            Odio.
          </p>
          <Link to="/">
            <button className="text-white mt-6 bg-pink-500 rounded-md hover:bg-pink-700 duration-300 px-4 py-2  ">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
