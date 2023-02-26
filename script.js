$(document).ready(function() {
    
    $.ajax({
        url: 'https://fakestoreapi.com/products',
        method: 'get'
    }).done(function(response) {
        
        let products = response;
        let productList = '';
        $.each(products, function(index, product) {
          
            let name = product.title;
            let photo = product.image;
            let price = product.price;

           let card = '<div class="col-sm-4 mb-3">' +
                        '<div class="card">' +
                        '<img src="' + photo + '" class="card-img-top" alt="' + name + '">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">' + name + '</h5>' +
                        '<p class="card-text">$' + price + '</p>' +
                        '</div>' +
                        '</div>' +
                        '</div>';

           
            productList += card;
        });

       
        $('#product-list').html(productList);
    });
});