const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const name1 = document.querySelector('.n1')
const name2 = document.querySelector('.n2')
const name3 = document.querySelector('.n3')
const container = document.querySelector('.container');

img1.addEventListener('mouseover', () => {
  container.style.gridTemplateColumns = '48% 24% 24%';
  name1.style.display = "block"
});

img2.addEventListener('mouseover', () => {
  container.style.gridTemplateColumns = '24% 48% 24%';
  name2.style.display = "block"
});

img3.addEventListener('mouseover', () => {
  container.style.gridTemplateColumns = '24% 24% 48%';
  name3.style.display = "block"
});


img1.addEventListener('mouseleave', () => {
  name1.style.display = "none"
});

img2.addEventListener('mouseleave', () => {
  name2.style.display = "none"
});

img3.addEventListener('mouseleave', () => {
  name3.style.display = "none"
});


container.addEventListener('mouseleave', () => {
  container.style.gridTemplateColumns = '32% 32% 32%';
});