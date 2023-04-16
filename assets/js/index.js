var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var imageWidth = 1966;
var imageHeight = 3356;

var imageObj = new Image(imageWidth,imageHeight);

imageObj.onload = function()
{
    context.drawImage(imageObj, 0, 0);
}

function DownloadCanvasAsImage(){
    let imageName = "thnia.png";
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', imageName);
    let canvas = document.getElementById('myCanvas');
    canvas.toBlob(function(blob) {
      let url = URL.createObjectURL(blob);
      downloadLink.setAttribute('href', url);
      downloadLink.click();
    });
}

imageObj.src = "assets/images/Eid_final.jpg"; 

var downloadCardButton = document.getElementById('downloadCard');
downloadCardButton.addEventListener('click', function(e){
    // clear canvas from text and draw image
    context.clearRect(0, 0, imageWidth, imageHeight);
    context.drawImage(imageObj, 0, 0);

    var text = document.getElementById('name').value;

    // custom font
    context.textAlign = 'center';
    context.font = "80pt BrandoBold";

    // text color
    context.fillStyle = '#273476';

    // center and make text
    textWidth = (imageWidth - imageWidth / 2)
    textHeight = (imageHeight - 450)
    
    context.fillText(text, textWidth, textHeight);

    e.preventDefault();
    document.getElementById('name').value = "";

    // download the image
    DownloadCanvasAsImage();
});


