import React, { useState, useRef } from 'react';
import { SiSpotify, SiApplemusic, SiInstagram, SiX, SiTiktok, SiYoutube } from 'react-icons/si';
import { Monitor, Mail, Phone } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows } from '@react-three/drei';

function Model(props) {
    const { scene } = useGLTF('/rex.glb');
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.5; // Spin speed
        }
    });

    return <primitive object={scene} ref={ref} {...props} />;
}

function App() {
    const [inputType, setInputType] = useState('email');

    return (
        <div className="app-container">
            {/* Socials - Bottom Left */}
            <div className="socials">
                <a href="https://open.spotify.com/search/Rex%20Orange%20County" aria-label="Spotify" target="_blank" rel="noopener noreferrer"><SiSpotify /></a>
                <a href="https://music.apple.com/us/search?term=Rex%20Orange%20County" aria-label="Apple Music" target="_blank" rel="noopener noreferrer"><SiApplemusic /></a>
                <a href="https://www.instagram.com/rexorangecounty/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><SiInstagram /></a>
                <a href="https://x.com/rexorangecounty" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer"><SiX /></a>
                <a href="https://www.tiktok.com/@rex" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><SiTiktok /></a>
                <a href="https://www.youtube.com/@RexOrangeCounty" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><SiYoutube /></a>
                <a href="https://www.rexorangecounty.com/" aria-label="Website" target="_blank" rel="noopener noreferrer"><Monitor size={20} /></a>
            </div>

            <div className="split-layout">
                {/* Left Side */}
                <div className="left-panel" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="logo-pill" style={{ zIndex: 10, marginBottom: '20px' }}>
                        <h1 className="logo-text">rex orange county</h1>
                    </div>

                    {/* 3D Scene */}
                    <div style={{ width: '100%', height: '600px', position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
                        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <pointLight position={[-10, -10, -10]} />
                            <Model scale={3} position={[0, -2, 0]} />
                            <Environment preset="city" />
                            <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={1.5} far={4.5} />
                        </Canvas>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="right-panel">
                    <div className="message-wrapper" style={{ maxWidth: '480px', padding: '0 20px' }}>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
                            i’ve spent a lot of time thinking about what it means to actually belong somewhere.
                            i wanted to create a little space where we can all just be ourselves without the pressure of having to prove anything to anyone else.
                            it’s not about the numbers, it’s just about the feeling.
                            if you're ever unhappy, i hope this makes it a little easier to stay.
                            it's enough just to be here.
                        </p>
                        <p style={{ marginBottom: '2rem', fontStyle: 'italic' }}>with love, alex.</p>

                        <a
                            href="https://pump.fun/profile/rexorangecounty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="submit-btn"
                            style={{
                                textDecoration: 'none',
                                display: 'inline-block',
                                textAlign: 'center',
                                width: 'auto',
                                padding: '12px 30px'
                            }}
                        >
                            pump.fun
                        </a>
                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                            $REX only at <a href="https://pump.fun/profile/rexorangecounty" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>https://pump.fun/profile/rexorangecounty</a>
                        </p>
                    </div>

                    <div className="privacy-footer">
                        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy notice</a>
                        <span>|</span>
                        <a href="https://pump.fun/profile/rexorangecounty" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>pump.fun</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
