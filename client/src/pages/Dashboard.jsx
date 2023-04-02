import { useState, useEffect } from "react"
import Profile from "../components/Profile"

export default function Dashboard() {
    const [items, setItems] = useState([])
    const [user] = useState(user.displayName)

    useEffect(() => {
        const fetchRepos = async () => {
            const res = await fetch(
                `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
            )
            const data = await res.json()
            setItems(data)
            console.log(data)
        }

        fetchRepos()
    }, [user])

    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Dashboard</div>

            <div>
                <div className="pt-10 mx-16">
                    <h1 className="mb-10 font-bold text-2xl text-white">
                        Viewing {user}'s repositories
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 pb-20">
                    {items.map((item) => (
                        <Profile key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
