import Subscribe from "../components/Subscribe";

const About = () => {
  return (
    <div>
      <Subscribe />
      <div className="py-6 px-16 md:px-6 lg:px-16 flex flex-col md:flex-row gap-8">
        <div className="left">
          <h3 className="text-gray font-bold py-2">About Us</h3>
          <p className="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum.
            Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget
            porta in, lacinia et magna. Nam eget eros non orci consectetur
            congue at ac augue. Proin eget arcu in enim feugiat ultricies.
            Curabitur maximus metus nec metus pretium viverra at et orci.
            Integer hendrerit ante ut placerat cursus.
          </p>
          <p className="text-white bg-gray-600 p-4">
            Aliquam eget pharetra diam. Nulla placerat lorem at turpis tempor,
            vel ultrices dui tincidunt. Proin quis egestas lorem. Mauris
            vehicula lectus odio, sit amet dictum justo feugiat a. Praesent id
            dictum lacus. Sed ullamcorper id erat ut dictum. Fusce porttitor
            lorem sapien, in aliquet sapien convallis et. Donec nec mauris
            nulla. Curabitur cursus semper odio, et hendrerit ante. Nunc at
            cursus ante. Maecenas gravida ligula ut efficitur suscipit. Nulla id
            turpis varius, pretium nunc sed, fermentum sem. Sed lacinia nunc non
            interdum pellentesque.
          </p>
        </div>
        <div className="right text-white bg-gray-600 p-4 h-fit">
          <h3 className="py-2 font-bold">What We Do</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum.
            Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget
            porta in, lacinia et magna
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
