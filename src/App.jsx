import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="midudev">
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard userName="ferdeveloperr">
                Fernando Gomez
            </TwitterFollowCard>

            <TwitterFollowCard userName="soydalto">
                Lucas Dalto
            </TwitterFollowCard>
        </section>
    )
}

