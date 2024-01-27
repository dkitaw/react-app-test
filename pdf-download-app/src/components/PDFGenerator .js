import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class PDFGenerator extends React.Component {
  generatePDF = () => {
    // Create SVG element programmatically
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "100");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "40");
    circle.setAttribute("stroke", "green");
    circle.setAttribute("stroke-width", "4");
    circle.setAttribute("fill", "yellow");

    svg.appendChild(circle);

    // Append SVG to temporary container
    const container = document.createElement("div");
    container.appendChild(svg);
    document.body.appendChild(container);

    // Generate PDF from SVG
    html2canvas(container)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('download.pdf');

        // Clean up: remove the temporary container
        document.body.removeChild(container);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.generatePDF}>Download PDF</button>
      </div>
    );
  }
}

export default PDFGenerator;
