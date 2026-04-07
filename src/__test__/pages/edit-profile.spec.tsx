import { render, screen } from "@testing-library/react"
import EditProfilPage from "@/pages/profile/edit/index"

describe("Edit Profile Page", () => {
  it("renders edit profile page with title and description", () => {
    const view = render(<EditProfilPage />)
    expect(screen.getByText("Edit Profil Mahasiswa")).toBeInTheDocument()
    expect(screen.getByText("ini adalah halaman untuk mengedit profil mahasiswa")).toBeInTheDocument()
    expect(view).toMatchSnapshot()
  })

  it("displays edit profile heading", () => {
    const { container } = render(<EditProfilPage />)
    const h1 = container.querySelector('h1')
    expect(h1?.textContent).toBe("Edit Profil Mahasiswa")
  })

  it("displays description paragraph", () => {
    const { container } = render(<EditProfilPage />)
    const p = container.querySelector('p')
    expect(p?.textContent).toContain("mengedit profil mahasiswa")
  })
})
