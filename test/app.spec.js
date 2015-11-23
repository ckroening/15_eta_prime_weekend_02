
var EXAMPLE_DATA = {
  "eta": [{
    "firstName": "Adia",
    "lastName": "Alderson",
    "favoriteFoods": [
      "Tomato Basil Soup",
      "Hummus",
      "Tofu Pad Thai"
    ],
    "hotLineBling": false,
    "favoriteMovies": [{
      "movieName": "Gattaca",
      "releaseYear": 1997
    }, {
      "movieName": "Cloud Atlas",
      "releaseYear": 2012
    }, {
      "movieName": "Big Fish",
      "releaseYear": 2003
    }, {
      "movieName": "Spiderman",
      "releaseYear": 2002
    }, {
      "movieName": "The Fountain",
      "releaseYear": 2006
    }]
  }, {
    "firstName": "Amanda",
    "lastName": "Bausch",
    "favoriteFoods": [
      "tacos",
      "pie",
      "cake",
      "quacamole",
      "eggs"
    ],
    "hotLineBling": false,
    "favoriteMovies": [{
      "movieName": "The Fifth Element",
      "releaseYear": 1997
    }, {
      "movieName": "How to Train Your Dragon",
      "releaseYear": 2010
    }, {
      "movieName": "Serenity",
      "releaseYear": "2005"
    }]
  }, {
    "firstName": "Andrew",
    "lastName": "Dourgarian",
    "favoriteFoods": [
      "Burgers",
      "Spaghetti",
      "steak"
    ],
    "hotLineBling": "false",
    "favoriteMovies": [{
      "movieName": "Kung fu Panda",
      "releaseYear": "2008"
    }, {
      "movieName": "21 Jump Street",
      "releaseYear": "2012"
    }]
  }]
};


fixture.setBase('server/public');
var server = sinon.fakeServer.create();

// Load index.html and call onLoad before each test run.
QUnit.module('DOM manipulation', {
  beforeEach: function() {
    server.respondWith("GET", "/data", [
      200, 
      {"Content-Type": "application/json"}, 
      JSON.stringify(EXAMPLE_DATA)
    ]);

    var mainHtml = fixture.load('views/index.html')
    var container = $('<div>')
      .attr('id', 'fixture')
      .html(mainHtml[0].innerHTML);
    $(document.body).append(container);
    onLoad();
    server.respond();
  },
  afterEach: function() {
    $('#fixture').remove();
    server.restore();
  }
});

QUnit.test('bodyText', function(assert) {
    assert.equal($('#test').text(), 'Hello.');
});

QUnit.test('Get Handlebar Template', function(assert) {
  assert.ok($('#testTemplate').length);
});

