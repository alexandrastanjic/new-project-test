$(function() {
	const productsContentWrapper = $('.product-main-wrapper');
	const coatsArr = products.coats;
	console.log(products);
	const singleProductWrapper = $('.single-product-wrapper');
	const getproductsHTML = function(productsObj) {
		return `<div class="single-product-wrapper" data-id=${productsObj.id}>
                <div class="product-image-wrapper" style="background-image: url(assets/coats/${productsObj.imgUrl})"></div>
                <div class="product-info-wrapper">
                    <div class="description-wrapper">${productsObj.name}</div>
                    <div class="price-wrapper">${productsObj.currency} ${productsObj.price}</div>
               </div> `;
	};

	for (let i = 0; i < coatsArr.length; i++) {
		let productsObj = coatsArr[i];
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
