function About() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Sobre Nosotros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <img src="/assets/isma.jpeg" alt="Ismael Torres" className="w-12 h-24 mx-auto rounded-full mb-4" />
          <h2 className="text-xl font-semibold">Ismael Torres</h2>
          <p className="text-gray-600"></p>
          <p className="text-gray-500">Correo: ismaeltg@escolavision.com</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <img src="/assets/adri.jpeg" alt="Adrián Ruiz" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h2 className="text-xl font-semibold">Adrián Ruiz</h2>
          <p className="text-gray-600"></p>
          <p className="text-gray-500">Correo: adrianrs@escolavision.com</p>
        </div>
      </div>
    </div>
  );
}

export default About;