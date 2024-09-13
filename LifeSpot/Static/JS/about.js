alert("Javascript для страницы 'о проекте' подключен!")

const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>`  +
        '</div>';
}

function getReview() {
    let review = {}

    review["userName"] = prompt("Как вас зовут ?")
    if(review["userName"] == null){
        return
    }

    review["comment"] = prompt("Напишите свой отзыв")
    if(review["comment"] == null){
        return
    }

    review["date"] = new Date().toLocaleString()

    writeReview(review)
}

var indexValue = 1;
showImg(indexValue)
function btm_slide(num) { showImg(indexValue = num); }
function side_slide(num) { showImg(indexValue += num); }
function showImg(num) {
    var i;
    const img = document.querySelectorAll('img');
    const slider = document.querySelectorAll('.btm-slides span');
    if (num > img.length)
        indexValue = 1;
    if (num < 1)
        indexValue = img.length;
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    for (i = 0; i < slider.length; i++) {
        slider[i].style.background = "rgba(255,255,255,0.2)";
    }
    img[indexValue - 1].style.display = "block";
    slider[indexValue - 1].style.background = "rgba(255,255,255,0.7)";
}