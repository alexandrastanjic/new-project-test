$(function() {
	const productsContentWrapper = $('.product-main-wrapper');
	const imgWrapper = $('.img-wrapper');
	const overlay = $('.overlay');
	const coatsArr = products.coats;
	const btnClose = $('#btnClose');
	const itemName = $('.item-name-wrapper');
	const itemPrice = $('.item-price-wrapper');
	const itemComposition = $('replace-composition');
	const itemCountry = $('.replace-country');
	const itemCare = $('.replace-care');
	const getproductsHTML = function(index, productsObj) {
		return `<div class="single-product-wrapper" data-id=${productsObj.id} data-index=${index}>
                <div class="product-image-wrapper" style="background-image: url(assets/coats/${productsObj.imgUrl})"></div>
                <div class="product-info-wrapper">
                    <div class="description-wrapper">${productsObj.name}</div>
                    <div class="price-wrapper">${productsObj.currency} ${productsObj.price}</div>
               </div> `;
	};

	for (let i = 0; i < coatsArr.length; i++) {
		let productsObj = coatsArr[i];
		let productsHMTL = getproductsHTML(i, productsObj);
		productsContentWrapper.append(productsHMTL);
	}

	productsContentWrapper.delegate('.single-product-wrapper', 'click', function() {
		const id = $(this).data('id');
		const index = $(this).data('index');
		const replaceInfo = products.coats[index];
		imgWrapper.css({ backgroundImage: `url(assets/coats/coat-${id}.jpg)` });
		itemName.text(replaceInfo.name);
		itemPrice.text(replaceInfo.currency + replaceInfo.price);
		itemComposition.text(replaceInfo.composition);
		itemCountry.text(replaceInfo.country);
		itemCare.text(replaceInfo.care);
		overlay.fadeIn();
	});

	btnClose.click(function() {
		overlay.fadeOut();
	});
});
