var product = [
	{
    "id": 1,
		"price": "$19.99",
		"name": "product 1",
		"info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
    "image":"pic1.jpg",
  },
  {
    "id": 2,
    "price": "$18.99",
    "name": "product 2",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
  "image":"pic2.jpg",
  },
  {
    "id": 3,
    "price": "$11.99",
    "name": "product 3",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
    "image":"pic3.jpg",
  },
  {
    "id": 4,
    "price": "$14.99",
    "name": "product 4",
    "info": "PRODUCT INFO : I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty",
     "image":"pic4.jpg",
  },
];



Vue.component('product1',{
		'template': '<div><img :src="productData[0].image" class="img-responsive" style="width:100%"></div>',

		props:{
			'productData':{},
		}
	});
Vue.component('productinfo1',{
  'template': `<div >
   <h3>{{pro[0].name }}</h3><br><br>
   <h6>{{pro[0].price}}</h6><br>
   <button
   type="button"
    class="btn btn-warning w-100">ADD TO CARD
  </button><br><br><hr>
     <p> {{pro[0].info}}</p></div>`,
     props:{
 			'pro':{ },

 		}
});
Vue.component('product2',{
		'template': '<div><img :src="productData[1].image" class="img-responsive" style="width:100%"></div>',

		props:{
			'productData':{},
		}
	});
Vue.component('productinfo2',{
  'template': `<div >
   <h3>{{pro[1].name }}</h3><br><br>
   <h6>{{pro[1].price}}</h6><br>
   <button
   type="button"
    class="btn btn-warning w-100">ADD TO CARD
  </button><br><br><hr>
     <p> {{pro[1].info}}</p></div>`,
     props:{
 			'pro':{ },

 		}
});

Vue.component('product3',{
		'template': '<div><img :src="productData[2].image" class="img-responsive" style="width:100%"></div>',

		props:{
			'productData':{},
		}
	});
Vue.component('productinfo3',{
  'template': `<div >
   <h3>{{pro[2].name }}</h3><br><br>
   <h6>{{pro[2].price}}</h6><br>
   <button
   type="button"
    class="btn btn-warning w-100">ADD TO CARD
  </button><br><br><hr>
     <p> {{pro[2].info}}</p></div>`,
     props:{
 			'pro':{ },

 		}
});
Vue.component('product4',{
		'template': '<div><img :src="productData[3].image" class="img-responsive" style="width:100%"></div>',

		props:{
			'productData':{},
		}
	});
Vue.component('productinfo4',{
  'template': `<div >
   <h3>{{pro[3].name }}</h3><br><br>
   <h6>{{pro[3].price}}</h6><br>
   <button
   type="button"
    class="btn btn-warning w-100">ADD TO CARD
  </button><br><br><hr>
     <p> {{pro[3].info}}</p></div>`,
     props:{
 			'pro':{ },

 		}
});



	new Vue({
		'el':'#app',
		'data': {
			url:'prodects.html',
			url2:'https://www.facebook.com/',
			url3:'https://www.youtube.com/',
			url4:'https://www.instagram.com/',
			product:product,
		},

	});
	var slideIndex = 0;
	showSlides();

	function showSlides() {
	    var i;
	    var slides = document.getElementsByClassName("mySlides");
	    var dots = document.getElementsByClassName("dot");
	    for (i = 0; i < slides.length; i++) {
	       slides[i].style.display = "none";
	    }
	    slideIndex++;
	    if (slideIndex > slides.length) {slideIndex = 1}
	    for (i = 0; i < dots.length; i++) {
	        dots[i].className = dots[i].className.replace(" active", "");
	    }
	    slides[slideIndex-1].style.display = "block";
	    dots[slideIndex-1].className += " active";
	    setTimeout(showSlides,3000); // Change image every 2 seconds
	}
