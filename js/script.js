function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('show-elem');
      }
    });
  }
  
  let options = {
    threshold: [0.7] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.card, .section-title, .bar, .img-section-svg, .about-us-text');
  
  for (let elm of elements) {
    observer.observe(elm);
}
  
