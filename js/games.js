
import { Details } from "./details.js";
import { Ui } from "./uimodel.js";

export class Game {
    constructor() {
        this.getGames("mmorpg")


        document.querySelectorAll(".nav-item a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".nav-item  .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            });
        });


        this.ui = new Ui()
    }

    async getGames(categoryName) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8ae6233942msh7c53ae410640929p17b744jsn5a78b3374055',

                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {

            document.getElementById("spinner").classList.remove("d-none")
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`, options);
            const result = await response.json();



            this.ui.displayData(result);
            this.startEvent()

        } catch (error) {
            console.error(error);
        }
        finally {
            document.getElementById("spinner").classList.add("d-none")
        }
    }


    startEvent() {
        document.querySelectorAll(".box-game").forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                this.showDetails(id);
            });
        });
    }


    showDetails(idGame) {
        const details = new Details(idGame);
        document.getElementById("home").classList.add("d-none");
        document.getElementById("details").classList.remove("d-none");
    }
   


}




// <----------------------------------------------------------------- DARK MOOD---------------------------------------------------------------------------->

let mood = document.getElementById("mood")

if (localStorage.getItem("theme") != null) {
    const themeInfo = localStorage.getItem("theme");
    if (themeInfo === "light") {
        mood.classList.replace("fa-sun", "fa-moon");

    } else {
        mood.classList.replace("fa-moon", "fa-sun");
    }
    document.querySelector("html").setAttribute("data-theme", themeInfo)
}






mood.addEventListener("click", function (e) {

    if (mood.classList.contains("fa-sun")) {
        mood.classList.replace("fa-sun", "fa-moon")
        document.querySelector("html").setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light")
    } else {
        mood.classList.replace("fa-moon", "fa-sun")
        document.querySelector("html").setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
    }



})

// <-----------------------------------------------------------------END DARK MOOD---------------------------------------------------------------------------->