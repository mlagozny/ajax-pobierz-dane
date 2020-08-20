$(document).ready(function () {

    $('#pobierz-dane').click(function () {
        $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            console.log(data)
    
            data = JSON.parse(data)
            const newDiv = $(`<div>Dane programisty: ${data.imie} ${data.nazwisko} </div>`);
            // $('div').text(data.imie);
            $('button').after(newDiv);
            $('div').addClass('dane-programisty');

        })

    })

})