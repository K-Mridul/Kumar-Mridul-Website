if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}

function ready(){
    var bookTicketButtons = document.getElementsByClassName('tour-btn')
    for(var i=0;i<bookTicketButtons.length;i++){
        var button = bookTicketButtons[i]
        button.addEventListener('click',ticketBooked)
    }
}

function ticketBooked(event){
    alert('The booking has been made! Thankyou!!')
}

