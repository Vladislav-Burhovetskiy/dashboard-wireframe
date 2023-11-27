fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById(
      "author"
    ).textContent = `By: ${data.user.name}, ${data.user.location}`;
  })
  .catch((err) => {
    // Use a default background image/author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1490682143684-14369e18dce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDExMDEyMjh8&ixlib=rb-4.0.3&q=80&w=1080&quot;)`;
    document.getElementById(
      "author"
    ).textContent = `By: Artem Sapegin, Berlin, Germany`;
  });
