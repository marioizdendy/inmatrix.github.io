// NEO FACE ANIMATION

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('el-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.el-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  
// PARTNERS_Anim

 $(window).scroll(function(){
  inViewport();
});

$(window).resize(function(){
  inViewport();
});

function inViewport(){
  $('.animate-me').each(function(){
    var divPos = $(this).offset().top,
            topOfWindow = $(window).scrollTop();
    
    if( divPos < topOfWindow+400 ){
      $(this).addClass('element-show');
    }
  });
}
  