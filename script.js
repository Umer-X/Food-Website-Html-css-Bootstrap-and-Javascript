 let nav = document.querySelector(".navigation-wrap");
 window.onscroll = function () {
    if (document.documentElement.scrollTop > 60){
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
 }



 let navBar = document.querySelectorAll('.nav-link');
 let navCollapse = document.querySelector('.navbar-collapse.collapse');
 navBar.forEach(function(a){
   a.addEventListener('click', function(){
    navCollapse.classList.remove("show");
   })
 });
    




document.addEventListener('DOMContentLoaded', () => {
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval (() => {
            current = current + increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,1287,3000);
    counter("count2",100,1901,2500);
    counter("count3",0,1345,3000);
    counter("count4",0,2065,3000);
})