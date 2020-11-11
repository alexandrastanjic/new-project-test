$(function() {
	const productsContentWrapper = $('.product-main-wrapper');
	const singleProductWrapper = $('.single-product-wrapper');
	const imgWrapper = $('.img-wrapper');
	const overlay = $('.overlay');
	const coatsArr = products.coats;
	const btnClose = $('#btnClose');
	const overlayContentWrapper = $('.overlay-content-wrapper');
	const getproductsHTML = function(productsObj) {
		return `<div class="single-product-wrapper" data-id=${productsObj.id}>
                <div class="product-image-wrapper" style="background-image: url(assets/coats/${productsObj.imgUrl})"></div>
                <div class="product-info-wrapper">
                    <div class="description-wrapper">${productsObj.name}</div>
                    <div class="price-wrapper">${productsObj.currency} ${productsObj.price}</div>
               </div> `;
	};

	const getCartInfo = function(info) {
		return `
        <div class="cart-wrapper">
                    <div class="img-wrapper" style="background-image: url(assets/coats/${info.imgUrl})"></div>
                     <div class="info-wrapper">
                         <div class="item-name-wrapper"><h3>${info.name}</h3></div>
                         <div class="item-price-wrapper">${info.currency} ${info.price}</div>
                         <div class="item-size-wrapper">
                             <div>Your Size</div>
                             <div class="size-wrapper">
                             <div>s</div>
                             <div>m</div>
                             <div>l</div>
                             <div>xl</div>
                            </div>
                         </div>

                        
                         <div class="item-options-wrapper">
                             <div>Details</div>
                             <div>Orders</div>
                             <div>Payment</div>
                         </div>

                         <div class="item-composition-country-wrapper">
                             <div class="item-composition-wrapper">
                                <div>Composition</div>
                                <div class="grey" data-composition>${info.composition}</div>
                             </div>

                             <div class="item-country-wrapper">
                                 <div>Country</div>
                                 <div class="grey">${info.country}</div>
                             </div>
                         </div>

                         <div class="item-care-wrapper">
                             <div>Care</div>
                             <div class="grey">${info.care}</div>
                         </div>

                         <div class="add-btn-wrapper">
                             <button type="submit">Add to Cart</button>
                         </div>
                        </div>
        `;
	};

	for (let i = 0; i < coatsArr.length; i++) {
		let productsObj = coatsArr[i];
		let productsHMTL = getproductsHTML(productsObj);
		productsContentWrapper.append(productsHMTL);
	}


    // eu mai jos am incercat tot ce am crezut eu ca e posibil si nu reusesc sa-mi dau seama cum e corect
    // am incercat si cu for, dar atunci le deschide pe toate deodata
    // de fiecare cand dai click adauga inca un card si inca un card si cumva imi preia id-ul de index 0 si cand apesi pe a4-a poze imi da undeifined - sunt singura ca exista o explicate logica, insa eu nu reusesc sa o gasesc
	productsContentWrapper.delegate('.single-product-wrapper', 'click', function() {
		const id = $(this).data('id');
		console.log(id);

		let info = coatsArr[id];
		let infoHMTL = getCartInfo(info);
		overlayContentWrapper.append(infoHMTL);
		overlay.fadeIn();
	});

	btnClose.click(function() {
		overlay.fadeOut();
	});
});
