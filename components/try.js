import { useState } from "react";
function SinglePageSlider() {
  const [index, setIndex] = useState(0);
  const length = 3; // number of pages in the slider
  const width = 100 / length; // width of each page in percent
  const { x } = useSpring({ x: index * -100 }); // spring value for the x-offset of the pages

  return (
    <div className="slider">
      {/* render pages here */}

      <button onClick={() => setIndex(index - 1)}>Previous</button>
      <button onClick={() => setIndex(index + 1)}>Next</button>
    </div>
  );
}
export default SinglePageSlider;
