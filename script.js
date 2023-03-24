"use strict"

const sections = document.querySelectorAll('.container');

//revealing elements  when scrolled into view
const revealSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('u-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.4,
});

sections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('u-hidden');
});