$(function() {
  console.log(products.coats);
  const productsContentWrapper = $('.products-main-wrapper');
  const singleProductWrappwe = $('.single-product-wrapper')
  const getproductsHTML = function(productsObj) {
      return `<div class="single-product-wrapper" data-id=${productsObj['id']}>
                <div class="product-image-wrapper" style="background-image: url(assets/products/${productsObj['imgUrl']})"></div>
                <div class="product-info-wrapper">
                    <div class="description-wrapper">${productsObj['name']}</div>
                    <div class="price-wrapper">${productsObj['currency']} ${productsObj['price']}</div>
               </div> `;
  };

  for(let i = 0; i < products['coats'].length; i++) {
            let productsObj = products['coats'][i];
            console.log(productsObj)
            let productsHMTL = getproductsHTML(productsObj);
             productsContentWrapper.append(productsHMTL);
        }

        productsContentWrapper.delegate('.single-product-wrapper', "click", function() {
          imgWrapper.css({backgroundImage: "url(assets/" + $(this).data('img') + ")"})
                  overlay.fadeIn();
              });
          
              overlay.click(function() {
                  $(this).fadeOut();
              });
          });
});