import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class PDFGenerator extends React.Component {
  state = {
    contentReady: false
  };

  componentDidMount() {
    // Simulate content loading, you may replace it with your actual content loading logic
    setTimeout(() => {
      this.setState({ contentReady: true }, this.generateAndDownloadPDF);
    }, 1000);
  }

  generateAndDownloadPDF = () => {
    const input = document.getElementById('pdf-content');

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('download.pdf');
      });
  }

  render() {
    return (
      <div id="pdf-content" style={{ display: this.state.contentReady ? 'block' : 'none' }}>
        {/* Your React app content goes here */}
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
        </svg>
      </div>
    );
  }
}

export default PDFGenerator;
