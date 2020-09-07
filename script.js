new Splide('.splide').mount();

new Splide('#splide', {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    focus: 'center',
    fixedWidth: '450px',
    arrows: 'slider',
    autoHeight: true,
}).mount();