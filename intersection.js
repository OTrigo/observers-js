const divToObserve = document.querySelector("#intersection-test");

const observerOptions = {
  rootMargin: "0px",
  threshold: 0,
};

const intersectionObserverTest = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
    });
  }, observerOptions);

  if (!divToObserve) return;

  observer.observe(divToObserve);
};

intersectionObserverTest();
