import hero from "../assets/images/about-us-img.jpg";

function About() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col gap-12 md:gap-0 md:flex-row">
        <div className="w-full max-w-3xl mt-16 flex flex-col gap-16 text-center md:text-left">
          <div className="max-w-[480px] tracking-wider">
            <h1 className="mb-4 text-3xl font-semibold">About Us</h1>
            <p className="mb-6 leading-7">
              Image evening evening. Given she'd dominion herb You'll them.
              Given whose, above. Place waters. Of give it winged above blessed
              every replenish multiply won't saying tree saying waters
              replenish. Tree give upon without them yielding him green. Image.
            </p>
            <p className="leading-7">
              Under. Yielding, spirit. Dry saw two shall is they're kind seas be
              were first earth forth. The. And seas a given. From. Them you're
              darkness fill brought divide you're rule.
            </p>
          </div>

          <div className="max-w-[480px] tracking-wider">
            <h1 className="mb-4 text-3xl font-semibold">Our Mission</h1>
            <p className="mb-6 leading-7">
              Greater for days morning seasons you unto first. Seed spirit
              multiply air cattle beginning let, open blessed. Own midst divide
              be blessed him over green him.
            </p>
            <p className="leading-7">
              Own in. Won't. Very spirit. Without forth Forth saw replenish
              image. And creature. Likeness, dominion female dominion she'd.
              Appear years dry us bring she'd together. Living fruit.
            </p>
          </div>
        </div>

        <div className="mt-3">
          <img className="max-h-[800px] w-full object-fill" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
