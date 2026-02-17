import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Ullas Karanth</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dr. K. Ullas Karanth is a renowned wildlife biologist dedicated to the conservation of tigers and other large carnivores. This website showcases his extensive research, publications, and commentary on wildlife science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Me</Link></li>
              <li><Link href="/publications" className="hover:text-primary transition-colors">Publications</Link></li>
              <li><Link href="/media-gallery" className="hover:text-primary transition-colors">Media Gallery</Link></li>
              <li><Link href="/commentary" className="hover:text-primary transition-colors">Commentary</Link></li>
              <li><Link href="/kannada" className="hover:text-primary transition-colors">Kannada Page</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-300 text-sm mb-2">
              Email: <a href="mailto:info@ullaskaranth.com" className="hover:text-primary">info@ullaskaranth.com</a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Ullas Karanth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
