const Contact = () => {
    return (
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-around mb-10">
            <div className="w-full md:w-2/3">
              <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 text-gray-900 rounded-lg" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 text-gray-900 rounded-lg" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
                  <textarea id="message" className="w-full px-4 py-2 text-gray-900 rounded-lg" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="font-medium bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  