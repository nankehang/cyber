const sr = ScrollReveal ({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true

});
const lr = ScrollReveal ({
    distance:'65px',
    duration:1500,
    delay:450,
    reset:true

});

const sp = ScrollReveal ({
    distance:'65px',
    duration:1800,
    delay:450,
    reset:true

});

sr.reveal('.hero-text',{delay:200, origin:'top'})
sr.reveal('.hero-img',{delay:450, origin:'top'})
sr.reveal('.icons',{delay:500, origin:'left'})

lr.reveal('.page1',{delay:500, origin:'top'})
lr.reveal('.page2',{delay:500, origin:'top'})
lr.reveal('.page3',{delay:500, origin:'top'})


sp.reveal('.spn-contrainer',{delay:500, origin:'up'})
