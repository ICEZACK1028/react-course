import { useState } from "react"

export function TwitterFollowCard ({ userName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const textButton = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClass = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)    
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                src={`https://unavatar.io/${userName}`} 
                alt="El logo de reddit" 
                className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span
                    className='tw-followCard-infoUserName'>@{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    <span className="tw-followCard-text">{textButton}</span>
                    <span className="tw-followCard-stopFollow">Deja de Seguir</span>
                </button>
            </aside>
        </article>
    )
} 