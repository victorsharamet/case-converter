let toUpperCase = document.getElementById("upper-case")
toUpperCase.addEventListener('click', function (){
    document.querySelector("textarea").textContent =
    document.querySelector("textarea").textContent.toUpperCase()
})

let toLowerCase = document.getElementById("lower-case")
toLowerCase.addEventListener('click', function (){
    document.querySelector("textarea").textContent =
        document.querySelector("textarea").textContent.toLowerCase()
})

let toProperCase = document.getElementById("proper-case")
toProperCase.addEventListener("click", function () {
   document.querySelector("textarea").textContent =
       document.querySelector("textarea").textContent.toLowerCase()
    const properCaseWords = document.querySelector("textarea").textContent.split(" ")
    const allFirstToUpperCase = properCaseWords.map(properCaseWords => properCaseWords[0].toUpperCase() + properCaseWords.substring(1)).join(" ")
    document.querySelector("textarea").textContent = allFirstToUpperCase
})

let toSentenceCase = document.getElementById("sentence-case")
toSentenceCase.addEventListener("click", function () {
    document.querySelector("textarea").textContent =
        document.querySelector("textarea").textContent.toLowerCase()
    const sentenceCaseWords = document.querySelector("textarea").textContent.split(". ")
    const firstToUpperCase = sentenceCaseWords.map(sentenceCaseWords => sentenceCaseWords[0].toUpperCase() + sentenceCaseWords.substring(1)).join(". ")
    document.querySelector("textarea").textContent = firstToUpperCase
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("save-text-file").addEventListener("click", function(){

// Generate download of hello.txt file with some content
    let text = document.getElementById("case-converter").value;
    let filename = "text.txt";

    download(filename, text);
}, false);