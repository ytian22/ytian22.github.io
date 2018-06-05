$(document).ready(function () {
  var data = [{
    id: 0,
    title: "Tribute Page",
    description: "A Tribute Page For Nandamuri Taraka Rama Rao.",
    demoUrl: "https://codepen.io/vinaypuppal/full/JXJJaL/",
    previewUrl: "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247988/fcc/tribute-page-ui.png",
    category: "data"
  }, {
    id: 1,
    title: "Random Quote Generator",
    description: "A simple quote generator that you can tweet and share.",
    demoUrl: "https://codepen.io/vinaypuppal/full/dMdxKR/",
    previewUrl: "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247983/fcc/random-quote-ui.png",
    category: "data"
  }, {
    id: 2,
    title: "Wiki Search",
    description: "A useful app to search Wikipedia articles.",
    demoUrl: "https://codepen.io/vinaypuppal/full/WwzxxR/",
    previewUrl: "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/wiki-search-ui.png",
    category: "data"
  }, {
    id: 3,
    title: "Random Quote Generator",
    description: "A simple quote generator that you can tweet and share.",
    demoUrl: "https://codepen.io/vinaypuppal/full/dMdxKR/",
    previewUrl: "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247983/fcc/random-quote-ui.png",
    category: "data2"
  }, {    
    id: 4,
    title: "Tribute Page",
    description: "A Tribute Page For Nandamuri Taraka Rama Rao.",
    demoUrl: "https://codepen.io/vinaypuppal/full/JXJJaL/",
    previewUrl: "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247988/fcc/tribute-page-ui.png",
    category: "data2"
  }, {
    id: 5,
    title: "Wiki Search",
    description: "A useful app to search Wikipedia articles.",
    demoUrl: "https://codepen.io/vinaypuppal/full/WwzxxR/",
    previewUrl: "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/wiki-search-ui.png",
    category: "data2"  
  }, {
    id: 6,
    title: "Wiki Search",
    description: "A useful app to search Wikipedia articles.",
    demoUrl: "https://codepen.io/vinaypuppal/full/WwzxxR/",
    previewUrl: "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/wiki-search-ui.png",
    category: "data3"
  }, {
    id: 7,
    title: "Tribute Page",
    description: "A Tribute Page For Nandamuri Taraka Rama Rao.",
    demoUrl: "https://codepen.io/vinaypuppal/full/JXJJaL/",
    previewUrl: "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247988/fcc/tribute-page-ui.png",
    category: "data3"
  }, {
    id: 8,
    title: "Random Quote Generator",
    description: "A simple quote generator that you can tweet and share.",
    demoUrl: "https://codepen.io/vinaypuppal/full/dMdxKR/",
    previewUrl: "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247983/fcc/random-quote-ui.png",
    category: "data3"
  }];

  var frontend1 = data.filter(function (item) {
    return item.category === 'data';
  });

  var frontend2 = data.filter(function (item) {
    return item.category === 'data2';
  });

  var frontend3 = data.filter(function (item) {
    return item.category === 'data3';
  });


  function removeActiveClass() {
    $('.center').find('a').each(function (i, el) {
      if ($(el).hasClass('active')) {
        $(el).removeClass('active');
      }
    });
  }
  function removeOpenClass() {
    $('.container').each(function (i, el) {
      if ($(el).hasClass('open')) {
        $(el).removeClass('open');
      }
    });
  }


  $('.js-open-works').on('click', function (e) {
    e.preventDefault();
    removeOpenClass();
    $('.works').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity: '1'
    }, 500);
    removeActiveClass();
    $('.center').find('.js-open-works').addClass('active');
  });



  function generateCard(data) {
    var title = data.title;
    var desc = data.description;
    var imgUrl = data.previewUrl;
    var demoUrl = data.demoUrl;
    return '<li class="card animated zoomIn"><div class="card-media"><img src=' + imgUrl + ' alt="#" /></div><div class="card-content"><h4>' + title + '</h4><p>' + desc + '</p></div><div class="card-actions"><a target="_blank" href=' + demoUrl + ' class="view-demo">View Detail</a></div></li>';
  }

  function renderToDom(data) {
    data.forEach(function (item) {
      var card = generateCard(item);
      //render card to dom
      //console.log(card);
      $('.js-list').append(card);
    });
  }
  
  function renderToDom2(data) {
    data.forEach(function (item) {
      var card = generateCard(item);
      //render card to dom
      //console.log(card);
      $('.js-list2').append(card);
    });
  }
  
  function renderToDom3(data) {
    data.forEach(function (item) {
      var card = generateCard(item);
      //render card to dom
      //console.log(card);
      $('.js-list3').append(card);
    });
  }

  //for intial rendering
  renderToDom(frontend1);
  renderToDom2(frontend2);
  renderToDom3(frontend3);


  function clearDom() {
    $('.js-list').empty();
  }
  $('input[type=radio]').on('change', function (e) {
    switch (e.target.value) {
      case 'frontend':
        clearDom();
        renderToDom(frontend);
        break;
      case 'backend':
        clearDom();
        renderToDom(backend);
        break;
      case 'react':
        clearDom();
        renderToDom(react);
        break;
      case 'meteor':
        clearDom();
        renderToDom(meteor);
        break;
    }
  });
});

if (document.createElement("p").style.flex === undefined) {
  alert("no flexbox support");
}

$.backstretch(["https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1464896760/photo-1428223501723-d821c5d00ca3_knl5ki.jpg", "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1464896839/photo-1432888498266-38ffec3eaf0a_ukva1r.jpg"], {
  duration: 20000,
  fade: 'slow'
});