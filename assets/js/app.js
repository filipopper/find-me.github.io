//copy link to clipboard
const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied text!: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

//preview twitch stream
document.getElementById("twitch-link").addEventListener("click", function(e) {
    e.preventDefault(); //prevent the default action
    var container = document.getElementById("twitch-iframe-container");
    if (container.style.display === "none") {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.twitch.tv/filipopper/";
      iframe.width = "100%";
      iframe.height = "200px";
      iframe.frameBorder = "0";
      container.appendChild(iframe);
      container.style.display = "block";
    } else {
      container.innerHTML = "";
      container.style.display = "none";
    }
  });