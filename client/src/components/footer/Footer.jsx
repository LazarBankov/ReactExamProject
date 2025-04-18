import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow"></div>
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">За нас</h3>
            <p className="text-gray-400">
              Разгледайте нашите уникални ръчно изработени декорации, сватбени
              комплекти и подаръци. Създадени с любов, за да направят всеки повод
              специален.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Бързи връзки</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/catalog" className="hover:text-purple-400 transition">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400 transition">
                  За нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-purple-400 transition">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Останете свързани</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Link
                to="https://www.facebook.com/profile.php?id=61566495269054"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition"
              >
                Facebook
              </Link>
              <Link to="#" className="hover:text-purple-400 transition">
                Instagram
              </Link>
              <Link to="#" className="hover:text-purple-400 transition">
                Pinterest
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} CvetniDecoracii. Всички права запазени.
        </div>
      </footer>
    </div>
  );
}
