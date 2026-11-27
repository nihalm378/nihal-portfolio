
(function(){
 var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'}):null;
 document.querySelectorAll('.rv').forEach(function(el){io?io.observe(el):el.classList.add('in')});
 var chips=[].slice.call(document.querySelectorAll('.chip')),projs=[].slice.call(document.querySelectorAll('.proj'));
 function apply(f){chips.forEach(function(c){c.setAttribute('aria-pressed',String(c.dataset.f===f))});projs.forEach(function(p){p.hidden=!(f==='all'||p.dataset.roles.split(' ').indexOf(f)>-1)})}
 chips.forEach(function(c){c.addEventListener('click',function(){apply(c.dataset.f);history.replaceState(null,'',c.dataset.f==='all'?location.pathname:'#'+c.dataset.f)})});
 var h=location.hash.slice(1);if(chips.length&&['uiux','mobile','web','brand'].indexOf(h)>-1)apply(h);
 var lb=document.createElement('div');lb.className='lb';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
 document.addEventListener('click',function(e){var t=e.target;if(t.classList&&t.classList.contains('zoom')){lb.firstChild.src=t.currentSrc||t.src;lb.classList.add('on')}else lb.classList.remove('on')});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
 var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
