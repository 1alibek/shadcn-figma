import React from "react";

const Card = () => {
  return (
    <div>
      <div className="relative my-14 md:pt-24">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
          Why Choose Shadcn UI Pro?
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 mt-8">
        {[
          {
            title: "Simplicity",
            desc: "Our framework is designed to be user-friendly, allowing developers of all levels to create professional-looking applications with ease.",
          },
          {
            title: "Versatility",
            desc: "Shadcn UI Pro is well-suited for a wide range of applications, from corporate websites to e-commerce platforms and personal blogs.",
          },
          {
            title: "Excellent Support",
            desc: "Our dedicated support team is always available to assist you with any issues or questions you may have.",
          },
          {
            title: "Regular Updates",
            desc: "We continually improve and enhance Shadcn UI Pro based on user feedback and emerging industry trends.",
          },
          {
            title: "Thriving Community",
            desc: "Join our active community of developers to collaborate, learn, and access valuable resources.",
          },
        ].map((reason, idx) => (
          <div
            key={idx}
            className="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-neutral-800 dark:focus:outline-none dark:focus:bg-neutral-800"
          >
            <div className="flex-shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200">
              <svg
                className="flex-shrink-0 size-8 text-gray-800 mt-0.5 me-6 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="13.5" cy="6.5" r=".5"></circle>
                <circle cx="17.5" cy="10.5" r=".5"></circle>
                <circle cx="8.5" cy="7.5" r=".5"></circle>
                <circle cx="6.5" cy="12.5" r=".5"></circle>
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="block font-bold text-gray-800 dark:text-white">
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-neutral-400">
                {reason.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;