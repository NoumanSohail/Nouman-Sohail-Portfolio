import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white overflow-hidden"
    >
      {/* Entire screen wraper */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 mt-20 xl:mt-30">
        {/* Header */}
        <div className="text-xl font-semibold tracking-widest text-center">
          Contact
        </div>

        {/* Entire Content */}
        <div className="flex flex-col items-center justify-center gap-10 w-full pb-5"></div>
      </div>
    </section>
  );
};

export default Contact;
