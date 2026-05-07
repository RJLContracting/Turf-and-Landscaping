export default function App() {
  const services = [
    {
      title: "Artificial Turf",
      description:
        "Premium low-maintenance turf installations designed for year-round beauty, durability, and natural appearance.",
    },

    {
      title: "Landscaping",
      description:
        "Custom landscape design and installation tailored to enhance curb appeal and outdoor functionality.",
    },

    {
      title: "Retaining Walls",
      description:
        "Strong and visually appealing retaining wall systems built for stability, drainage, and long-term performance.",
    },

    {
      title: "Drainage",
      description:
        "Professional drainage solutions to protect your property from water buildup, erosion, and flooding issues.",
    },

    {
      title: "Fence Installation",
      description:
        "Quality fence installations providing privacy, security, and a clean finished appearance for your property.",
    },

    {
      title: "Outdoor Renovations",
      description:
        "Transform your outdoor living space with custom renovation solutions built for comfort and style.",
    },
  ]

  const specSheets = [
    {
      name: "Kentucky Blue Plus",
      description:
        "A lush natural-looking turf designed for premium residential lawns with soft texture and year-round color.",
    },

    {
      name: "Bermuda Blend",
      description:
        "Durable and heat-resistant artificial grass ideal for high-traffic areas and active outdoor spaces.",
    },

    {
      name: "Paspalum Pro",
      description:
        "Professional-grade turf featuring enhanced drainage and realistic blade appearance for luxury landscapes.",
    },

    {
      name: "Fresh Cut Pro",
      description:
        "A vibrant freshly-cut lawn appearance with soft fibers designed for modern residential properties.",
    },

    {
      name: "Pro Cut",
      description:
        "Heavy-duty artificial turf built for durability, commercial applications, and long-lasting performance.",
    },

    {
      name: "Pet Turf",
      description:
        "Pet-friendly turf system designed for superior drainage, odor control, and easy maintenance.",
    },
  ]

  return (
    <div
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          background: "rgba(0,0,0,0.85)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #222",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            letterSpacing: "1px",
          }}
        >
          Arrowsmith Turf & Landscaping
        </h2>

        <div style={{ display: "flex", gap: "25px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>

          <a href="#services" style={{ color: "white", textDecoration: "none" }}>
            Services
          </a>

          <a href="#gallery" style={{ color: "white", textDecoration: "none" }}>
            Gallery
          </a>

          <a
            href="/turf-specs/spec-sheets/index.html"
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
          >
            Specs
          </a>

          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          height: "92vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.75))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "950px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              marginBottom: "20px",
              lineHeight: "1.1",
            }}
          >
            Premium Landscaping & Artificial Turf
          </h1>

          <p
            style={{
              fontSize: "24px",
              marginBottom: "35px",
              color: "#ddd",
              lineHeight: "1.6",
            }}
          >
            Serving Parksville, Nanaimo, Qualicum Beach, and communities across Vancouver Island.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: "18px 35px",
                fontSize: "18px",
                background: "green",
                border: "none",
                borderRadius: "12px",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Get A Free Quote
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("gallery")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{
                padding: "18px 35px",
                fontSize: "18px",
                background: "transparent",
                border: "2px solid white",
                borderRadius: "12px",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "100px 50px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url('/Images/gallery/grass2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "50px", marginBottom: "20px" }}>
            Our Services
          </h2>

          <p style={{ color: "#aaa", fontSize: "20px" }}>
            Professional outdoor solutions built for Vancouver Island living
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: "rgba(20,20,20,0.92)",
                padding: "35px",
                borderRadius: "25px",
                border: "1px solid #2b2b2b",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "15px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#bbb",
                  lineHeight: "1.7",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        style={{
          padding: "120px 50px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url('/Images/gallery/grass3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <h2
            style={{
              fontSize: "56px",
              marginBottom: "20px",
            }}
          >
            See Our Work
          </h2>

          <p
            style={{
              color: "#bbb",
              fontSize: "22px",
            }}
          >
            Explore recent landscaping and artificial turf projects.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "35px",
          }}
        >
          {[
            "/Images/gallery/project1.jpg",
            "/Images/gallery/project2.jpg",
            "/Images/gallery/grass2.jpg",
            "/Images/gallery/grass3.jpg",
            "/Images/gallery/grass4.jpg",
            "/Images/gallery/grassnew.jpg",
          ].map((image, index) => (
            <div
              key={index}
              style={{
                height: "380px",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "28px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
              }}
            />
          ))}
        </div>
      </section>

      {/* AI SECTION */}
      <section
        style={{
          padding: "100px 50px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url('/Images/gallery/grassnew.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
            marginBottom: "25px",
          }}
        >
          AI Customer Assistant
        </h2>

        <p
          style={{
            color: "#bbb",
            fontSize: "22px",
            maxWidth: "850px",
            margin: "0 auto 50px auto",
            lineHeight: "1.7",
          }}
        >
          Instantly get answers about turf products, landscaping services,
          drainage, pet turf, project ideas, and quote requests.
        </p>

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "rgba(15,15,15,0.95)",
            borderRadius: "30px",
            padding: "50px",
            border: "1px solid #2b2b2b",
          }}
        >
          <h3
            style={{
              fontSize: "34px",
              marginBottom: "20px",
            }}
          >
            Live AI Support Available
          </h3>

          <p
            style={{
              color: "#aaa",
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            Use the AI chat bubble in the bottom corner of the website to ask
            questions, request quotes, compare turf products, or get guidance
            for your outdoor project.
          </p>
        </div>
      </section>

      {/* SPEC SHEETS */}
      <section
        style={{
          padding: "100px 50px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url('/Images/gallery/grass4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "50px", marginBottom: "20px" }}>
            Turf Spec Sheets
          </h2>

          <p style={{ color: "#aaa", fontSize: "20px" }}>
            Browse product specifications and turf information
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {specSheets.map((spec) => (
            <div
              key={spec.name}
              style={{
                background: "rgba(20,20,20,0.92)",
                padding: "30px",
                borderRadius: "25px",
                border: "1px solid #2b2b2b",
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  marginBottom: "15px",
                }}
              >
                {spec.name}
              </h3>

              <p
                style={{
                  color: "#bbb",
                  marginBottom: "25px",
                  lineHeight: "1.7",
                }}
              >
                {spec.description}
              </p>

              <a
                href="/turf-specs/spec-sheets/index.html"
                target="_blank"
                style={{
                  display: "inline-block",
                  padding: "14px 24px",
                  background: "green",
                  color: "white",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Spec Sheet
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "100px 50px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url('/Images/gallery/project1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "50px", marginBottom: "20px" }}>
            Request A Quote
          </h2>

          <p style={{ color: "#aaa", fontSize: "20px" }}>
            Let’s bring your outdoor vision to life
          </p>
        </div>

        <form
          action="https://formsubmit.co/yourrealemail@gmail.com"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "700px",
            margin: "0 auto",
            background: "rgba(15,15,15,0.92)",
            padding: "40px",
            borderRadius: "25px",
            border: "1px solid #2b2b2b",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            style={{
              padding: "18px",
              borderRadius: "12px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            style={{
              padding: "18px",
              borderRadius: "12px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            style={{
              padding: "18px",
              borderRadius: "12px",
              border: "none",
              fontSize: "16px",
            }}
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            required
            style={{
              padding: "18px",
              borderRadius: "12px",
              border: "none",
              minHeight: "180px",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "18px",
              background: "green",
              border: "none",
              borderRadius: "12px",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}