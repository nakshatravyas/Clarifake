import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header>
            <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
                <div className='container'>
                    <a href="#home">Clarifake</a>
                    <div>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#analyze">Analyze</a></li>
                        </ul>
                    </div>
                    {/* <button>
                    bars
                    </button>
                    <button>
                    cross
                </button> */}
                </div>
            </nav>
        </header>
    )
}
