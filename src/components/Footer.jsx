import React from 'react'
import './Footer.css'

export default function Footer({ owner = 'Kossay riahi' }) {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">© {year} {owner}. All rights reserved.</div>

        <div className="footer-right">
          <a className="social" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 .5C5.73.5.75 5.48.75 11.77c0 4.95 3.21 9.15 7.67 10.63.56.1.76-.24.76-.53 0-.26-.01-1.12-.02-2.03-3.12.68-3.78-1.5-3.78-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.16 1.71 1.16 1.01 1.73 2.66 1.23 3.31.94.1-.73.39-1.23.71-1.51-2.49-.28-5.11-1.25-5.11-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.4.11-2.92 0 0 .95-.31 3.12 1.16.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.48 3.12-1.16 3.12-1.16.61 1.52.23 2.64.11 2.92.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.27-5.13 5.55.4.35.75 1.05.75 2.12 0 1.53-.01 2.77-.01 3.14 0 .29.2.64.77.53C20.04 20.92 23.25 16.72 23.25 11.77 23.25 5.48 18.27.5 12 .5z"/>
            </svg>
          </a>

          <a className="social" href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm10 2.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2.2a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
            </svg>
          </a>

          <a className="social" href="https://dev.to/" target="_blank" rel="noreferrer" aria-label="DEV">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
              <path d="M8 9h1.5v6H8zM11 9h2.2c1.1 0 1.8.6 1.8 1.5 0 .8-.5 1.2-1 1.3.6.1 1.1.6 1.1 1.6 0 1.4-1.1 2.1-2.6 2.1H11V9zm2 2h-.9v1.6H13c.6 0 .9-.2.9-.8 0-.5-.3-.8-.9-.8z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
