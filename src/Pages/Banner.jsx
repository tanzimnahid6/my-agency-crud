


const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white py-20 md:py-44">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Agency</h1>
          <p className="text-lg mb-8">We deliver creative solutions to help your business grow.</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 transition-colors duration-300">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
