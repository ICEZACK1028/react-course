import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
       return (
       <section className='App'>
            <TwitterFollowCard userName="reddit" name="Reddit" initialIsFollowing />
            <TwitterFollowCard userName="elonmusk" name="Elon Musk" initialIsFollowing />
            <TwitterFollowCard userName="Icezack_" name="Isaac García"  initialIsFollowing={false}/>
       </section>
    )
} 