import starImg from "../assets/images/icon-star.svg";
function Heading() {
  return (
    <div className="flex items-center gap-5">
      <div>
        <img src={starImg} alt="" />
      </div>

      <h1 className="text-darkPurple font-bold text-5xl">FAQs</h1>
    </div>
  );
}

export default Heading;
