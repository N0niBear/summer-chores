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
function mowYard(person, callback) {
    setTimeout(() => {
        console.log(`${person} mowed the yard.`);
        callback();
    }, 2000);
}
//2. name & callback -> log "Name finished using the weedeater" & call next (or log "Name fell asleep after mowing the yard")
function weedEat(person, callback) {
    setTimeout(() => {
        if (fellAsleep()) {
            console.log(`${person} fell asleep after mowing the yard.`);
        } else {
            console.log(`${person} finished using the weedeater.`);
            callback();
        }
    }, 1500);
}
//3. name & callback -> log "Name finished trimming the hedges" & call next (or log "Name fell asleep after weedeating the yard")
function trimHedges(person, callback) {
    setTimeout(() => {
        if (fellAsleep()) {
            console.log(`${person} fell asleep after weedeating the yard.`);
        } else {
            console.log(`${person} finished trimming the hedges.`);
            callback();
        }
    }, 1000);
}
//4. name & callback -> log "Name finished collecting the wood" & call next (or log "Name fell asleep after trimming the hedges")
function collectWood(person, callback) {
    setTimeout(() => {
        if (fellAsleep()) {
            console.log(`${person} fell asleep after trimming the hedges.`);
        } else {
            console.log(`${person} finished collecting the wood.`);
            callback();
        }
    }, 2500);
}
//5. name & callback -> log "Name finished watering the garden" & call next (or log "Name fell asleep after collecting the wood")
function waterGarden(person, callback) {
    setTimeout(() => {
        if (fellAsleep()) {
            console.log(`${person} fell asleep after collecting the wood.`);
        } else {
            console.log(`${person} finished watering the garden.`);
            callback();
        }
    }, 500);
}   
//6. doSummerChores name must be string literal, call mowYard (if all done log "Name finished all their chores")
function doSummerChores(person) {
    mowYard(person, () => {
        weedEat(person, () => {
            trimHedges(person, () => {
                collectWood(person, () => {
                    waterGarden(person, () => {
                        console.log(`${person} finished all their chores.`);
                    });
                });
            });
        });
    });
}

doSummerChores("Noni");
