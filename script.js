// This is our constructor
let btn = document.getElementById("btn-console")

btn.addEventListener("click", herostory)

function herostory(){
  function Character(name, level, ability) {
    // Here, we're setting the properties of the character
    this.name = name;
    this.level = level;
    this.ability = ability;
  
    // This could be a special action the character does when created
    this.introduce = function() {
        console.log(`Hi, I'm ${this.name} at level ${this.level} with the ability to ${this.ability}!`);
    };
  }
  
  // Now, let's create some characters using our constructor
  const hero = new Character("Hero", 5, "fly");
  const villain = new Character("Villain", 8, "teleport");
  const intro = [hero.introduce, villain.introduce]

  // Let's make them introduce themselves
  return  intro
}
listo = herostory()
alert(listo)


document.getElementById("text").innerHTML = listo;


