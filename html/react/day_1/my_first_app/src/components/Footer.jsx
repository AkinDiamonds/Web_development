const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>© {year} Speacon. All rights reserved.</p>
        </footer>
    );
}

export default Footer;