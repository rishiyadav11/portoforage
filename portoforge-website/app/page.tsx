import Header from "@/components/ui/Header"
import Hero from "@/components/Hero"

const page = () => {
  return (
    <div className="relative w-full">
      <Header/>
      <div className="absolute inset-0">
        <Hero/>
      </div>
    </div>
  )
}

export default page