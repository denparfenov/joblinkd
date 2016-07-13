var app = {
  results: {},
  allowedParams: [
    'id', 'pass', 'ip', 'format', 'q', 'l', 'start', 'sort', 'Limit'
  ],
  searchParams: {
    id: '853',
    pass: 'O1F7TGJ5yYcq7RIt',
    ip: '50.18.254.252',
    format: 'json',
    q: '',
    l: '',
    start: 1,
    sort: 'r',
    Limit: 10
  },
  hiddenParams: ['id', 'pass', 'ip', 'format'],
  pages: null,
  locationBind: function() {
    var self = this;
    $(window).bind('load', function(event) {
      var returnLocation = history.location || document.location;
      self.render(returnLocation.pathname);

      setTimeout(function() {
        $(window).on('popstate', function (e) {
          var returnLocation = history.location || document.location;
          self.searchParams = $.extend(self.searchParams, url('?'));
          self.render(returnLocation.pathname, true, true);
        });
      }, 0);
    });
  },
  preparePagination: function() {
    var pages = Math.ceil(this.results.total / this.results.count)
      startPage = parseInt(this.results.start),
      self = this;

    $('#paginationholder').html('');
    $('#paginationholder').html('<ul id="pagination" class="pagination-sm"></ul>');
    $('#pagination').twbsPagination({
        totalPages: pages,
        visiblePages: 7,
        initiateStartPageClick: false,
        startPage: startPage,
        onPageClick: function (event, page) {
          event.preventDefault();
          self.searchParams.start = page;
          self.render('/results', true);
        }
    });
  },
  queryFieldBind: function() {
    var self = this;
    $('input[name="query"]').on('change, keyup, input', function() {
      self.searchParams.q = $(this).val();
    });
    $('input[name="location"]').on('change, keyup, input', function() {
      self.searchParams.l = $(this).val();
    });
  },
  searchBind: function() {
    var self = this;
    $('#search-btn, #search-btn a').on('click', function(e) {
      e.preventDefault();
      self.searchParams.start = 1;
      self.searchParams.sort = 'r';
      self.render('/results', true);
    });
    $('#search-form, #search-form-top').on('keypress', function(e) {
      var code = e.keyCode || e.which;
      if(code == 13) {
        self.searchParams.start = 1;
        self.searchParams.sort = 'r';
        self.render('/results', true);
      }
    });
  },
  prepareSearchParams: function(data) {
    var str = "", self = this;
    for (var key in data) {
      if(_.indexOf(self.hiddenParams, key) != -1) {
        continue;
      }
      if(data[key] == '') {
        continue;
      }
      if(str != "") {
        str += "&";
      }
      str += key + "=" + encodeURIComponent(data[key]);
    }
    return str
  },
  render: function(page, paramsFirst, changeState) {
    var self = this, data = {}, urlParams = url('?') || {};

    paramsFirst = paramsFirst || false;
    changeState = changeState || false;

    switch(page) {
      case '/results':
        if(paramsFirst) {
          _.each(self.allowedParams, function(param) {
            if(!self.searchParams[param] && !urlParams[param]) {
              return;
            }
            if(self.searchParams[param] && self.searchParams[param] != '') {
              data[param] = self.searchParams[param];
            } else {
              data[param] = urlParams[param];
            }
          });
        } else {
          _.each(self.allowedParams, function(param) {
            if(urlParams[param] && urlParams[param] != '') {
              data[param] = urlParams[param];
            } else {
              data[param] = self.searchParams[param];
            }
          });
        }

        if(!jQuery.isEmptyObject(data)) {
          if(data.sort == 'd') {
            self.searchParams.sort = 'd';
            $('#relevance_filter').removeClass('active');
            $('#date_filter').addClass('active');
          } else if (data.sort == 'r') {
            self.searchParams.sort = 'r';
            $('#date_filter').removeClass('active');
            $('#relevance_filter').addClass('active');
          }
          page = page + '?' + self.prepareSearchParams(data);
        }

        this.renderResultsPage(data);
        break;
      case '/terms':
        this.renderTermsPage();
        break;
      default: this.renderIndexPage();
    }

    if(!changeState) {
      window.history.pushState({}, 'Search for a Jobs', page);
    }
  },
  renderTermsPage: function() {
    var self = this;
    $('#intro, #simple-nav, #index-content, #results-content').hide();
    $('#base-nav, #terms-content').show();
  },
  renderIndexPage: function() {
    $('#base-nav, #results-content, #terms-content').hide();
    $('#intro, #simple-nav, #index-content').show();
  },
  renderResultsPage: function(data) {
    var self = this;
    $('#intro, #simple-nav, #index-content, #terms-content').hide();
    $('#base-nav, #results-content').show();
    self.search(data);
  },
  updateResultsTotal: function() {
    $('#results_total').text(this.results.total);
    $('#results_total_title').show();
  },
  resultsFilterBind: function() {
    var self = this;
    $('#relevance_filter').on('click', function(e) {
      e.preventDefault();
      self.searchParams.sort = 'r';
      $('#date_filter').removeClass('active');
      $('#relevance_filter').addClass('active');
      self.render('/results', true);
    });
    $('#date_filter').on('click', function(e) {
      e.preventDefault();
      self.searchParams.sort = 'd';
      $('#relevance_filter').removeClass('active');
      $('#date_filter').addClass('active');
      self.render('/results', true);
    });
  },
  search: function(data) {
    var self = this;
    apiUrl = 'http://api.jobs2careers.com/api/search.php';

    $('#results_total_title').hide();
    $('#pagination').html('');
    $('#jobs').html('');
    $.template('jobsTmpl', $('#jobsTmpl').html());
    $.get(apiUrl, data, function(response) {
      self.results = response;
      _.each(self.results.jobs, function(job) {
        job.description = $('<p>' + job.description + '</p>').text();
        $.tmpl('jobsTmpl', job).appendTo('#jobs');
      });
      self.preparePagination();
      self.updateResultsTotal();
    }, 'json');
  },
  init: function() {
    this.locationBind();
    this.searchBind();
    this.queryFieldBind();
    this.resultsFilterBind();
  }
};

$(function() {
  app.init();
});
