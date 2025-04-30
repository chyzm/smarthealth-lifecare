const spaceId = 'obzflhzns0e1';
const accessToken = 'B2FMbxjpfuPnJ0Q2f-PGQhKvrq_RiMHHfGDZb-Zq3y0';
const endpoint = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=blogPost`;

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("blog-container");

    data.items.forEach(post => {
      const title = post.fields.title;
      const body = post.fields.body.slice(0, 150) + "...";
      const imageId = post.fields.image.sys.id;
      const image = data.includes.Asset.find(asset => asset.sys.id === imageId);
      const imageUrl = image.fields.file.url;

      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";
      col.innerHTML = `
        <div class="blog-card">
          <img src="https:${imageUrl}" alt="${title}">
          <div class="blog-content">
            <h3>${title}</h3>
            <p>${body}</p>
            <a href="blog-post.html?id=${post.sys.id}" class="blog-readmore">Read More</a>
          </div>
        </div>
      `;
      container.appendChild(col);
      // <a href="blog-post.html?id=${post.sys.id}" class="blog-readmore">Read More</a>
      // <a href="#" class="blog-readmore">Read More</a>
    });
  })
  .catch(error => console.error("Failed to fetch blog posts:", error));


