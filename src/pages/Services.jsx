import Subscribe from "../components/Subscribe";
const Services = () => {
  return (
    <div>
      <Subscribe />
      <div className="flex flex-col lg:flex-row justify-center sm:px-12 lg:px-2">
        <div className="left p-4">
          <h3 className="font-bold text-xl py-3">Services</h3>
          <div className="cart border-2 border-gray-400 bg-slate-200 px-4 mb-4 shadow-lg ">
            <h3 className="font-bold text-xl py-3">Website Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla
              facilisi.
            </p>
            <p className="py-4">Pricing: $1,000 - $3,000</p>
          </div>
          <div className="cart border-2 border-gray-400 bg-slate-200 px-4 mb-4 shadow-lg">
            <h3 className="font-bold text-xl py-3">Website Maintenance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla
              facilisi.
            </p>
            <p className="py-4">Pricing: $250 per month</p>
          </div>
          <div className="cart border-2 border-gray-400 bg-slate-200 px-4 shadow-lg">
            <h3 className="font-bold text-xl py-3">Website Hosting</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla
              facilisi.
            </p>
            <p className="py-4">Pricing: $25 per month</p>
          </div>
        </div>
        <div className="right p-4">
          <form className="text-white bg-gray-600 px-4">
            <h3 className="font-bold text-xl py-3">Get A Quote</h3>
            <div className="pb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="outline-none px-2 text-black w-full"
              />
            </div>
            <div className="pb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="outline-none px-2 text-black w-full"
              />
            </div>
            <div className="pb-4">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                placeholder="Message"
                className="outline-none px-2 text-black resize-none w-full"
              ></textarea>
            </div>
            <div className="pb-4">
              <button className="text-white bg-red-500 py-2 px-4">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Services;
