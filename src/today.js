function createToday(){
    const today = document.createElement("div");
    today.classList.add("today-container");

    const todayHeading = document.createElement("h2");
    todayHeading.classList.add("head");
    todayHeading.textContent = "Today";

    today.appendChild(todayHeading);

    return today;

}

function loadToday(){
    const contents = document.querySelector(".contents");
    contents.textContent = "";
    contents.appendChild(createToday());

}

export default loadToday;