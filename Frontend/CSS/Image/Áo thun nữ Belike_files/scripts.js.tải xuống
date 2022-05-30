/*** Sticky Menu ***/
jQuery(document).ready(function($) {
	var _ts_enable_sticky_header = 1;
	
	if (typeof _ts_enable_sticky_header != 'undefined' && _ts_enable_sticky_header) {
		ts_sticky_menu();
	}

})


function ts_sticky_menu() {

	if (jQuery(window).width() > 768) {
		var top_spacing = 0;		
		var top_begin = jQuery('header.ts-header').height() + 30;

		setTimeout(function() {
			jQuery('.header-sticky').sticky({
				topSpacing: top_spacing,
				topBegin: top_begin,

			});
		}, 200);

		var old_scroll_top = 0;
		var extra_space = 650 + top_spacing + top_begin;
		if (jQuery('.top-slideshow').length > 0) {
			extra_space += jQuery('.top-slideshow').height();
		}
		jQuery(window).scroll(function() {
			if (jQuery('.is-sticky').length > 0) {
				var scroll_top = jQuery(this).scrollTop();
				if (scroll_top > old_scroll_top && scroll_top > extra_space) { /* Scroll Down */
					jQuery('.is-sticky .header-sticky').addClass('header-sticky-hide');
				} else { /* Scroll Up */
					if (jQuery('.is-sticky .header-sticky').hasClass('header-sticky-hide')) {
						jQuery('.is-sticky .header-sticky').removeClass('header-sticky-hide');
					}
				}
				old_scroll_top = scroll_top;
			}
		});
	}
}
/** End Sticky Menu **/

//begin jQuery view tab list/grid
function bindGrid() {
	var view = $.totalStorage('display');

	if (!view && (typeof displayList != 'undefined') && displayList) view = 'list';

	if (view && view != 'grid') display(view);
	else $('.display').find('li#grid').addClass('selected');

	$(document).on('click', '#grid', function(e) {
		e.preventDefault();
		display('grid');
	});

	$(document).on('click', '#list', function(e) {
		e.preventDefault();
		display('list');
	});
}

function display(view) {
	if (view == 'list') {
		$('.product_list').removeClass('grid').addClass('list row');
		$('.product_list > section').removeClass('col-lg-3 col-md-3 col-sm-6 col-xs-6').addClass('col-xs-12');
		$('.left-block').addClass('col-xs-12 col-sm-5 col-md-4');
		$('.right-block').addClass('col-xs-12 col-sm-7 col-md-8');
		$('.pr-0').removeClass('product-contents');
		$('.pr-0').addClass('right-block-content');
		$('.product-desc').show();
		$('.pr-q1').hide();
		$('.display').find('li#list').addClass('selected');
		$('.display').find('li#grid').removeAttr('class');
		$(window).resize();
		$.totalStorage('display', 'list');
	} else {
		$('.product_list').removeClass('list').addClass('grid row');
		$('.product_list > section').removeClass('col-xs-12').addClass('col-lg-3 col-md-3 col-sm-6 col-xs-6');
		$('.left-block').removeClass('col-xs-12 col-sm-5 col-md-4');
		$('.right-block').removeClass('col-xs-12 col-sm-7 col-md-8');
		$('.pr-0').addClass('product-contents');
		$('.pr-0').removeClass('right-block-content');
		$('.product-desc').hide();
		$('.pr-q1').show();
		$('.display').find('li#grid').addClass('selected');
		$('.display').find('li#list').removeAttr('class');
		$(window).resize();
		$.totalStorage('display', 'grid');
	}
	$("[data-toggle='tooltip']").tooltip();
}
//end jQuery view tab list/grid


