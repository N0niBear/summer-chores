//1.Mowing the yard 2000
//2.Weedeating the edges of the house and fence line 1500
//3.Trimming the hedges 1000
//4.Collect fallen wood for summer night fires 2500
//5.Water the garden 500

//random time - 
function fellAsleep() {
    return Math.random() < 0.25;
}

//1. name & callback -> log "Name mowed the yard"
function mowYard(person) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${person} mowed the yard.`);
            resolve();
        }, 2000);
    });
}
    
//2. name & callback -> log "Name finished using the weedeater" & call next (or log "Name fell asleep after mowing the yard")
function weedEat(person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fellAsleep()) {
                reject(new Error(`${person} fell asleep after mowing the yard.`));
            } else {
                console.log(`${person} finished using the weedeater.`);
                resolve();
            }
        }, 1500);
    });
}

//3. name & callback -> log "Name finished trimming the hedges" & call next (or log "Name fell asleep after weedeating the yard")
function trimHedges(person, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fellAsleep()) {
                reject(new Error(`${person} fell asleep after weedeating the yard.`));
            } else {
                console.log(`${person} finished trimming the hedges.`);
                resolve();
            }
        }, 1000);
    });
}

//4. name & callback -> log "Name finished collecting the wood" & call next (or log "Name fell asleep after trimming the hedges")
function collectWood(person, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fellAsleep()) {
                reject(new Error(`${person} fell asleep after trimming the hedges.`));
            } else {
                console.log(`${person} finished collecting the wood.`);
                resolve();
            }
        }, 2500);
    });
}

//5. name & callback -> log "Name finished watering the garden" & call next (or log "Name fell asleep after collecting the wood")
function waterGarden(person, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fellAsleep()) {
                reject(new Error(`${person} fell asleep after collecting the wood.`));
            } else {
                console.log(`${person} finished watering the garden.`);
                resolve();
            }
        }, 500);
    });
}

//6. doSummerChores name must be string literal, call mowYard (if all done log "Name finished all their chores")
function doSummerChores(person) {
    return mowYard(person)
    .then(() => weedEat(person))
    .then(() => trimHedges(person))
    .then(() => collectWood(person))
    .then(() => waterGarden(person))
    .then(() => {
        console.log(`${person} finished all their chores.`);
    })
    .catch((err) => {
        console.log(err.message);
    });
}

doSummerChores("Noni");
