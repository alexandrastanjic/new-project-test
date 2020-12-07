$(function() {
	const productsContentWrapper = $('.product-main-wrapper');
	const imgWrapper = $('.img-wrapper');
	const overlay = $('.overlay');
	const coatsObj = products.coats;
	const btnClose = $('#btnClose');

	const getproductsHTML = function(index, productsObj) {
		return `<div class="single-product-wrapper" data-id=${productsObj.id} data-index=${index}>
                <div class="product-image-wrapper" style="background-image: url(assets/coats/${productsObj.imgUrl})"></div>
                <div class="product-info-wrapper">
                    <div class="description-wrapper">${productsObj.name}</div>
                    <div class="price-wrapper">${productsObj.currency} ${productsObj.price}</div>
               </div> `;
	};

	for (let i = 0; i < coatsObj.length; i++) {
		let productsObj = coatsObj[i];
		let productHMTL = getproductsHTML(i, productsObj);
		productsContentWrapper.append(productHMTL);
	}

	productsContentWrapper.delegate('.single-product-wrapper', 'click', function() {
		const id = $(this).data('id');
		const index = $(this).data('index');
		const replaceInfo = products.coats[index];
		imgWrapper.css({ backgroundImage: `url(assets/coats/coat-${id}.jpg)` });
		$('.item-name-wrapper').text(replaceInfo.name);
		$('.item-price-wrapper').text(replaceInfo.currency + replaceInfo.price);
		$('item-composition-wrapper div').text(replaceInfo.composition);
		$('.item-country-wrapper div').text(replaceInfo.country);
		$('.item-care-wrapper div').text(replaceInfo.care);
		overlay.fadeIn();
	});

	btnClose.click(function() {
		overlay.fadeOut();
	});
});

$(function() {
	const categoryNames = $('.category-name');


		categoryNames.click(function() {
			categoryNames.removeClass('selected');
			$(this).addClass('selected').siblings()
		});
});
