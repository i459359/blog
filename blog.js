document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('blogForm');
    const postsContainer = document.getElementById('posts');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const title = form.title.value;
      const content = form.content.value;
  
      if (title.trim() === '' || content.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
      `;
      postsContainer.prepend(postElement);
  
      form.reset();
    });
  });
  