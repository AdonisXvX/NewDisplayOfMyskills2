import React from 'react'
import './SectionCards.css'
// images are provided via gradients; react.svg not required here

export default function SectionCards() {
  const cards = [
    { 
      title: 'Web Development',
      slug: 'web-dev',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
      shadow: '#6366f1'
    },
    { 
      title: 'Meta Marketing',
      slug: 'marketing',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      shadow: '#f59e0b'
    },
    { 
      title: 'AI Development',
      slug: 'ai-dev',
      gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      shadow: '#10b981'
    }
  ]

  return (
    <div className="section-cards">
      {cards.map((c) => {
        const style = c.img
          ? { backgroundImage: `url(${c.img})`, ['--shadow-color']: `${c.shadow}66` }
          : { backgroundImage: c.gradient, ['--shadow-color']: `${c.shadow}66` }

        return (
          <a
            key={c.slug}
            className="section-card"
            href={`/section/${c.slug}`}
            style={style}
            aria-label={c.title}
          >
            <div className="card-overlay">
              <h3>{c.title}</h3>
            </div>
          </a>
        )
      })}
    </div>
  )
}
