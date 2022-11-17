function noofbricks(){
    let lofwall = 24;
    let hofwall = 8;
    let tofwall = 0.6;
    let volofwall = lofwall*hofwall*tofwall;
    let volofbricks = 24*12*8;
    let mortar = 15;
    let bricksrequired = (((100-mortar)/100)*volofwall*(100*100*100) / volofbricks);
    // console.log(bricksrequired);
    console.log(Math.ceil(bricksrequired));
}

noofbricks();