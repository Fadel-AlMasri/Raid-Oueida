export const prevSlide = (currentIndex: number, setCurrentIndex: any) => {
  let newIndex: number;
  if (currentIndex !== 0) {
    newIndex = currentIndex - 1;
  } else {
    newIndex = 0;
  }
  setCurrentIndex(newIndex);
};

export const nextSlide = (
  currentIndex: number,
  lastIndex: number,
  setCurrentIndex: any
) => {
  let newIndex: number;

  if (currentIndex !== lastIndex) {
    newIndex = currentIndex + 1;
  } else {
    newIndex = lastIndex;
  }
  setCurrentIndex(newIndex);
};
