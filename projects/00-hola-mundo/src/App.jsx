import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
       return (
       <section className='App'>
            <TwitterFollowCard userName="reddit" name="Reddit" />
            <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
            <TwitterFollowCard userName="Icezack_" name="Isaac García" />
       </section>
    )
} 