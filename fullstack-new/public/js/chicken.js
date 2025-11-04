console.log("Hello Chicken Lovers");
const chickenDiv = document.getElementsByClassName("chickens")[0];
const loadingIcon = document.getElementById("loadingIcon");

fetch("/api/chickens/").then((response) => 
        {console.log(response);
        loadingIcon.style.transform = "rotate(180deg)";
        return response.json()}).then((response) =>
        {for (i in response) {
            console.log(response);
            const chicken = response[i];
            const curChicken = document.createElement("div");
            curChicken.className = 'chicken';
            chickenDiv.append(curChicken);
            curChicken.style.backgroundColor = chicken['color'];
            curChicken.innerHTML = '<p class="name">'+chicken['name']+'</p>'
        }
        loadingIcon.style.display = "none";
    });