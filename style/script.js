window.onload = function () {
  const targetElements = document.querySelectorAll('.on-view');

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');
      }
    });
  };

  const options = {
    root: null, // Observe the entire viewport
    threshold: 0.3, // Element is considered in view when 50% visible
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  targetElements.forEach((element) => observer.observe(element));
};

// function Showcontent1() {
//   const item_1 = document.querySelector('.service-accordion-content-wrap1');
//   const item_2 = document.querySelector('.icon-1');
//   const item_3 = document.querySelector('.close-icon-1');

//   item_1.style.height = '65px';
//   item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
//   item_3.style.animation = 'opacityChange1 0.5s ease-in-out forwards';
// }

function toggleContent1() {
  const item_1 = document.querySelector('.service-accordion-content-wrap1');
  const item_2 = document.querySelector('.icon-1');
  const item_3 = document.querySelector('.close-icon-1');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '65px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_3.style.animation = 'opacityChange2 0.5s ease-in-out backwards';
  } else {
    // Forward animation for expanding
    item_1.style.height = '65px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_3.style.animation = 'opacityChange1 0.5s ease-in-out forwards';
  }
}

function toggleContent2() {
  const item_1 = document.querySelector('.service-accordion-content-wrap2');
  const item_2 = document.querySelector('.icon-2');
  const item_3 = document.querySelector('.close-icon-2');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '65px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_3.style.animation = 'opacityChange2 0.5s ease-in-out backwards';
  } else {
    // Forward animation for expanding
    item_1.style.height = '65px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_3.style.animation = 'opacityChange1 0.5s ease-in-out forwards';
  }
}

function toggleContent3() {
  const item_1 = document.querySelector('.service-accordion-content-wrap3');
  const item_2 = document.querySelector('.icon-3');
  const item_3 = document.querySelector('.close-icon-3');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '65px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_3.style.animation = 'opacityChange2 0.5s ease-in-out backwards';
  } else {
    // Forward animation for expanding
    item_1.style.height = '65px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_3.style.animation = 'opacityChange1 0.5s ease-in-out forwards';
  }
}
function toggleContent4() {
  const item_1 = document.querySelector('.service-accordion-content-wrap4');
  const item_2 = document.querySelector('.icon-4');
  const item_3 = document.querySelector('.close-icon-4');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '65px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_3.style.animation = 'opacityChange2 0.5s ease-in-out backwards';
  } else {
    // Forward animation for expanding
    item_1.style.height = '65px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_3.style.animation = 'opacityChange1 0.5s ease-in-out forwards';
  }
}

function toggleContent5() {
  const item_1 = document.querySelector('.accordion-content-wrap1');
  const item_2 = document.querySelector('.accordion-line-vr1');
  const item_3 = document.querySelector('.accordion-wrap1');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '110px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_2.style.transform = 'rotateZ(0deg)';
    item_3.style.backgroundColor = 'rgb(242, 244, 244)';
  } else {
    // Forward animation for expanding
    item_1.style.height = '110px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_2.style.transform = 'rotateZ(90deg)';
    item_3.style.backgroundColor = 'rgb(241, 185, 106)';
  }
}

function toggleContent6() {
  const item_1 = document.querySelector('.accordion-content-wrap2');
  const item_2 = document.querySelector('.accordion-line-vr2');
  const item_3 = document.querySelector('.accordion-wrap2');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '65px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_2.style.transform = 'rotateZ(0deg)';
    item_3.style.backgroundColor = 'rgb(242, 244, 244)';
  } else {
    // Forward animation for expanding
    item_1.style.height = '65px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_2.style.transform = 'rotateZ(90deg)';
    item_3.style.backgroundColor = 'rgb(241, 185, 106)';
  }
}

function toggleContent7() {
  const item_1 = document.querySelector('.accordion-content-wrap3');
  const item_2 = document.querySelector('.accordion-line-vr3');
  const item_3 = document.querySelector('.accordion-wrap3');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '110px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_2.style.transform = 'rotateZ(0deg)';
    item_3.style.backgroundColor = 'rgb(242, 244, 244)';
  } else {
    // Forward animation for expanding
    item_1.style.height = '110px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_2.style.transform = 'rotateZ(90deg)';
    item_3.style.backgroundColor = 'rgb(241, 185, 106)';
  }
}

function toggleContent8() {
  const item_1 = document.querySelector('.accordion-content-wrap4');
  const item_2 = document.querySelector('.accordion-line-vr4');
  const item_3 = document.querySelector('.accordion-wrap4');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '65px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_2.style.transform = 'rotateZ(0deg)';
    item_3.style.backgroundColor = 'rgb(242, 244, 244)';
  } else {
    // Forward animation for expanding
    item_1.style.height = '65px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_2.style.transform = 'rotateZ(90deg)';
    item_3.style.backgroundColor = 'rgb(241, 185, 106)';
  }
}

