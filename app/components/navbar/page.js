import React from "react";
import Link from "next/link";

export default function Navbar() {

    return(
        <div id="container">
            <div id="navbar">
                    <ul id="menu-list">
                        <li>
                            <Link href="/">
                                <p>General</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/events/s13">
                                <p>S13 Events</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/events/s15">
                                <p>S15 Events</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/events/s31">
                                <p>S31 Events</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/events/s63">
                                <p>S63 Events</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/events/s65">
                                <p>S65 Events</p>
                            </Link>
                        </li>
                    </ul>  
            </div>
        </div>
    )
}