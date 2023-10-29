import React from "react";

const Card = (props: any) => {
  return (
    <div className="w-full bg-white border h-full border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="items-center self-center flex justify-center h-full max-h-[130px] border-b border-gray-500 py-3">
        <img className="rounded-t-lg h-full" src={props.image} alt="img" />
      </div>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>

        <div className="mb-3 font-normal flex text-gray-700 dark:text-gray-400">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default Card;
