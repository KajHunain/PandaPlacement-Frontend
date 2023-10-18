

$(document).ready(function() {

    var shared = $("#shared_with li");
    var sum_count = shared.length - 4;
    shared.eq(shared.length - 1).hide()

  
    if (shared.length >= 5){

        shared.slice(3, -1).hide();
        shared.eq(shared.length - 1).show()
        shared.eq(shared.length - 1).text('+' + sum_count);
        console.log(shared[shared.length-1]);
    }


    var shared = $("#shared_with li");
    var sum_count = shared.length - 4;
    shared.eq(shared.length - 1).hide()
    
    if (shared.length >= 5){
  
        shared.slice(3, -1).hide();
        shared.eq(shared.length - 1).show()
        shared.eq(shared.length - 1).text('+' + sum_count);
        console.log(shared[shared.length-1]);
    }
    
    
});
  
  
//    const mainDiv = document.createElement('div');
  
//    const letters = ['A', 'L', 'N', 'B', '+2'];
//    for (let letter of letters) {
//      const span = document.createElement('span');
//      span.classList.add('invite-icon');
//      span.textContent = letter;
//      mainDiv.appendChild(span);
//    }
   
//    document.body.appendChild(mainDiv);