/********************************** Tabs ********************************************/
var query;
var obj,tab_data;
$(document).ready(function(){
	$('.group-link-collection li').click(function(){
		if ( $(this).attr('data-loaded') == 'false' && $(this).attr('data-handle') != '' ) {
			$(this).attr('data-loaded', 'true');
			obj = $(this).index();
			tab_data = $(this).parents('.box-section-collection').find('.group-collection .box-product-lists');

			tab_data.eq(obj).children('.icon-loading.group-load-collection').show();
			query = '/option/productgroup';
			$.ajax({
			    url: query + '?code='+ $(this).attr('data-handle'),
				success: function (data) {
				    console.log(data);
					tab_data.eq(obj).children('.lazy-load-ball').hide();
					tab_data.eq(obj).html(data);
					tab_data.eq(obj).imagesLoaded( function() {
						$(window).resize();
					});
				}
			});
		}
		if ( $(this).attr('data-loaded') == 'false' && $(this).attr('data-handle') == '' ) {
			$(this).attr('data-loaded', 'true');
			$(this).parents('.box-section-collection').find('.group-collection .box-product-lists').eq($(this).index()).append("<div class='clearfixProduct empty'><p>Không tìm thấy kết quả. Vui lòng thử lại !</p></div>");
		}
		$(this).parent('.group-link-collection').children('li.active').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.box-section-collection').find('.group-collection .box-product-lists').removeClass('active');
		$(this).parents('.box-section-collection').find('.group-collection .box-product-lists').eq($(this).index()).addClass('active');
		console.log($(this).index())	;


	});
});
/********************************** Menu Mobile ********************************************/
$(document).ready(function() {
	jQuery("#menu-icon").on("click", function() {
		jQuery(".sf-menu-phone").slideToggle();
		jQuery(this).toggleClass("active");
	});

	jQuery('.sf-menu-phone').find('li.parent').append('<i class="fa fa-angle-down"></i>');
	jQuery('.sf-menu-phone li.parent i').on("click", function() {
		if (jQuery(this).hasClass('fa-angle-up')) {
			jQuery(this).removeClass('fa-angle-up').parent('li.parent').find('> ul').slideToggle();
		} else {
			jQuery(this).addClass('fa-angle-up').parent('li.parent').find('> ul').slideToggle();
		}
	});
});



