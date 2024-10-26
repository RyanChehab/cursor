let boundaries = document.querySelectorAll('.boundary');
let start = document.getElementById('start')
let end = document.getElementById('end')

let gameLost = false;

// starting the game
start.addEventListener("mouseover",function(){
    gameLost=false

    start.style.color = 'green';
    start.style.background = 'black'
    let status = document.getElementById('status')
    status.innerHTML = 'GAME STARTED'



        // boundaries to red

        boundaries.forEach(boundary=>{
            boundary.addEventListener('mouseover',function(){
                if (gameLost===false){
                gameLost = true;
                boundaries.forEach(sides=>{
                    sides.style.background = 'red'})

                let status = document.getElementById('status')
                status.innerHTML='YOU LOST!'
                status.style.color= 'red'
                }
            })
        })

            // End
            end.addEventListener('mouseover',function(){
                if(gameLost===false){
                    console.log("wo")
                status.innerHTML = 'YOU WON'
                status.style.color = 'green'
                gameLost=true

                // boundaries to green
                boundaries.forEach(boundary=>{
                    boundary.style.background = 'green'
                })
                }
            })

                    
                


})