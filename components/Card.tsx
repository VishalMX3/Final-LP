import React from "react";

const Card = (props: any) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="items-center self-center flex justify-center">
        <a href="#">
          <img
            className="rounded-t-lg w-32 py-7 "
            src={props.image}
            alt="img"
          />
        </a>
      </div>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
