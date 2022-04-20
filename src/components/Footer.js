const Footer = () => {
    return (
        <footer>
            <div className="flex flex-wrap w-full">
                <div className="flex flex-col w-1/4 border">
                    <h2 className="text-decoration-underline text-gray-100">Our Brand</h2>
                    <ul className="footer-list">
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">Who we are</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                </div>
                <div className="flex flex-col w-1/4 border">
                    <h2 className="text-decoration-underline text-gray-100">Services</h2>
                    <ul className="footer-list">
                        <li><a href="#">Latest vehicles listing</a></li>
                        <li><a href="#">Best prices suggestions</a></li>
                        <li><a href="#">Onsale portal</a></li>
                    </ul>
                </div>
                <div className="flex flex-col w-1/4 border">
                    <h2 className="text-decoration-underline text-gray-100">Faqs</h2>
                    <ul className="footer-list">
                        <li><a href="#">How to join</a></li>
                        <li><a href="#">How to Buy</a></li>
                        <li><a href="#">Membership Fee</a></li>
                    </ul>
                </div>
                <div className="flex flex-col w-1/4 border">
                    <h2 className="text-decoration-underline text-gray-100">About</h2>
                    <ul className="footer-list">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;