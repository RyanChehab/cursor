let boundaries = document.querySelectorAll('.boundary');
boundaries.forEach(boundary=>{
    boundary.addEventListener('mouseover',function(){
        boundary.style.color = 'red'
    })
})