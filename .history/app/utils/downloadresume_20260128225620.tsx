export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/resume/Mohammad_Nouman_Sohail_Resume.pdf";
  link.download = "Mohammad_Nouman_Sohail_Resume.pdf";
  document.body.appendChild(link);
  link.click();
};
