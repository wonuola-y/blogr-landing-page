const hamburger = document.getElementsByClassName("ham")[0]
const nav = document.getElementsByClassName("the-nav-container")[0]
const close = document.getElementsByClassName('close-ham') [0]
const collapse = document.getElementsByClassName('arrow-1') [0]
const collapseTwo = document.getElementsByClassName('arrow-2') [0]
const collapseThree = document.getElementsByClassName('arrow-3') [0]

const dropdown = document.getElementsByClassName('dropdown') [0]
const dropdownTwo = document.getElementsByClassName('dropdown-two') [0]
const dropdownThree = document.getElementsByClassName('dropdown-three') [0]
const drop = document.getElementsByClassName('dropped')[0]
const dropTwo = document.getElementsByClassName('dropped-2')[0]
const dropThree = document.getElementsByClassName('dropped-3')[0]

// the hamburger
hamburger.addEventListener('click', ()=>{
   //Animate Links
    nav.classList.toggle("active");
    console.log('hey');
    hamburger.style.display = 'none';
    close.style.display = 'block';

});

// closing the hamburger
close.addEventListener('click', ()=>{
    close.style.display = 'none';
    nav.classList.remove('active');
    console.log('hii');
    hamburger.style.display = 'block';
});

// to show contents of the nav bar
drop.addEventListener('click', ()=>{
    drop.style.color = 'rgba(42, 51, 118, 0.84)';
    dropdown.style.display = 'block';
    collapse.style.transition = '1s';
    collapse.style.transform = 'rotate(180deg)';
    console.log('hmmm')
});

dropTwo.addEventListener('click', ()=>{
    dropTwo.style.color = 'rgba(42, 51, 118, 0.84)';
    dropdownTwo.style.display = 'block';
    collapseTwo.style.transition = '1s';
    collapseTwo.style.transform = 'rotate(180deg)';
    console.log('hmmm2')
});

dropThree.addEventListener('click', ()=>{
    dropThree.style.color = 'rgba(42, 51, 118, 0.84)';

    dropdownThree.style.display = 'block';
    collapseThree.style.transition = '1s';
    collapseThree.style.transform = 'rotate(180deg)';
    console.log('hmmm3')
});


// to collapse the drop down
collapse.addEventListener('click', ()=>{
    drop.style.color = 'rgb(42, 51, 118)';
    dropdown.style.display = 'none';
    collapse.style.transition = '1s';
    collapse.style.transform = 'rotate(0deg)';
    // drop.classList.remove('dropdown');
    console.log('you');
});
collapseTwo.addEventListener('click', ()=>{
    dropTwo.style.color = 'rgb(42, 51, 118)';
    dropdownTwo.style.display = 'none';
    collapseTwo.style.transform = 'rotate(0deg)';
    collapseTwo.style.transition = '1s';
    // drop.classList.remove('dropdown');
    console.log('you1');
});
collapseThree.addEventListener('click', ()=>{
    dropThree.style.color = 'rgb(42, 51, 118)';
    dropdownThree.style.display = 'none';
    collapseThree.style.transform = 'rotate(0deg)';
    collapseThree.style.transition = '1s';
    // drop.classList.remove('dropdown');
    console.log('you2');
});