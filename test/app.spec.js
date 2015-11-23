fixture.setBase('server/public');

// Load index.html and call onLoad before each test run.
QUnit.module('DOM manipulation', {
  beforeEach: function() {
    var mainHtml = fixture.load('views/index.html')
    var container = $('<div>')
      .attr('id', 'fixture')
      .html(mainHtml[0].innerHTML);
    $(document.body).append(container);
    onLoad();
  },
  afterEach: function() {
    $('#fixture').remove();
  }
});

QUnit.test('bodyText', function(assert) {
    assert.equal($('#test').text(), 'Hello.');
});

QUnit.test('ajaxGet', function(assert) {

});