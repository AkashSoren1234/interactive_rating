console.log("hi");

const ratings = document.querySelectorAll(".rating-number");
const submitBtn = document.querySelector(".submit-button");
const frontContent = document.querySelector(".content");
const feedbackContent = document.querySelector(".feedback-content");
const selected_rating_text = document.querySelector(".selected-rating-text");

let selected_value = "";

ratings.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    ratings.forEach((rating) => {
      rating.classList.remove("active");
    });
    event.target.classList.add("active");
   let selected_value = event.target.textContent;
   selected_rating_text.textContent = `You selected ${selected_value} out of 5`;
    ratings.forEach((rating) => {
      rating.style.color = "hsl(217, 12%, 63%)";
      rating.style.backgroundColor = "hsla(225, 7%, 35%, 0.325)";
    });
    event.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    event.target.style.color = "white";
    ratings.forEach((rating) => {
      rating.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("active")) {
          return;
        }
        event.target.style.backgroundColor = "hsl(217, 12%, 63%)";
        event.target.style.color = "hsl(0, 0%, 100%)";
      });
    });
    ratings.forEach((rating) => {
      rating.addEventListener("mouseleave", (event) => {
        if (event.target.classList.contains("active")) {
          return;
        }
        event.target.style.backgroundColor = "hsla(225, 7%, 35%, 0.325)";
        event.target.style.color = "hsl(217, 12%, 63%)";
      });
    });
  });
});

submitBtn.addEventListener("click", () => {
 ratings.forEach((rating) => {
  if (rating.classList.contains("active")) {
      frontContent.classList.add("hide");
      feedbackContent.classList.remove("hide");
   }
  })
});
