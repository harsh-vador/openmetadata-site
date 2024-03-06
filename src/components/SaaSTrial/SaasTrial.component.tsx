import React from "react";
const SaasTrial = () => {
  return (
    <section className="bg-cloud bg-img-cover  overlay overlay-light overlay-80  relative pt-10 pb-5 overflow-hidden">
      <div className="container px-5 z-10 relative">
        <div className="row gx-5 justify-center">
          <div className="col-lg-8">
            <div className="text-center mb-10">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-3xl mb-5">
                OpenMetadata on Cloud
              </h2>
              <p className="text-lg md:text-xl">
                Benefit from the OpenMetadata SaaS Trial Offer!
              </p>
              <p className="text-lg md:text-xl mb-5">
                Explore the all-in-one platform for data discovery, governance,
                lineage, observability, quality, & collaboration for centralized
                metadata management. <br /> Go ahead and access the full suite
                of features to rebuild trust in your data.
              </p>
              <p>
                <a
                  href="https://getcollate.io"
                  target="_blank"
                  className="btn-sm btn-primary px-3 py-3 rounded-md transition duration-300 ease-in-out  text-white hover:no-underline	"
                >
                  Sign Up for the SaaS Trial
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-light z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.54 17.34"
          preserveAspectRatio="none"
          className="fill-current"
        >
          <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0" />
        </svg>
      </div>
    </section>
  );
};

export default SaasTrial;
