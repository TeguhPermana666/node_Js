const Tiger = require('./lib/tiger');
const Wolf = require('./lib/wolf');

const fighting = (tiger, wolf) =>{
    if(tiger.streght > wolf.streght){
        tiger.growl();
    }
    else if(wolf.streght > tiger.streght){
        wolf.growl();
    }
    else{
        console.log('Tiger and Wolf have same strength');
    }
}

for (let i=0; i<30; i++){
    const tiger = new Tiger();
    const wolf = new Wolf();
    fighting(tiger, wolf);
}
    