document.addEventListener("DOMContentLoaded", function(){
    var downloadBtn=document.getElementById("download_resume");

    downloadBtn.addEventListener("click", function(){
        var link=document.createElement("a");

        link.href="documents\\717821P159 SURIYA S.pdf";
        link.download="resume.pdf";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    });
});