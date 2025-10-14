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
function trimHedges(person) {
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
function collectWood(person) {
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
function waterGarden(person) {
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
async function doSummerChores(person) {
    try {
        await mowYard(person);
        await weedEat(person);
        await trimHedges(person);
        await collectWood(person);
        await waterGarden(person);
        console.log(`${person} finished all their chores.`);
    } catch (error) {
        console.log(error.message);
    }
}

doSummerChores("Noni");