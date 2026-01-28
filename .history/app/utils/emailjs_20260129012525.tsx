import emailjs from "@emailjs/browser";

export const sendEmail = async (
  e: React.FormEvent,
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  e.preventDefault();

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      {
        name,
        email,
        phone,
        message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
    );
    console.log("Sent")
    alert("Message sent successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }
};
