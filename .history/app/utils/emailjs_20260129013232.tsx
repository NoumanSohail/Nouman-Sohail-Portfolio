import emailjs from "@emailjs/browser";

export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
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
    console.log("Sent");
    alert("Message sent successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }
};
