
import { Ui } from "./uimodel.js";

export class Details{
    constructor(id){
        this.ui = new Ui()
        document.getElementById("close").addEventListener("click", () => {
            document.getElementById("home").classList.remove("d-none");
            document.getElementById("details").classList.add("d-none");
         });
        this.getDetails(id)
    }

   async getDetails(idGame){
        const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '8ae6233942msh7c53ae410640929p17b744jsn5a78b3374055',
                        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                };
            
                try {
                    document.getElementById("spinner").classList.remove("d-none")
                    const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`, options);
                  
                    const result = await response.json();
            
                 
                    this.ui.displayDetails(result)
                  
            
                } catch (error) {
                    console.error(error);
                }
                finally{
                    document.getElementById("spinner").classList.add("d-none")
                }

    }
}