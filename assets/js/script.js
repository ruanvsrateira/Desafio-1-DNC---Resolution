const datas = document.querySelectorAll(".data-section div");
document.querySelector("img").style.animation = "floatAnimation 3s infinite";

for (const data of datas) {
  data.addEventListener("mouseover", () => {
    const title = data.querySelector("h1");

    data.style.cursor = "pointer";
    data.style.position = "relative";

    title.style.transition = "500ms";
    title.style.color = "#303030";
    title.style.fontSize = "50px";
  });
  data.addEventListener("mouseleave", () => {
    const title = data.querySelector("h1");

    title.style.color = "black";
    title.style.transition = "500ms";
    title.style.fontSize = "30px";
  });
}
