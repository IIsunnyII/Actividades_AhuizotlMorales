import React from 'react';

const About: React.FC = () => {
    return (
        <div className="about-section">
            {/* Cuadro con el contenido de "Acerca de nosotros" */}
            <div className="about-container">
                <h1>Acerca de nosotros</h1>
                <p>
                Bienvenido a Sunny Store, tu lugar en línea para encontrar las mejores ofertas en productos de excelente calidad. Nos dedicamos a ofrecerte una experiencia de compra única, con una amplia selección de productos que se ajustan a tus gustos y necesidades. Nuestro compromiso es garantizar que cada compra sea
                 fácil y satisfactoria, asegurando que nuestros clientes siempre queden satisfechos con su elección.
                </p>
                <p>
                   
En Sunny Store, valoramos la transparencia, la calidad y el excelente servicio al cliente. Nuestro equipo se compromete a brindarte un servicio cordial y eficiente, siempre dispuesto a ayudarte con cualquier duda.
 Gracias por elegirnos. ¡Esperamos que disfrutes de tu experiencia de compra con nosotros!
                </p>
            </div>

            {/* Pie de página fuera del cuadro */}
            <footer className="footer bg-dark text-light py-3 mt-3">
                <div className="container text-center">
                    <p>&copy; 2024 Sunny Store. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

export default About;
