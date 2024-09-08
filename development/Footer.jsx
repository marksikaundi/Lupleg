import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Twitter, Instagram, Linkedin, Youtube, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore our other teams and product areas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: 'Google AI', logo: '🧠' },
              { name: 'Google Research', logo: '🔍' },
              { name: 'Google Cloud', logo: '☁️' },
              { name: 'LABS.GOOGLE', logo: '🧪' },
            ].map((item) => (
              <Link
                key={item.name}
                href="#"
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-center">
                  <span className="text-2xl mr-2">{item.logo}</span>
                  <span>{item.name}</span>
                </span>
                <span className="text-blue-600">→</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-b py-8 mb-12">
          <div className="flex items-center space-x-6">
            <span className="font-semibold">Follow us</span>
            <Twitter className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
            <Youtube className="w-6 h-6" />
            <Github className="w-6 h-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              {['About Google DeepMind', 'Responsibility & Safety', 'Education', 'Careers', 'Press'].map((item) => (
                <li key={item}><Link href="#" className="hover:underline">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Learn more</h3>
            <ul className="space-y-2">
              {['Research', 'Technologies', 'Impact', 'Discover'].map((item) => (
                <li key={item}><Link href="#" className="hover:underline">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Sign up for updates on our latest innovations</h3>
            <form className="space-y-4">
              <Input type="email" placeholder="Email address" />
              <p className="text-sm">
                I accept Google's Terms and Conditions and acknowledge that my information will be used in accordance with Google's Privacy Policy.
              </p>
              <Button className="w-full">Sign up</Button>
            </form>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-sm">
          <div className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Google</div>
          <div className="space-x-4">
            {['About Google', 'Google products', 'Privacy', 'Terms'].map((item) => (
              <Link key={item} href="#" className="hover:underline">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}