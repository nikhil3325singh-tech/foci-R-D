<script>

/* Neural Network Animation */

const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let nodes = [];

for(let i=0;i<80;i++){
nodes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*1,
vy:(Math.random()-0.5)*1
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

nodes.forEach(node=>{

node.x+=node.vx;
node.y+=node.vy;

if(node.x<0 || node.x>canvas.width) node.vx*=-1;
if(node.y<0 || node.y>canvas.height) node.vy*=-1;

/* draw node */

ctx.beginPath();
ctx.arc(node.x,node.y,2,0,Math.PI*2);
ctx.fillStyle="#38bdf8";
ctx.fill();

});

/* draw connections */

for(let i=0;i<nodes.length;i++){

for(let j=i+1;j<nodes.length;j++){

let dx=nodes[i].x-nodes[j].x;
let dy=nodes[i].y-nodes[j].y;
let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<120){

ctx.beginPath();
ctx.moveTo(nodes[i].x,nodes[i].y);
ctx.lineTo(nodes[j].x,nodes[j].y);

ctx.strokeStyle="rgba(56,189,248,0.15)";
ctx.stroke();

}

}

}

requestAnimationFrame(animate);

}

animate();

</script>
<script>

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const speed = 200;
        const increment = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount,10);
        }else{
            counter.innerText = target;
        }
    };

    updateCount();
});

</script>

script>

const counters = document.querySelectorAll('.number');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount,20);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

</script>


<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
<script>
AOS.init({
duration:1000,
once:true
});
</script>

