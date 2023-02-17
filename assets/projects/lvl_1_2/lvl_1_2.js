const text = "<h1>Hello World</h1><h2>How are you?</h2>";
const containerHTML = document.getElementById("container");

containerHTML.innerHTML = "<p>start of the element</p>";
containerHTML.innerHTML += text;
containerHTML.innerHTML += "<p>end of the element</p>";
