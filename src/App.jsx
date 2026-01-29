import React, { useState } from 'react';
import { SiSpotify, SiApplemusic, SiInstagram, SiX, SiTiktok, SiYoutube } from 'react-icons/si';
import { Monitor, Mail, Phone } from 'lucide-react';

function App() {
    const [inputType, setInputType] = useState('email');

    return (
        <div className="app-container">
            {/* Socials - Bottom Left */}
            <div className="socials">
                <a href="#" aria-label="Spotify"><SiSpotify /></a>
                <a href="#" aria-label="Apple Music"><SiApplemusic /></a>
                <a href="#" aria-label="Instagram"><SiInstagram /></a>
                <a href="#" aria-label="X (Twitter)"><SiX /></a>
                <a href="#" aria-label="TikTok"><SiTiktok /></a>
                <a href="#" aria-label="YouTube"><SiYoutube /></a>
                <a href="#" aria-label="Website"><Monitor size={20} /></a>
            </div>

            <div className="split-layout">
                {/* Left Side */}
                <div className="left-panel">
                    <div className="logo-pill">
                        <h1 className="logo-text">rex orange county</h1>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="right-panel">
                    <div className="form-wrapper">
                        <h2 className="join-title">JOIN</h2>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                {inputType === 'email' ? (
                                    <div className="icon-input">
                                        <span className="input-icon"><Mail size={18} /></span>
                                        <input type="email" placeholder="Email" autoFocus />
                                    </div>
                                ) : (
                                    <div className="icon-input">
                                        <span className="input-icon"><Phone size={18} /></span>
                                        <input type="tel" placeholder="Phone Number" autoFocus />
                                    </div>
                                )}
                            </div>

                            <div className="switch-link">
                                <button
                                    type="button"
                                    className="text-btn"
                                    onClick={() => setInputType(inputType === 'email' ? 'phone' : 'email')}
                                >
                                    {inputType === 'email' ? 'Switch to phone number' : 'Switch to email'}
                                </button>
                            </div>

                            <button type="submit" className="submit-btn">
                                Continue
                            </button>
                        </form>
                    </div>

                    <div className="privacy-footer">
                        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy notice</a>
                        <span>|</span>
                        <span>OpenStage</span>
                        <span className="footer-logo-number">8</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
