function Home() {
    return (
        <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <br />
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Encuentra tu Camino Académico y Profesional</h1>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                El abandono universitario sigue siendo un problema significativo en España y muchos otros países.
                Diversos estudios han demostrado que una gran parte de los estudiantes que acceden a la universidad
                terminan abandonando sus estudios antes de finalizarlos. Las razones varían: falta de orientación,
                desmotivación, dificultades económicas, entre otras.
            </p>
            
            <div className="bg-blue-100 p-6 rounded-lg mb-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">¿Cómo funciona nuestra aplicación?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    La aplicación se basa en una serie de tests especializados que evalúan tanto las aptitudes como
                    los intereses profesionales de los usuarios. Estos cuestionarios han sido elaborados con criterios
                    pedagógicos y psicológicos, permitiendo analizar de manera precisa las áreas laborales en las que
                    cada estudiante podría destacar.
                </p>
            </div>
            
            <h2 className="text-3xl font-semibold text-blue-600 mt-8 mb-6 text-center">Nuestra solución: Una aplicación para orientar a los estudiantes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">📱 Aplicación móvil</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Permite a los alumnos acceder a los tests de orientación en cualquier momento y lugar,
                        facilitando un proceso rápido e intuitivo. Los resultados ofrecen recomendaciones sobre los
                        ciclos formativos o áreas profesionales más adecuadas para cada usuario.
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">💻 Aplicación de escritorio</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Diseñada para su uso en centros educativos, permite un análisis más detallado de los resultados
                        y facilita la personalización de la orientación. Los orientadores pueden usarla para complementar
                        sus sesiones de asesoramiento.
                    </p>
                </div>
            </div>
            
            <p className="text-lg text-gray-700 mt-8 leading-relaxed">
                Nuestro objetivo no es solo ayudar a los estudiantes a descubrir qué quieren hacer en el futuro, sino también,
                y quizás más importante, qué no quieren hacer. Contar con esta información desde el inicio puede evitar que los
                jóvenes se embarquen en estudios que no les motivan, mejorando su satisfacción y reduciendo el riesgo de abandono.
            </p>
            
            <p className="text-lg italic text-gray-600 text-center mt-6">
                "La educación no cambia el mundo, cambia a las personas que cambiarán el mundo." - Paulo Freire
            </p>
            
            <p className="text-lg text-gray-700 text-center mt-4">
                Nosotros queremos contribuir a que esas personas tengan la mejor orientación posible, asegurando que elijan
                un camino que realmente les motive, con el conocimiento y la confianza necesarios para construir el futuro
                que desean.
            </p>
        </div>
    );
}

export default Home;
