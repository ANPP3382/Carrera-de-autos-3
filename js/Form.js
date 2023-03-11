class Form {
  constructor() {
    this.titleImg = createImg("./assets/title.png", "titulo del juego");
    this.input = createInput(""). attribute("placeholder", "Introduce tu nombre");
    this.playbutton = createButton("jugar");
    this.greetings = createElement("h2")
  }

  setElementPosition(){
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playbutton.position(width / 2 - 90, height / 2 - 20);
    this.greetings.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() { 
    this.titleImg.class("gameTitle"); 
    this.input.class("customInput"); 
    this.playButton.class("customButton");
    this.greeting.class("greeting"); 
  }

  handleMousePressed(){
    this.playButton.mousePressed(() => {
    this.input.hide();
    this.playButton.hide
    var message = `
    Hola ${this.input.value()}
    </br>Espera a que se una otro jugador...`;
    this.greeting.html(message)

    })

  }
  
  display(){
    this.setElementPosition();
    this.setElementsStyle();
    this.handleMousePressed();

  }

}
