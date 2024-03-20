import React from 'react'
import { useState } from 'react'
export function TwitterFollowCard({ userName, children }) {
    const [isFollowing, setIsFollowing] = useState(false)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-FollowCard-button is-following'
        : 'tw-FollowCard-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-FollowCard'>

            <header className='tw-FollowCard-header'>
                <img
                    className='tw-FollowCard-avatar'
                    alt="Avatar de Midudev"
                    src={`https://unavatar.io/${userName}`} />

                <div className='tw-FollowCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-FollowCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-FollowCard-text'>{text}</span>
                    <span className='tw-FollowCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>

        </article>
    )
}