function toggleContent9() {
  const item_1 = document.querySelector('.accordion-content-wrap9');
  const item_2 = document.querySelector('.accordion-line-vr9');
  const item_3 = document.querySelector('.accordion-wrap9');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '90px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_2.style.transform = 'rotateZ(0deg)';
    item_3.style.backgroundColor = 'rgb(242, 244, 244)';
  } else {
    // Forward animation for expanding
    item_1.style.height = '90px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_2.style.transform = 'rotateZ(90deg)';
    item_3.style.backgroundColor = 'rgb(241, 185, 106)';
  }
}

function toggleContent10() {
  const item_1 = document.querySelector('.accordion-content-wrap10');
  const item_2 = document.querySelector('.accordion-line-vr10');
  const item_3 = document.querySelector('.accordion-wrap10');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '65px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_2.style.transform = 'rotateZ(0deg)';
    item_3.style.backgroundColor = 'rgb(242, 244, 244)';
  } else {
    // Forward animation for expanding
    item_1.style.height = '65px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_2.style.transform = 'rotateZ(90deg)';
    item_3.style.backgroundColor = 'rgb(241, 185, 106)';
  }
}

function toggleContent11() {
  const item_1 = document.querySelector('.accordion-content-wrap11');
  const item_2 = document.querySelector('.accordion-line-vr11');
  const item_3 = document.querySelector('.accordion-wrap11');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '65px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_2.style.transform = 'rotateZ(0deg)';
    item_3.style.backgroundColor = 'rgb(242, 244, 244)';
  } else {
    // Forward animation for expanding
    item_1.style.height = '65px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_2.style.transform = 'rotateZ(90deg)';
    item_3.style.backgroundColor = 'rgb(241, 185, 106)';
  }
}

function toggleContent12() {
  const item_1 = document.querySelector('.accordion-content-wrap12');
  const item_2 = document.querySelector('.accordion-line-vr12');
  const item_3 = document.querySelector('.accordion-wrap12');

  // Store the current animation state (expanded or collapsed)
  const isExpanded = item_1.style.height === '65px';

  if (isExpanded) {
    // Reverse animation for collapsing
    item_1.style.height = '0px';
    item_2.style.animation = 'opacityChange1 0.5s ease-in-out backwards';
    item_2.style.transform = 'rotateZ(0deg)';
    item_3.style.backgroundColor = 'rgb(242, 244, 244)';
  } else {
    // Forward animation for expanding
    item_1.style.height = '65px';
    item_2.style.animation = 'opacityChange2 0.5s ease-in-out forwards';
    item_2.style.transform = 'rotateZ(90deg)';
    item_3.style.backgroundColor = 'rgb(241, 185, 106)';
  }
}

function toggleFeatures1() {
  const item_1 = document.querySelector('.list-detailed1');
  const item_2 = document.querySelector('.seeallfeature1');
  const item_3 = document.querySelector('.seelessfeature1');

  const isVisible = item_1.style.display === 'block';

  if (isVisible) {
    item_1.style.display = 'none';
    item_2.style.display = 'block';
    item_3.style.display = 'none';
  } else {
    item_1.style.display = 'block';
    item_2.style.display = 'none';
    item_3.style.display = 'block';
  }
}

function toggleFeatures2() {
  const item_1 = document.querySelector('.list-detailed2');
  const item_2 = document.querySelector('.seeallfeature2');
  const item_3 = document.querySelector('.seelessfeature2');

  const isVisible = item_1.style.display === 'block';

  if (isVisible) {
    item_1.style.display = 'none';
    item_2.style.display = 'block';
    item_3.style.display = 'none';
  } else {
    item_1.style.display = 'block';
    item_2.style.display = 'none';
    item_3.style.display = 'block';
  }
}

function toggle3dashbutton() {
  const three_dash_button = document.getElementById(
    'w-node-bc339dbc-2a59-0847-4b81-c02c2ccf17dd-2ccf17b1'
  );
  const item_2 = document.querySelector('.nav-menu-mobile');
  const item_3 = document.getElementById('w-nav-overlay-0');

  const isExpanded = item_3.style.display === 'block';

  if (isExpanded) {
    item_2.style.animation = 'three_dash_button_disappear 0.4s ease';
  } else {
    item_3.style.height = '2000px';
    item_3.style.display = 'block';
    item_2.style.animation = 'three_dash_button_slidedown 0.4s ease ';
  }

  item_2.addEventListener('animationend', function () {
    if (item_2.style.animationName === 'three_dash_button_disappear') {
      item_3.style.display = 'none';
      item_3.style.height = '0';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  let slides = document.querySelectorAll('.testimonial-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }

  function prevSlide() {
    let prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevSlide);
  }

  document.querySelector('.right-arrow').addEventListener('click', nextSlide);
  document.querySelector('.left-arrow').addEventListener('click', prevSlide);

  // Initialize the first slide as active
  slides[currentSlide].classList.add('active');
});
