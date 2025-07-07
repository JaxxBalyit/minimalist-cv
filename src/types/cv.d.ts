export interface Basics {
    name: string
    label: string
    image: string
    email: string
    phone: string
    summary: string
    location: {
      city: string
      region: string
    }
    profiles: {
      network: string
      url: string
      username?: string
    }[]
}

export interface CV {
basics: Basics
// Puedes agregar más secciones si las tienes, como work, education, etc.
}

declare module "@cv" {
    const value: import("./cv.json").CV
    export default value
}