/*----------Cart Target----------*/
$(document).ready(function(){

	function getCartView() {
		jQuery.getJSON('/cart.js', function(cart, textStatus) {
			$('.ajax_cart_quantity').html(cart.item_count);
			$('#view-cart .text-mini-cart').remove();
			$('#view-cart .cart-check-mini').remove();
			$('#view-cart').append(
				"<div id='view-h' class='cart-list' ></div><div class='text-mini-cart'><span class='cart_block_text'>Tổng tiền:</span><span class='cart_block_total'>" + Haravan.formatMoney(cart.total_price,'') +"đ" + "</span></div><div class='checkout cart-check-mini'><a class='button btn view-cart' href='/cart'><span>Giỏ hàng</span></a><a class='button btn checkout' href='/checkout'><span>Thanh toán</span></a></div>"
			);
			$.each(cart.items,function(i,item){
				clone_item(item);
			});
		});
	};

	function clone_item(product){
		var item_product = $('#clone-item .item_2');
		if(product.image != null)
			item_product.find('img').attr('src',product.image);
		else
			item_product.find('img').attr('src',"../js/images/no-image.png?v=5671");
		item_product.find('a:not(.remove-cart)').attr('href', product.url);
		item_product.find('.text_cart > h4 > a').html(product.title);
		item_product.find('.remove-cart').attr('data-id',product.variant_id);
		var title = '';
		if(product.variant_options.indexOf('Default Title') == -1){
			$.each(product.variant_options,function(i,v){
				title = title + v + ' / ';
			});
			title = title + '@@';
			title = title.replace(' / @@','')
			item_product.find('.variant').html(title);
		}else {
			item_product.find('.variant').html('');
		}
		item_product.find('.price-line .new-price').html(Haravan.formatMoney(product.price,"") + "<span class='down-case'> x " + product.quantity + "</span>");
		item_product.clone().removeClass('hidden').prependTo('#view-h');
	}

	$(document).on("click",".remove-cart",function(){
		var index_view_cart = $(this).parents('.item-cart').index() - 1;
		$(this).parents('.item-cart').remove();
		var variant_id = $(this).attr('data-id');
		var params = {
			type: 'POST',
			url: '/cart/change.js',
			data:  'quantity=0&id='+variant_id,
			dataType: 'json',
			success: function(cart) {  
				if ( cart.item_count > 0 ) {
					$('.ajax_cart_quantity').html(cart.item_count);
					if ( window.location.pathname == '/cart' ){
						$('#total-carts').html(Haravan.formatMoney(cart.total_price, ""));
						$('#cartformpage tr.list-carts').eq(index_view_cart).remove();
					};
					$('.cart_block_total').html(Haravan.formatMoney(cart.total_price, ""));
				} else {
					if ( window.location.pathname == '/cart' ){
						$('#cartformpage').remove();
						$('#layout-page').append("<p class='text-center'>Không có sản phẩm nào trong giỏ hàng!</p><p class='text-center'><a href='/collections/all'><i class='fa fa-reply'></i> Tiếp tục mua hàng</a></p>");
					}
					$('.ajax_cart_quantity').html(cart.item_count);
					$('#view-cart > div:not(#clone-item)').remove();
					$('#view-cart').append("<div style='padding:10px 20px;'> <p style='margin:0' class='text-center'>Giỏ hàng của bạn đang trống</p><p class='text-center'><a href=''>Tiếp tục mua hàng</a></p></div>");
				}
			},
			error: function(XMLHttpRequest, textStatus) {
				Haravan.onError(XMLHttpRequest, textStatus);
			}
		};
		jQuery.ajax(params);

	});




	$(document).on("click",".ajax_add_to_cart_button",function(){
		var quantity = quantity || 1;
		var variant_id = $(this).attr('data-variant');
		var params = {
			type: 'POST',
			url: '/cart/add.js',
			data: 'quantity=' + quantity + '&id=' + variant_id,
			dataType: 'json',
			success: function(line_item) {
				$('#view-cart > div:not(#clone-item,.text-mini-cart,.cart-check-mini)').remove();
				getCartView();
				Haravan.onItemAdded(line_item);
				$('#cart-modal').modal('show');
			},
			error: function(XMLHttpRequest, textStatus) {
				Haravan.onError(XMLHttpRequest, textStatus);
			}
		};
		jQuery.ajax(params);
	});

	$('#add-to-cart').on('click', function(e) {
		e.preventDefault();
		var variant_id = $('#product-select').val(),
				quantity  = parseInt($('input[name="quantity"]').val());  
		var params = {
			type: 'POST',
			url: '/cart/add.js',
			data: 'quantity=' + quantity + '&id=' + variant_id,
			dataType: 'json',
			success: function(line_item) {
				$('#view-cart > div:not(#clone-item,.text-mini-cart,.cart-check-mini)').remove();
				getCartView();
				Haravan.onItemAdded(line_item);
				$('#cart-modal').modal('show');
			},
			error: function(XMLHttpRequest, textStatus) {
				Haravan.onError(XMLHttpRequest, textStatus);
			}
		};
		jQuery.ajax(params);
	});



	Haravan.onItemAdded = function(line_item) {
		var cart = null;

		jQuery.getJSON('/cart.js', function(cart, textStatus) {
			if(cart)
			{
				var total_line = 0;
				var total_line = line_item.quantity * line_item.price;
				if(line_item.image != null)
					$('.layer_cart_img').html("<img src=" + Haravan.resizeImage(line_item.image,'small') + ">");
				else
					$('.layer_cart_img').html("<img src='../js/images/noDefaultImage6_large.gif'>");
				vt = line_item.variant_options;
				if(vt.indexOf('Default Title') != -1)
					vt = '';
				$('.layer_cart_cart.first .item-title a').html(line_item.product_title + '<br><span>' + vt + '</span>').attr('href', line_item.url);
				$('.item-total').html(Haravan.formatMoney(cart.total_price, "")+"đ"); 
				$('.layer_cart_cart.first .item-price').html(Haravan.formatMoney(line_item.price, "")+"đ");
				$('.cart-count').html(cart.item_count);
				$('.layer_cart_img').attr('href', line_item.url);
				$('.item-quantity').html('<strong>Số lượng:</strong>'+line_item.quantity);
			}
		})
	}
	/*-------------------------------------*/

});
/*----------End Cart Target----------*/




//End addcart



