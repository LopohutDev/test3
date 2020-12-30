import React from "react";

function HeaderImage() {
  return (
    <div className="flex mt-8">
      <div className="w-2/3 mr-1 bg-pink-500 rounded">
        <img
          className="w-full h-full rounded"
          src="https://cf.shopee.ph/file/ee23405983ad8407e4b5bbac05ca4f7e_xxhdpi"
          alt="lmao"
        />
      </div>
      <div className="flex flex-col w-1/3 mr-1">
        <div className="h-32 mb-1 rounded">
          <img
            className="w-full rounded"
            src="https://cf.shopee.ph/file/179a647c629d3e4089fd663db854564e_xhdpi"
            alt="hihi"
          />
        </div>
        <div className="rounded ">
          <img
            className="w-full h-32 mt-1 rounded"
            src="https://cf.shopee.ph/file/e64eaaf3060f5735cde45023705ed60c_xhdpi"
            alt="blank"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
