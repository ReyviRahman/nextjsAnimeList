"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()
  const handleSearch = (e) => {
    e.preventDefault()
    const keyword = searchRef.current.value
    router.push(`/search/${keyword}`)
  }
  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input placeholder="Cari Anime" className="w-full p-2 rounded" ref={searchRef}  />
        <button className="absolute top-2 end-0" type="submit">
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  )
}

export default InputSearch