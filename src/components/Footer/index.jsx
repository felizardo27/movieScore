import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://linkedin.com/in/felizardo27/" target='_blank'>
                            <img src="/lk.png" alt="Logo Linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/felizardo27" target='_blank'>
                            <img src="/github.png" alt="Logo GitHub" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/logo.png" alt="Logo MovieScore" />
            </section>
            <section>
                <p>Desenvolvido por <a href="https://github.com/felizardo27">Felizardo27</a></p>
            </section>
        </footer>
    )
}

export default Footer