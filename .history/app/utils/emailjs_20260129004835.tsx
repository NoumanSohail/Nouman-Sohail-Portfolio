import emailjs from "@emailjs/browser";

const sendEmail = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name,
        email,
        phone,
        message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    alert("Message sent successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }
};
