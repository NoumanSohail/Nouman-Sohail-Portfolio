import { contactdata } from "@/app/data";

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
        <div className="flex flex-col items-center justify-center gap-10 w-full pb-5">
          {contactdata.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col border border-white/30 bg-white/5 backdrop-blur-xs p-5 gap-3 lg:w-[85%]
                         rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-300/40"
            >
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold text-center">
                  {contact.title}
                </p>
                <li className="text-gray-400 flex flex-col gap-2 ml-5">
                  {contact.content}
                </li>
                <li className="text-gray-400">
                  {contact.mail}
                </li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
