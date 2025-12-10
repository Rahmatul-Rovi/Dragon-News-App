import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>

      {/* Button Group Like Your Example */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-md">

        <button className="btn join-item flex items-center gap-2">
          <FaFacebook size={18} />
          Facebook
        </button>

        <button className="btn join-item flex items-center gap-2">
          <FaTwitter size={18} />
          Twitter
        </button>

        <button className="btn join-item flex items-center gap-2">
          <FaInstagram size={18} />
          Instagram
        </button>

      </div>
    </div>
  );
};

export default FindUs;
