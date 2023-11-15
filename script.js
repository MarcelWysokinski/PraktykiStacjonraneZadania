let id = 1;
let h1 = null;
let h2 = null;
let div = null;

const genPicture = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => {
		if(!response.ok) {
			throw new Error("error")
		}
		return response.json()
	})
	.then((myJson) => {

        const json = myJson.filter((json) => json.id == id)[0];
        if((h1 == null) && (h2 == null) && (div == null)){
            h1 = document.createElement("h1");
            h2 = document.createElement("h2");
            div = document.createElement("div");
        }

        h2.textContent =  id;
        document.querySelector("body").appendChild(h2);

		h1.src = json["title"];
        document.querySelector('body').appendChild(h1);

        div.textContent = json["body"];
        document.querySelector("h1").appendChild(div);
	})
	.catch((error) => console.error('nie dziala ', error))
}

const next =()=>{
    id++;
    genPicture();
}
const prev=()=>{
    if(id == 1){
        console.log("nie mozna mniej");
        id == 1;
    }else{
        id--;
    }
    genPicture();
}