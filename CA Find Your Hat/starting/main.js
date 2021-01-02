const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
       this.field = field;
       this.locationX = 0;
       this.locationY = 0;
    }

    print(){
        this.field.forEach(element => console.log(element.join('')));
    }
    getInput(){
        const direction = prompt("In which direction would you like to move? Choose between R, L, U, D").toUpperCase()
        if(direction == "R"){
            this.locationX +=1;
        } else if(direction == "L"){
            this.locationX -=1;
        } else if(direction == "U"){
            this.locationY -=1;
        } else if(direction == "D"){
            this.locationY +=1;
        } 
    }
    playGame(){
        let loopOn = true;
        //let direction = "";
        while(loopOn){
            field.print();
            field.getInput();
            if(this.locationX < 0 || this.locationX >= this.field[0].length || this.locationY < 0 || this.locationY >= this.field.length){
                console.log("Please keep inside the field!");
                loopOn = false;
                break;
            }
            if(this.field[this.locationY][this.locationX] == hole){
                console.log("You fell into a hole!");
                loopOn = false;
                break;
            }else if (this.field[this.locationY][this.locationX] == hat){
                console.log("You found the hat!");
                loopOn = false;
                break;
            }else{this.field[this.locationY][this.locationX] = pathCharacter;}
            
        }
    }
    static generateField(height, width){
        var generatedField = [];
        for(let i =0; i<height; i++){
            generatedField.push([]);
            for(let j =0; j<width; j++){
                generatedField[i].push(fieldCharacter);
            }
            generatedField[i][Math.floor(Math.random() * width)] = hole;
        }
        
        
        let rdmHatH = Math.floor(Math.random() * height);
        let rdmHatW= Math.floor(Math.random() * width);
        if(rdmHatH == 0 && rdmHatW == 0){
            generatedField[rdmHatH][1] = hat;
        } else {
            generatedField[rdmHatH][rdmHatW] = hat;
        }
        
        generatedField[0][0] = pathCharacter;
        return generatedField;
    }


}

const generated = Field.generateField(4,5);
const field = new Field(generated);
field.playGame();
