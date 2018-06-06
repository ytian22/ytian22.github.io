$(document).ready(function () {
  var data = [{
    id: 0,
    title: 'Web Application Development:<br>"LEGOIT.US"',
    description: "Developed a web platform that provides users real-time LEGO services.<br><b>Tools: Python, MySQL, Flask, AWS, Selenium, HTML5, JavaScript, OpenCV.</b>",
    demoUrl: "https://legoit.us/",
    previewUrl: "img/legoit.png",
    category: "data"
  }, {
    id: 1,
    title: "Machine Learning:<br>Street-Parking Availability Prediction",
    description: "Estimated spot availability with feature engineering and machine learning models.<br><b>Tools: Python, Scikit-Learn, XGBoost, ETL, Google Geocoding API, AWS S3, Github.</b>",
    demoUrl: "https://github.com/ytian22/Street-Parking-Availability-Prediction",
    previewUrl: "img/parking-lots.png",
    category: "data"
  }, {
    id: 2,
    title: "Distributed Computing & Warehousing:<br>Bike Share Demand Prediction",
    description: "Predicted bike share demand with Spark MLlib and built an ETL pipeline for NoSQL data processing.<br><b>Tools: Python, PySpark, Spark MLlib, Random Forest, Amazon S3, MongoDB, Spark EC2 Cluster.</b>",
    demoUrl: "https://github.com/ytian22/Bike-Share-Demand",
    previewUrl: "img/bike.jpg",
    category: "data"
  }, {
    id: 3,
    title: "Machine Learning & NLP:<br>Movie Review Classification",
    description: "Predicted IMDB movie review polarity in Python with GloVe word embedding and XGBoost model.<br><b>Tools: Python, Scikit-Learn, XGBoost, NLP, Spacy, NLTK.</b>",
    demoUrl: "https://github.com/ytian22/Word-Embeddings",
    previewUrl: "img/movie.jpg",
    category: "data2"
  }, {    
    id: 4,
    title: "Time Series Analysis:<br>Canada’s Bankruptcy Rate Forecast",
    description: "Forecasted Canada’s monthly bankruptcy rate and achieved the lowest test RMSE of 0.0035.<br><b>Tools: R, Time Series Models (SARIMA, SARIMAX, Holt-Winters, VAR, VARX), GGplot.</b>",
    demoUrl: "https://drive.google.com/open?id=14SM7rupXNzhdb1ylBThCmvrj1Wosyoab",
    previewUrl: "img/bankruptcy.jpg",
    category: "data2"
  }, {
    id: 5,
    title: "Linear Regression:<br>House Price Prediction",
    description: "Constructed exploratory modeling and predictive modeling to predict new house prices.<br><b>Tools: R, GGplot, Regression Models (OLS, Ridge, Lasso, Elastic Net).</b>",
    demoUrl: "https://github.com/ytian22/House-Price-Prediction",
    previewUrl: "img/house.jpg",    
    category: "data2"  
  }, {
    id: 6,
    title: "Analytics Ingestion Pipeline",
    description: "Deployed a web application to accept, log, and process HTTP requests.<br><b>Tools: Python, Flask, AWS, Paramiko, NoSQL, Linux, Command Line, Crontab.</b>",
    demoUrl: "https://github.com/ytian22/Data-Ingestion-Pipeline",
    previewUrl: "img/pipeline.jpg",
    category: "data3"
  }, {
    id: 7,
    title: "Twitter Sentiment Analysis",
    description: "Developed a web server to display tweets from a given user. Colored tweets by the sentiment scores.<br><b>Tools: Python, NLP, Bag-of-Words, HTML5, AWS, Flask, Twitter API, vaderSentiment.",
    demoUrl: "https://github.com/ytian22/Twitter-Sentiment-Analysis",
    previewUrl: "img/twitter.jpeg",
    category: "data3"
  }, {
    id: 8,
    title: "Article Recommendation Engine",
    description: "Built a web application to display and recommend BBC articles. Measured article similarities with GloVe word embedding.<br><b>Tools: Python, NLP, XML, AWS, Flask.",
    demoUrl: "https://github.com/ytian22/Article-Recommendation-Engine",
    previewUrl: "img/article.jpg",
    category: "data3"
  }, {
    id: 9,
    title: "Search Engine Implementation",
    description: "Implemented a search engine to display results in a browser window and navigate to documents.<br><b>Tools: Python, Indexing, Hashtable, HTML5.</b>",
    demoUrl: "https://github.com/ytian22/Search-Engine-Implementation",
    previewUrl: "img/search.jpg",
    category: "data5"
  }, {
    id: 10,
    title: "Interactive Visualization",
    description: "Designed interactive visualization and provided analysis for Lending Club Loan data. <br><b>Tools: Python, Plotly.js, D3.js, HTML5.",
    demoUrl: "https://ytian22.github.io/Lending-Club-Visualization/",
    previewUrl: "img/loan.png",
    category: "data5"
  }, {
    id: 11,
    title: "Data Visualization Collection",
    description: "A collection of all data visualization coursework, including interactive visualizations.<br><b>Tools: Python, Seaborn, Plotly, Bokeh, Networkx, Tableau.",
    demoUrl: "https://github.com/ytian22/Data-Visualization-Collection",
    previewUrl: "img/collection.jpeg",
    category: "data5"
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

  var frontend5 = data.filter(function (item) {
    return item.category === 'data5';
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

  function renderToDom5(data) {
    data.forEach(function (item) {
      var card = generateCard(item);
      //render card to dom
      //console.log(card);
      $('.js-list5').append(card);
    });
  }


  //for intial rendering
  renderToDom(frontend1);
  renderToDom2(frontend2);
  renderToDom3(frontend3);
  renderToDom5(frontend5);


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