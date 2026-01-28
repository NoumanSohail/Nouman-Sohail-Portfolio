"use client";

import { contactdata } from "@/app/data";
import Inputbox from "../ui/Inputbox";
import { Mail, User } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

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
            <div key={index} className="flex flex-col lg:w-[85%] gap-5">
              <div
                className="flex flex-col border border-white/30 bg-white/5 backdrop-blur-xs p-5 gap-3
                         rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-300/40"
              >
                <div className="flex flex-col gap-3">
                  <p className="text-lg font-semibold text-center">
                    {contact.title}
                  </p>
                  <p className="text-gray-400 flex flex-col gap-2 ml-5">
                    {contact.content}
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col border border-white/30 bg-white/5 backdrop-blur-xs p-5 gap-3
                         rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-300/40"
              >
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-[20%] lg:justify-between">
                  <div className="flex flex-col gap-3 w-full">
                    <p className="text-lg font-semibold">Contact Details</p>
                    <p className="font-semibold ml-5">
                      Mail : {contact.mail} <br />
                      Mobile : {contact.mobile}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                    <p className="text-lg font-semibold">Leave a Message</p>
                    <form
                      className="flex flex-col w-full h-full pl-5 gap-3 items-center text-white"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <Inputbox
                        icon={<User size={22} />}
                        value={form.name}
                        onChange={(v) => handleChange("name", v)}
                        placeholder="Enter your name"
                        className="rounded-xl bg-white/5 font-semibold"
                        rows={1}
                      />

                      <Inputbox
                        icon={<Mail size={20} />}
                        value={form.email}
                        onChange={(v) => handleChange("mail", v)}
                        placeholder="Enter your name"
                        className="rounded-xl bg-white/5 font-semibold"
                        rows={1}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
