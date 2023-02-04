function generateQR() {
    document.querySelector("#qr-image").style.display = "block";
    namevalue=document.querySelector('#text2');
    datevalue=document.querySelector('#text1');
    filenamevalue=document.querySelector('#text');

   // let one= namevalue.toString();
   // let two= datevalue.toString();
    //let three= filenamevalue.toString();


    let texttogen= namevalue + datevalue;
    
    let QRtext = "Received by: "+ namevalue.value + "  Date: " + datevalue.value + "  FileName: " + filenamevalue.value;
    if (QRtext.trim().length === 0) {
        document.querySelector("#qr-image .error").innerHTML = 'Please enter text';
        document.querySelector('#img').style.display = "none";
    } else {
        document.querySelector("#button1").style.display="none";
        document.querySelector("#text").style.display="none";
        document.querySelector("#text1").style.display="none";
        document.querySelector("#text2").style.display="none";
        
        document.querySelector('#img').style.display = "block";
        document.querySelector('#qr-image .error').innerHTML = "";
        document.querySelector('#img').src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" +QRtext;

        //document.querySelector('#text1').value.style.display="block";
        
    }
    
    
}
function printQR(){

    document.querySelector("#button2").style.display="none";

    window.print();  
    }
