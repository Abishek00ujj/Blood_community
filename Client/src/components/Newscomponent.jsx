import React from 'react';

const Newscomponent = ({ title, description, img, url }) => {
  return (
    <div className="w-full h-auto flex max-xl:flex-col max-2xl:flex-col max-sm:flex-col max-md:flex-col max-lg:flex-col justify-center border border-black rounded-2xl m-4 p-4">
      <div className="w-[300px] h-[200px] overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover rounded-2xl" />
      </div>
      <div className="p-4">
        <div>
          <p className="font-bold">Title:</p>
          <p>{title}</p>
          <br />
        </div>
        <div>
          <p className="font-bold">Description:</p>
          <p>{description}</p>
        </div>
        <div className="w-full h-full">
          <div className="flex justify-end mt-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white w-auto p-5 m-5 rounded-2xl"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newscomponent;
