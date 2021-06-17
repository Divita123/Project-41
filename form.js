class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("WHO GETS MORE");
        this.title.position(350, 150);
        this.title.style('font-size', '70px');
        this.title.style('color', 'black');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'yellow');
        this.button.position(620,450);
        this.button.style('width', '50');
        this.button.style('height', '35');
        this.button.style('background', 'yellow');
        this.reset.position(1160, 120);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            game.update(0);
            player.updateCount(0);  
            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
        });

    }
}