import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Rezume = ({ Resume }) => {
  const { Name, Location, CurrentPosition, Summary } = Resume.About;
  const { Email, Website, Phone } = Resume.Contact;
  const NameArray = Name.split(" ");
  //function for download as png
  const downloadAsPNG =()=>{
    const rezumeContainer = document.getElementById('rezume');
    html2canvas(rezumeContainer).then(function(canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "rezume.png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
  })
  }
  //function for download as jpeg
  const downloadAsJpeg =()=>{
    const rezumeContainer = document.getElementById('rezume');
    html2canvas(rezumeContainer).then(function(canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "rezume.jpeg";
      link.href = canvas.toDataURL("image/jpeg");
      link.target = '_blank';
      link.click();
  })
  }
  // function for download as pdf
  const downloadAsPDF = ()=>{
    const rezumeContainer = document.getElementById('rezume');
    var w = rezumeContainer.offsetWidth;
    var h = rezumeContainer.offsetHeight;
    html2canvas(rezumeContainer).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg",1);
      const pdf = new jsPDF('L','pt',[w,h]);
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("rezume.pdf");
    });
  }
  return (
    <>
    <div className="rezume-rezume" id="rezume">
      <div className="rezume-rezume-contact">
        <p>
          Email:{" "}
          <strong>
            <a href={"mailto:" + Email}>{Email}</a>
          </strong>
        </p>
        <p>
          Website:{" "}
          <strong>
            <a
              href={"http://" + Website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Website}
            </a>
          </strong>
        </p>
        <p>
          Phone: <strong>{Phone}</strong>
        </p>
      </div>
      <h2>
        <span>{NameArray.shift()}</span> {NameArray.join(" ")}
      </h2>
      <p className="location">{Location}</p>
      <p className="summary">
        <strong className="position">{CurrentPosition}</strong>
        {Summary}
      </p>
    </div>
    <div className="py-5 download-btns">
    <button className="btn btn-secondary m-1" id="downloadAsPngBtn" onClick={()=>{downloadAsPNG()}}>Download as png</button>
    <button className="btn btn-secondary m-1" id="downloadAsJpeg" onClick={()=>{downloadAsJpeg()}}>Download as Jpeg</button>
    <button className="btn btn-secondary m-1" id="downloadAsPDF" onClick={()=>{downloadAsPDF()}}>Download as PDF</button>
  </div>
  </>
  );
};
export default Rezume;
