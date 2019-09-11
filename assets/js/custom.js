function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('blog');
const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.qbatch.com/feed';
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let posts = data.items;
    return posts.map(function(post) {
      let div = createNode('div'),
      <div class="single-blog-item position-relative">
          <div class="date-bg-shape position-absolute">
              <img src="assets/img/shapes/blog-date-shape.svg" class="svg" alt="">
          </div>

          <div class="blog-content">
              <p class="posted-on">18 Feb</p>
              <p class="category">Corporate</p>

              <h3 class="blog-title">How Can You Maximize Your
              Savings in the New Year</h3>

              <p class="blog-excerpt">Rooms oh fully taken by worse do. To points afraid but may end law lasted was out laughter raptures. Improved own
              provided blessing may peculiar domestic.</p>
          </div>

          <div class="blog-hover text-center text-white position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-overlay" data-bg-img="assets/img/blog/blog-1.jpg">
              <h3 class="blog-title"><a href="#">How Can You Maximize Your Savings in the New Year</a></h3>
          </div>

          <div class="blog-button position-absolute w-100 d-flex align-items-center justify-content-center" data-bg-img="">
              <img src="assets/img/shapes/blog-shape.svg" class="svg" alt="">
              <a href="#" class="btn-inline">Read More</a>
          </div>
      </div>
    })
  })
  .catch(function(error) {
    console.log(error);
  });
