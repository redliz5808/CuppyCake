import React from 'react'

function GBanner() {
    const mainDiv = document.createElement("div");
    mainDiv.innerHTML = (
    <div class="gryt-banner">
        <p>We are great!</p>
        <p>We are amazing devs!</p>
      </div>);
    return mainDiv;
  }
  
export default GBanner;