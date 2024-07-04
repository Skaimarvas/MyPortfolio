"use client";
import HackerBtn from "./HackerBtn";

function DownLoadResumeBtn() {
  const resumeUrl = "/resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Kaim_Arvas_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <HackerBtn label="Download Resume" onClick={handleDownload} />
    </div>
  );
}

export default DownLoadResumeBtn;
