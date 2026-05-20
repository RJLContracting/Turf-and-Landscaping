import { useEffect, useState } from "react"
import { supabase } from "./supabase"

export default function Admin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  const [galleryImages, setGalleryImages] = useState([])

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    const { data, error } = await supabase.storage
      .from("gallery")
      .list("", {
        limit: 100,
      })

    if (error) {
      console.log(error)
      return
    }

    const imageUrls = data.map((file) => {
      const {
        data: { publicUrl },
      } = supabase.storage
        .from("gallery")
        .getPublicUrl(file.name)

      return {
        name: file.name,
        url: publicUrl,
      }
    })

    setGalleryImages(imageUrls)
  }

  async function handleLogin(e) {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert("Login failed")
      return
    }

    setLoggedIn(true)
  }

  async function handleUpload() {
    if (!file) {
      alert("Please choose a file")
      return
    }

    setUploading(true)

    const fileName = `${Date.now()}-${file.name}`

    const { error } = await supabase.storage
      .from("gallery")
      .upload(fileName, file)

    setUploading(false)

    if (error) {
      console.log(error)
      alert("Upload failed")
      return
    }

    alert("Upload successful!")

    setFile(null)

    fetchImages()
  }

  async function deleteImage(imageName) {
    const confirmDelete = window.confirm(
      "Delete this image permanently?"
    )

    if (!confirmDelete) return

    const { error } = await supabase.storage
      .from("gallery")
      .remove([imageName])

    if (error) {
      console.log(error)
      alert("Delete failed")
      return
    }

    fetchImages()
  }

  if (!loggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#050505",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            background: "#111",
            padding: "40px",
            borderRadius: "20px",
            width: "350px",
            boxShadow: "0 0 40px rgba(0,0,0,0.5)",
          }}
        >
          <h1
            style={{
              color: "white",
              marginBottom: "25px",
            }}
          >
            Admin Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "#4ade80",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          color: "#4ade80",
          marginBottom: "20px",
          fontSize: "42px",
        }}
      >
        Arrowsmith Turf Admin Panel
      </h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#4ade80",
            color: "black",
            padding: "14px 22px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          View Live Website
        </a>

        <button
          onClick={async () => {
            await supabase.auth.signOut()
            setLoggedIn(false)
          }}
          style={{
            background: "#ef4444",
            color: "white",
            padding: "14px 22px",
            borderRadius: "12px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "25px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2
            style={{
              color: "#4ade80",
              marginBottom: "20px",
            }}
          >
            Upload New Project
          </h2>

          <div
            style={{
              color: "#ccc",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Recommended:
            <br />
            • Landscape photos
            <br />
            • Turf installations
            <br />
            • Before & after photos
            <br />
            • High quality phone photos
          </div>

          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{
              marginBottom: "20px",
              color: "white",
            }}
          />

          <button
            onClick={handleUpload}
            disabled={uploading}
            style={{
              width: "100%",
              padding: "15px",
              background: "#4ade80",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {uploading ? "Uploading..." : "Ready To Upload"}
          </button>

          <div
            style={{
              marginTop: "20px",
              color: "#888",
              fontSize: "14px",
              lineHeight: "1.7",
            }}
          >
            Uploaded images automatically appear on the website gallery.
            <br />
            Changes are live instantly for customers.
          </div>
        </div>

        <div
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2
            style={{
              color: "#4ade80",
              marginBottom: "20px",
            }}
          >
            Quick Admin Notes
          </h2>

          <div
            style={{
              color: "#ccc",
              lineHeight: "2",
            }}
          >
            ✅ Uploaded images automatically appear on the website.
            <br />
            ✅ Changes are live instantly for customers.
            <br />
            ✅ Delete old projects anytime below.
            <br />
            ⚠ Avoid uploading blurry or duplicate images.
            <br />
            ⚠ Best image size: 1200x800 or larger.
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#111",
          padding: "30px",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <h2
            style={{
              color: "#4ade80",
            }}
          >
            Current Website Gallery
          </h2>

          <div
            style={{
              background: "#222",
              color: "#aaa",
              padding: "10px 15px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
          >
            {galleryImages.length} Images
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.name}
              style={{
                background: "#181818",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={image.url}
                alt=""
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "contain",
                  display: "block",
                }}
              />

              <div
                style={{
                  padding: "15px",
                }}
              >
                <button
                  onClick={() => deleteImage(image.name)}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Delete Image
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}