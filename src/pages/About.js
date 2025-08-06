import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 w-full">
      <section
        style={{
          position: "relative",
          height: "600px",
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-hero1.jpg)`,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}  >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="text-center text-white px-3">
            <h1 className="display-4 fw-bold">About for Bacola</h1>
            <p className="lead mt-2" style={{ fontWeight: '600', fontSize: '13px', fontFamily: 'Inter' }}>
              WE CAN DO MORE FOR YOU
            </p>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          <p className="text-gray-700 text-lg leading-relaxed mb-4" style={{ fontSize: '15px', fontFamily: 'Inter', fontWeight: '400' }}>
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis.
            Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id rutrum ex.
            Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum.
            Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel
            vulputate tortor blandit nec.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-3" style={{ marginLeft: '30px', fontWeight: 'bold', fontFamily: 'Inter' }}>
            Quisque erat urna, congue et libero in <br /> eleifend euismod velit.
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mt-4" style={{ fontSize: '15px', fontFamily: 'Inter', fontWeight: '400' }}>
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis.
            Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id rutrum ex.
            Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta
            auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor
            blandit nec.
          </p>
        </div>
      </section>

  
      <section className="container mx-auto px-4 py-10">
        <div className="row align-items-start">
          <div className="col-md-6 mb-4 position-relative" style={{ position: 'relative' }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/about-hero.png`}

              alt="CEO"
              className="img-fluid w-100"
              style={{
                objectFit: 'cover',
                maxHeight: '800px',
              }}
            />
            <div className="custom-box">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit
ante, vel vulputate tortor blandit nec.
            </div>
          </div>

          <div className="col-md-6" style={{ fontSize: '15px', fontFamily: 'Inter' ,marginTop:'70px'}}>
            <p className='mb-1'>
              Rachel Leonard - Bacola CEO
            </p>
            <h2 style={{ marginTop: '30px', marginBottom: '40px', fontWeight: 'bold' }}>
              Duis convallis luctus pretium. Pellentesque habitant morbi
            </h2>
            <p style={{ textAlign: 'justify' }}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
facilisis.            </p>
            <p style={{ textAlign: 'justify' }}>
In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida,
dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor
at neque. Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo
bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum
dictum felis. In semper laoreet dui vitae pharetra. Etiam sit amet molestie nulla,
eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut
dignissim blandit urna, eget euismod leo rhoncus nec. Vestibulum ante ipsum
primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis
libero ante. Nullam in feugiat erat. Aenean sed justo dapibus, sodales nisi ut,
fringilla lorem. Vestibulum in orci ac nisl condimentum fermentum at et sem.
Curabitur fermentum dolor eu lacus consectetur varius.            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-10 mx-auto">
            <p style={{ textAlign: 'justify', fontSize: '15px', fontFamily: 'Inter' }}>
In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
