const brands = [
  { icon: "fab fa-shopify", name: "Shopify" },
  { icon: "fab fa-airbnb", name: "Airbnb" },
  { icon: "fab fa-slack", name: "Slack" },
  { icon: "fas fa-hotel", name: "Hotels" },
  { icon: "fas fa-clinic-medical", name: "Healthcare" },
  { icon: "fas fa-store", name: "Retail" }
];

const TrustedBy = () => {
  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase font-medium text-gray-500 dark:text-gray-400 mb-8">Trusted by innovative companies</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <i className={`${brand.icon} text-4xl`} aria-label={brand.name}></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
