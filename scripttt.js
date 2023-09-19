document.addEventListener("DOMContentLoaded", function () {
    const fetchBooksButton = document.getElementById("fetchProducts");
  
    fetchBooksButton.addEventListener("click", function () {
      fetch(`joke.json`)
        //   .then((response) =>
        //     response.json().then((res) => {
        //       console.log(res);
        //     })
        //   )
  
        .then((response) => {
          // console.log(response);
          response.json().then((res) => {
            res.forEach((products) => {
              console.log(products);
              const productItem = document.getElementById("jokeList");
  
              productItem.innerHTML += `<tr style="border: 1px solid black" >
                      <td>${joke.category}</td>
                      <td>${joke.name}</td>
                      
                      </tr>`;
            });
          });
        })
  
        .catch((error) => {
          console.error("Error fetching products data:", error);
        });
    });
  });
  