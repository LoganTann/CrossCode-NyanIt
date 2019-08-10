let volume = 0;

function doStuff(){
  ig.music.volume = volume;
  $("body").append('<p id="LOL">It works !!</p>');
  $("head").append('<link href="mods/CrossCode-NyanIt/main.css" rel="stylesheet"/>');
  console.log("test");
}

if (cc) doStuff();
else alert("Nyanit CrossCode Mod : you need to install CC Loader to run this mod !");