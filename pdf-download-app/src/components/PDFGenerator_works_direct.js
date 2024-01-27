import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class PDFGenerator extends React.Component {
  generatePDF = () => {
    const input = document.getElementById('pdf-content');

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('download.pdf');
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.generatePDF}>Download PDF</button>
        <div id="pdf-content">
          {/* Your SVG content goes here */}
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
            <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
          </svg>
        </div>
      </div>
    );
  }
}

export default PDFGenerator;