$(document).ready(function(){
	jQuery(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	jQuery('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	function addItem(form_id) {
		$.ajax({
			type: 'POST',
			url: '/cart/add.js',
			dataType: 'json',
			data: $('#'+form_id).serialize(),
			success: Haravan.onSuccess,
			error: Haravan.onError
		});
	}

	//$(".addtocart").click(function(e){

	//var elem = $(this)
	//$(elem).prop("disabled", true)

	//e.preventDefault();
	//addItem('add-item-form');

	//});

	Haravan.onSuccess = function() {

		var elem = $('.addtocart');

		elem.removeAttr("disabled");

		var quantity = parseInt(jQuery('[name="quantity"]').val(), 10) || 1;

		function animate() {

			$("#cart-animation").show();
			var addtocartWidth = elem.outerWidth() / 2
			var addtocartHeight = elem.outerHeight() / 2

			var addtocartLeft = elem.offset().left + addtocartWidth;
			var addtocartTop = $(elem).offset().top + addtocartHeight ;

			var buttonAreaWidth = $("#cart-target").outerWidth();
			var buttonAreaHeight = $("#cart-target").outerHeight();

			var buttonAreaLeft = ($("#cart-target").offset().left + buttonAreaWidth / 2  - $("#cart-animation").outerWidth() / 2) - 4;
			var buttonAreaTop = ($("#cart-target").offset().top + buttonAreaWidth / 2  - $("#cart-animation").outerHeight() / 2) - 4 ;

			var path = {
				start: {
					x: addtocartLeft,
					y: addtocartTop,
					angle: 190.012,
					length: 0.2
				},
				end: {
					x: buttonAreaLeft,
					y: buttonAreaTop,
					angle: 90.012,
					length: 0.50
				}
			};

			$('#cart-animation').text(quantity).animate(
				{
					path : new $.path.bezier(path)
				},
				1200,
				function() {
					$("#cart-animation").fadeOut(500, function() {
						$(elem).prop("disabled", false)
						var cartCount =  parseInt($('#cart-count').text()) + quantity;
						$('#cart-count').text(cartCount)
					})
				}
			);
		}

		animate();
	};

	Haravan.onError = function(XMLHttpRequest, textStatus) {
		// Haravan returns a description of the error in XMLHttpRequest.responseText.
		// It is JSON.
		// Example: {"description":"The product 'Amelia - Small' is already sold out.","status":500,"message":"Cart Error"}
		var data = eval('(' + XMLHttpRequest.responseText + ')');
		if (!!data.message) {
			alert(data.message + '(' + data.status  + '): ' + data.description);
		} else {
			alert('Error : ' + Haravan.fullMessagesFromErrors(data).join('; ') + '.');
		}

		$('.addtocart').removeAttr("disabled");
	};

	Haravan.fullMessagesFromErrors = function(errors) {
		var fullMessages = [];
		jQuery.each(errors, function(attribute, messages) {
			jQuery.each(messages, function(index, message) {
				fullMessages.push(attribute + ' ' + message);
			});
		});
		return fullMessages;
	};

})


jQuery(document).ready(function(){

	if ( $('.slides li').size() > 1 ) {

		$('.flexslider').flexslider({
			animation: "slide",
			slideshow: true,
			animationDuration: 700,
			slideshowSpeed: 6000,
			animation: "fade",
			controlsContainer: ".flex-controls",
			controlNav: false,
			keyboardNav: true
		});
		//.hover(function(){ $('.flex-direction-nav').fadeIn();}, function(){$('.flex-direction-nav').fadeOut();});

	}

	$("select.loc_on_change").change(function(){
		if($(this).attr("value") == "#") return false;
		window.location = $(this).attr("value");
	});

	
	 });

	 jQuery(document).ready(function($){



		 $("nav.mobile select").change(function(){ window.location = jQuery(this).val(); });
		 $('#product .thumbs a').click(function(){
			 
			 $('#placeholder').attr('href', $(this).attr('href'));
				$('#placeholder img').attr('src', $(this).attr('data-original-image'))
				
				$('#zoom-image').attr('href', $(this).attr('href'));
				 return false;
				});

				$('input[type="submit"], input.btn, button').click(function(){ // remove ugly outline on input button click
					$(this).blur();
				})

				$("li.dropdown").hover(function(){
					$(this).children('.dropdown').show();
					$(this).children('.dropdown').stop();
					$(this).children('.dropdown').animate({
						opacity: 1.0
					}, 200);
				}, function(){
					$(this).children('.dropdown').stop();
					$(this).children('.dropdown').animate({
						opacity: 0.0
					}, 400, function(){
						$(this).hide();
					});
				});

			 }); // end document ready

			 /* jQuery css bezier animation support -- Jonah Fox */

			 ;(function($){

				 $.path = {};

				 var V = {
					 rotate: function(p, degrees) {
						 var radians = degrees * Math.PI / 180,
								 c = Math.cos(radians),
								 s = Math.sin(radians);
						 return [c*p[0] - s*p[1], s*p[0] + c*p[1]];
					 },
					 scale: function(p, n) {
						 return [n*p[0], n*p[1]];
					 },
					 add: function(a, b) {
						 return [a[0]+b[0], a[1]+b[1]];
					 },
					 minus: function(a, b) {
						 return [a[0]-b[0], a[1]-b[1]];
					 }
				 };

				 $.path.bezier = function( params, rotate ) {
					 params.start = $.extend( {angle: 0, length: 0.3333}, params.start );
					 params.end = $.extend( {angle: 0, length: 0.3333}, params.end );

					 this.p1 = [params.start.x, params.start.y];
					 this.p4 = [params.end.x, params.end.y];

					 var v14 = V.minus( this.p4, this.p1 ),
							 v12 = V.scale( v14, params.start.length ),
							 v41 = V.scale( v14, -1 ),
							 v43 = V.scale( v41, params.end.length );

					 v12 = V.rotate( v12, params.start.angle );
					 this.p2 = V.add( this.p1, v12 );

					 v43 = V.rotate(v43, params.end.angle );
					 this.p3 = V.add( this.p4, v43 );

					 this.f1 = function(t) { return (t*t*t); };
					 this.f2 = function(t) { return (3*t*t*(1-t)); };
					 this.f3 = function(t) { return (3*t*(1-t)*(1-t)); };
					 this.f4 = function(t) { return ((1-t)*(1-t)*(1-t)); };

					 /* p from 0 to 1 */
					 this.css = function(p) {
						 var f1 = this.f1(p), f2 = this.f2(p), f3 = this.f3(p), f4=this.f4(p), css = {};
						 if (rotate) {
							 css.prevX = this.x;
							 css.prevY = this.y;
						 }
						 css.x = this.x = ( this.p1[0]*f1 + this.p2[0]*f2 +this.p3[0]*f3 + this.p4[0]*f4 +.5 )|0;
						 css.y = this.y = ( this.p1[1]*f1 + this.p2[1]*f2 +this.p3[1]*f3 + this.p4[1]*f4 +.5 )|0;
						 css.left = css.x + "px";
						 css.top = css.y + "px";
						 return css;
					 };
				 };

				 $.path.arc = function(params, rotate) {
					 for ( var i in params ) {
						 this[i] = params[i];
					 }

					 this.dir = this.dir || 1;

					 while ( this.start > this.end && this.dir > 0 ) {
						 this.start -= 360;
					 }

					 while ( this.start < this.end && this.dir < 0 ) {
						 this.start += 360;
					 }

					 this.css = function(p) {
						 var a = ( this.start * (p ) + this.end * (1-(p )) ) * Math.PI / 180,
								 css = {};

						 if (rotate) {
							 css.prevX = this.x;
							 css.prevY = this.y;
						 }
						 css.x = this.x = ( Math.sin(a) * this.radius + this.center[0] +.5 )|0;
						 css.y = this.y = ( Math.cos(a) * this.radius + this.center[1] +.5 )|0;
						 css.left = css.x + "px";
						 css.top = css.y + "px";
						 return css;
					 };
				 };

				 $.fx.step.path = function(fx) {
					 var css = fx.end.css( 1 - fx.pos );
					 if ( css.prevX != null ) {
						 $.cssHooks.transform.set( fx.elem, "rotate(" + Math.atan2(css.prevY - css.y, css.prevX - css.x) + ")" );
					 }
					 fx.elem.style.top = css.top;
					 fx.elem.style.left = css.left;
				 };

			 })(jQuery);


			 function getCartAjax(){
				 var cart = null;
				 $('#cartform').hide();
				 $('#myCart #exampleModalLabel').text("Giỏ hàng");
				 jQuery.getJSON('/cart.js', function(cart, textStatus) {
					 if(cart)
					 {
						 $('#cartform').show();
						 $('.line-item:not(.original)').remove();
						 $.each(cart.items,function(i,item){
							 var total_line = 0;
							 var total_line = item.quantity * item.price;
							 tr = $('.original').clone().removeClass('original').appendTo('table#cart-table tbody');
							 if(item.image != null)
								 tr.find('.item-image').html("<img src=" + Haravan.resizeImage(item.image,'small') + ">");
							 else
							     tr.find('.item-image').html("<img src='../js/images/noDefaultImage6_large.gif'>");
							 vt = item.variant_options;
							 if(vt.indexOf('Default Title') != -1)
								 vt = '';
							 tr.find('.item-title a').html(item.product_title + '<br><span>' + vt + '</span>').attr('href', item.url);
							 tr.find('.item-quantity').html("<input id='quantity1' name='updates[]' min='1' type='number' value=" + item.quantity + " class='' />");
							 if ( typeof(formatMoney) != 'undefined' ){
								 tr.find('.item-price').html(Haravan.formatMoney(total_line, formatMoney));
							 }else {
								 tr.find('.item-price').html(Haravan.formatMoney(total_line, ''));
							 }
							 tr.find('.item-delete').html("<a href='#' onclick='deleteCart(" + item.variant_id + ")' >Xóa</a>");
						 });
						 if ( typeof(formatMoney) != 'undefined' ){
							 $('.item-total').html(Haravan.formatMoney(cart.total_price, formatMoney));
						 }else {
							 $('.item-total').html(Haravan.formatMoney(cart.total_price, ''));
						 }
						 $('.modal-title b').html(cart.item_count);
						 $('*[id=cart-count]').html(cart.item_count);
						 if(cart.item_count == 0){
							 //$('#myCart button').attr('disabled', '');
							 $('#myCart #cartform').addClass('hidden');
							 $('#myCart #exampleModalLabel').html('Giỏ hàng của bạn đang trống. Mời bạn tiếp tục mua hàng.');
						 }
						 else{
							 $('#myCart #exampleModalLabel').html('Bạn có ' + cart.item_count + ' sản phẩm trong giỏ hàng.');
							 $('#myCart #cartform').removeClass('hidden');
							 $('#myCart button').removeAttr('disabled');
						 }

					 }
					 else{
						 $('#myCart #exampleModalLabel').html('Giỏ hàng của bạn đang trống. Mời bạn tiếp tục mua hàng.');
						 $('#cartform').hide();
					 }
				 });

			 }
			 $(document).ready(function(){
				 $('#cart-target a').click(function(event){
					 event.preventDefault() ;
					 getCartAjax();

					 $('#myCart').modal('show');
					 $('.modal-backdrop').css({'height':$(document).height(),'z-index':'99'});
				 });
				 $('a[data-spy=scroll]').click(function(){
					 event.preventDefault() ;
					 $('body').animate({scrollTop: ($($(this).attr('href')).offset().top - 20) + 'px'}, 500);
				 })

				 $('#update-cart-modal').click(function(event){
					 event.preventDefault();
					 if (jQuery('#cartform').serialize().length <= 5) return;
					 $(this).html('Đang cập nhật');
					 var params = {
						 type: 'POST',
						 url: '/cart/update.js',
						 data: jQuery('#cartform').serialize(),
						 dataType: 'json',
						 success: function(cart) {
							 if ((typeof callback) === 'function') {
								 callback(cart);
							 } else {

								 getCartAjax();
							 }

							 $('#update-cart-modal').html('Cập nhật');
						 },
						 error: function(XMLHttpRequest, textStatus) {
							 Haravan.onError(XMLHttpRequest, textStatus);
						 }
					 };
					 jQuery.ajax(params);
				 });
			 });

			 function deleteCart(variant_id){
				 var params = {
					 type: 'POST',
					 url: '/cart/change.js',
					 data: 'quantity=0&id=' + variant_id,
					 dataType: 'json',
					 success: function(cart) {
						 getCartAjax();
					 },
					 error: function(XMLHttpRequest, textStatus) {
						 Haravan.onError(XMLHttpRequest, textStatus);
					 }
				 };
				 jQuery.ajax(params);
			 }
			 $('#checkout').click(function(){
				 $('#cartform').submit();
			 })
			 // The following piece of code can be ignored.
			 $(function(){
				 $(window).resize(function() {
					 $('#info').text("Page width: "+$(this).width());
				 });
				 $(window).trigger('resize');
			 });

