export default function About() {
  return (
    <div>
      {/* Top section with blue background */}
      <section className="h-[70vh] bg-[#1e88b6] flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold text-white mb-4">About</h1>
        <p className="text-lg text-white max-w-2xl">
          Join us to explore the importance of UI/UX in control systems and
          software applications at national laboratories.
        </p>
      </section>

      {/* Bottom section with three boxes */}
      <section className="py-20 bg-white flex justify-center items-center">
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Networking */}
          <div className="p-6 text-center shadow-lg rounded-lg bg-gray-100">
            <div className="text-5xl mb-4">🌐</div>
            <h2 className="text-2xl font-bold mb-2">Networking</h2>
            <p className="text-lg text-gray-600">
              Connect with professionals from various national laboratories and
              share insights on UI/UX practices.
            </p>
          </div>

          {/* Hands-On Sessions */}
          <div className="p-6 text-center shadow-lg rounded-lg bg-gray-100">
            <div className="text-5xl mb-4">🛠️</div>
            <h2 className="text-2xl font-bold mb-2">Hands-On Sessions</h2>
            <p className="text-lg text-gray-600">
              Participate in interactive workshops that focus on practical
              applications of UI/UX in control systems.
            </p>
          </div>

          {/* Innovative Solutions */}
          <div className="p-6 text-center shadow-lg rounded-lg bg-gray-100">
            <div className="text-5xl mb-4">💡</div>
            <h2 className="text-2xl font-bold mb-2">Innovative Solutions</h2>
            <p className="text-lg text-gray-600">
              Explore cutting-edge solutions and discuss how UI/UX can enhance
              software applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
