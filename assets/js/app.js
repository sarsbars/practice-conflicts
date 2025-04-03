'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const marquees = document.getElementsByTagName('marquee'); // Get all marquee tags

    // Convert the HTMLCollection to an array to use forEach
    const ducks = Array.from(marquees);

    ducks.forEach(duck => {
        const randomSpeed = Math.floor(Math.random() * 5) + 1;
        duck.setAttribute('scrollamount', randomSpeed);
    });
});