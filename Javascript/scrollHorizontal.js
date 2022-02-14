const page = document.getElementById('page');
const panes = page.children;
let dummyX = null;
let lastPane = panes[panes.length - 1];

window.onscroll = function(){
	let y = document.body.getBoundingClientRect().top;
	console.log(document.body.getBoundingClientRect());
	page.scrollLeft = -y;
}

window.onresize = resize;

resize();

function resize(){
	let w = page.scrollWidth - window.innerWidth + window.innerHeight;
	document.body.style.height = w +'px';
	
	dummyX = lastPane.getBoundingClientRect().left+window.scrollY;
}