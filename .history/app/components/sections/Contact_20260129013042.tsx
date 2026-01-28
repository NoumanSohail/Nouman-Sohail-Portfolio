"use client";

import { contactdata } from "@/app/utils/data";
import Inputbox from "../ui/Inputbox";
import { Mail, MessageCircle, Phone, User } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";
import Asteroid from "../ui/Asteroid";
import GlassCard from "../ui/GlassCard";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/utils/emailjs";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    console.log(form);
  };

  return (
    <section
      id="contact"
      className="relative w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white overflow-hidden"
    >
      {/* Asteroid */}
      <Asteroid />

      {/* Entire screen wraper */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 mt-20 xl:mt-30">
        {/* Header */}
        <div className="text-xl font-semibold tracking-widest text-center">
          Contact
        </div>

        {/* Entire Content */}
        <div className="flex flex-col items-center justify-center gap-10 w-full pb-5">
          {/* Content */}
          {contactdata.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col lg:w-[85%] gap-10 items-center"
            >
              {/* Main content */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <GlassCard className="flex flex-col gap-3">
                  <p className="text-lg font-semibold text-center">
                    {contact.title}
                  </p>
                  <p className="text-gray-400 flex flex-col gap-2 ml-5">
                    {contact.content}
                  </p>
                </GlassCard>
              </motion.div>

              {/* Contact and Message */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:w-[60%] lg:w-[50%]"
              >
                <GlassCard>
                  <div className="flex flex-col gap-3">
                    <p className="text-lg font-semibold">Contact Details</p>
                    <p className="font-semibold ml-5 flex flex-col gap-2 text-gray-300">
                      <span> Mail : {contact.mail} </span>
                      <span> Mobile : {contact.mobile} </span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-lg font-semibold">Leave a Message</p>
                    <form
                      className="flex flex-col w-full h-full px-5 gap-2 items-center text-gray-300"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <Inputbox
                        icon={<User size={24} />}
                        value={form.name}
                        onChange={(v) => handleChange("name", v)}
                        placeholder="Enter your name"
                        className="rounded-xl bg-white/5 font-semibold"
                        variant="text"
                      />

                      <Inputbox
                        icon={<Mail size={24} />}
                        value={form.email}
                        onChange={(v) => handleChange("email", v)}
                        placeholder="Enter your mail"
                        className="rounded-xl bg-white/5 font-semibold"
                        variant="email"
                      />

                      <Inputbox
                        icon={<Phone size={22} />}
                        value={form.phone}
                        onChange={(v) => handleChange("phone", v)}
                        placeholder="Enter your mobile number"
                        variant="phone"
                      />

                      <Inputbox
                        icon={<MessageCircle size={24} />}
                        value={form.message}
                        onChange={(v) => handleChange("message", v)}
                        placeholder="Type anything... "
                        className="rounded-xl bg-white/5 font-semibold"
                        rows={5}
                      />
                    </form>
                  </div>
                  <Button
                    title="Submit Message"
                    onClick={() =>
                      void sendEmail(
                        form.name,
                        form.email,
                        form.phone,
                        form.message,
                      )
                    }
                    className="bg-white/5 hover:shadow-md hover:shadow-purple-300/50 border border-white/20
                               p-3 rounded-full md:text-lg transition-all duration-300 hover:animate-pulse
                               backdrop-blur-xs active:scale-[0.8] active:opacity-1 "
                  />
                </GlassCard>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
