import CurrentPageNav from "../components/CurrentPageNav";

const AboutPage = () => {
  return (
    <>
      <CurrentPageNav props={"About Us"} />
      <div className="mx-10 lg:mx-40 2xl:mx-60 flex flex-col md:flex-row mt-16">
        <div className="md:basis-1/2 text-base font-light leading-relaxed text-gray-400 mr-[22px]">
          <h1 className="font-normal leading-tight text-4xl text-black mb-8">
            Privacy Policy
          </h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum
            mauris, venenatis sit amet porttitor id, laoreet eu magna. In
            convallis diam volutpat libero tincidunt semper. Ut aliquet erat
            rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit
            amet diam malesuada, eget laoreet quam molestie. In id elementum
            turpis. Curabitur quis tincidunt mauris.
          </p>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum
            mauris, venenatis sit amet porttitor id, laoreet eu magna. In
            convallis diam volutpat libero tincidunt semper. Ut aliquet erat
            rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit
            amet diam malesuada, eget laoreet quam molestie. In id elementum
            turpis. Curabitur quis tincidunt mauris.
          </p>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum
            mauris, venenatis sit amet porttitor id, laoreet eu magna. In
            convallis diam volutpat libero tincidunt semper. Ut aliquet erat
            rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit
            amet diam malesuada, eget laoreet quam molestie. In id elementum
            turpis. Curabitur quis tincidunt mauris.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum
            mauris, venenatis sit amet porttitor id, laoreet eu magna. In
            convallis diam volutpat libero tincidunt semper. Ut aliquet erat
            rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit
            amet diam malesuada, eget laoreet quam molestie. In id elementum
            turpis. Curabitur quis tincidunt mauris.
          </p>
        </div>
        <div className="md:basis-1/2 flex-col mt-20 w-full max-w-xl">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="object-contain"
            alt="woman"
          />
          <div className="flex space-x-5 mt-6">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="object-contain w-full"
              alt="woman"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="object-contain w-full"
              alt="woman"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
