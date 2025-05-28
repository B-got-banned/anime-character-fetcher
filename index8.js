

async function fetchData(){
  try{
    const charName = document.getElementById("charName").value.toLowerCase();
    const response = await fetch(`https://api.jikan.moe/v4/characters?q=${charName}`);
    const ehh = new Audio("sounds/wrong.mp3");
    const ding = new Audio("sounds/correct-choice.mp3");
    const errorMsg = document.getElementById("errorMsg");

    const data = await response.json();
    if(!response.ok || !data.data || data.data.length === 0){
      ehh.play();
      const errorMsg = document.getElementById("errorMsg");
      errorMsg.textContent = `Character not found :(`;
      console.log("Character not found :(");
      const charImage = document.getElementById("charImage");
      charImage.src = "";
      charImage.alt = "";
      charImage.classList.add("imgDisplay");
      return;
    };
    errorMsg.textContent = ``;
    const charImage = document.getElementById("charImage");
    const image = data.data[0].images.jpg.image_url;
    const alt = data.data[0].name;


    charImage.src = image;
    charImage.alt = alt;
    ding.play();
    charImage.classList.remove("imgDisplay");
  }
  catch(error){
    console.error(error);
    const ehh = new Audio("sounds/wrong.mp3");
    ehh.play();
    const charImage = document.getElementById("charImage");
    charImage.src = "";
    charImage.alt = "";
    charImage.classList.add("imgDisplay");
  }
}