import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Home() {

  const teamMembers = [
    {
      name: "Francisca André",
      position: "CEO",
      image: "/francisca-andre.png",
      description: "The head of the operation."
    },
    {
      name: "Luísa Cardoso",
      position: "CGO",
      image: "/luisa-cardoso.jpg",
      description: "Ensuring the growth of the company."
    },
    {
      name: "Pedro Fonseca",
      position: "CTO",
      image: "/pedro-fonseca.jpg",
      description: "Design Manager"
    },
    {
      name: "João Oliveira",
      position: "CTO (Avisory)",
      image: "/joao-oliveira.jpg",
      description: "Implementation Manager"
    },
    {
      name: "Nuno Fernandes",
      position: "CPO",
      image: "/nuno-fernandes.jpg",
      description: "Custom Interface Manager"
    },
    {
      name: "Rui Soares",
      position: "CPO (Advisory)",
      image: "/rui-soares.jpg",
      description: "Planning Manager"
    },
    {
      name: "Ubaldo Senete",
      position: "\"Hustler\"",
      image: "/ubaldo-senete.jpg",
      description: "Quality Manager"
    },
    {
      name: "David d'esposito",
      position: "\"Hustler\"",
      image: "/david-desposito.jpg",
      description: "Test Manager"
    },
    {
      name: "Nicolas Ishola",
      position: "Process Manager",
      image: "/nicolas-ishola.jpg",
    },
    {
      name: "Kevyn Marins",
      position: "Support Manager",
      image: "/kevyn-marins.jpg",
    },
  ]

  const coreValues = [
  {
    "name": "Curiosity",
    "description": "Seeking new knowledge and exploring possibilities"
  },
  {
    "name": "Collaboration",
    "description": "Working together to achieve shared goals"
  },
  {
    "name": "Resilience",
    "description": "Adapting and thriving in the face of challenges"
  },
  {
    "name": "Integrity",
    "description": "Acting honestly and upholding strong ethical standards"
  },
  {
    "name": "Impact",
    "description": "Creating meaningful and positive change"
  }
]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/nhansai.svg" alt="N-Hans AI Logo" width={40} height={40} className="h-12 w-auto" />
            {/* <span className="text-xl font-bold text-[#014994]">N-Hans AI</span> */}
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-gray-700 hover:text-[#014994]">
              About
            </Link>
            <Link href="#product" className="text-gray-700 hover:text-[#014994]">
              Product
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-[#014994]">
              Team
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-[#014994]">
              Contact
            </Link>
          </nav>
          <Link href="#contact">
            <Button className="demo-button">Request Demo</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container flex flex-col items-center text-center">
            <div className="mb-6">
              <Image src="/nhansai-square.svg" alt="N-Hans AI" width={120} height={120} className="h-32 w-auto" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#014994]">
              Transforming Education with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10">
              Making university information accessible, instant, and multilingual for students worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#product" className="w-full">
                <Button className="learn-more-button">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact" className="w-full">
                <Button
                  variant="outline"
                  className="contact-button"
                >
                  Contact Us <Mail className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#014994]">About N-Hans AI</h2>
              <div className="w-20 h-1 bg-[#01a8bd] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#014994]">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  To revolutionize access to educational information through AI-powered solutions, making knowledge more
                  accessible, accurate, and available to students worldwide regardless of language barriers or time
                  zones.
                </p>

                <h3 className="text-2xl font-semibold mb-4 text-[#014994]">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  To become the leading provider of AI assistants for educational institutions globally, creating a
                  world where every student can access the information they need instantly and accurately.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#014994]">Core Values</h3>
                <ul className="space-y-3 text-gray-700">
                  {coreValues.map((value, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-[#01a8bd] flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span>
                        <strong>{value.name}:</strong> {value.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[#014994]">The Problem We Solve</h3>
              <p className="text-gray-700 mb-4">
                Students struggle to find accurate and quick information about university admissions, courses, tuition,
                and student life. University staff are overwhelmed with repetitive questions, leading to delays and
                frustration.
              </p>
              <p className="text-gray-700">
                Our AI assistants provide instant, multilingual, 24/7 support, making information accessible to all
                students while reducing the workload for university staff, allowing them to focus on more complex
                student needs.
              </p>
            </div>

            <div className="mt-8 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-[#014994]">Target Market</h3>
              <p className="text-gray-700">
                Universities and educational institutions looking to improve student support with AI, particularly those
                with international student populations and complex information systems.
              </p>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#014994]">Our First Product: UPortoAI</h2>
              <div className="w-20 h-1 bg-[#01a8bd] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-[#014994]">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 rounded-full bg-[#01a8bd] flex items-center justify-center text-white">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instant, Accurate Responses</h4>
                      <p className="text-gray-700">
                        Provides immediate answers about admissions, courses, tuition, and student life.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 rounded-full bg-[#01a8bd] flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        <path d="M2 12h20" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Multilingual Support</h4>
                      <p className="text-gray-700">
                        Breaks down language barriers for international students with support in multiple languages.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 rounded-full bg-[#01a8bd] flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-clock"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Availability</h4>
                      <p className="text-gray-700">
                        Always available to answer questions, regardless of time zone or university office hours.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 rounded-full bg-[#01a8bd] flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-users"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Staff Workload Reduction</h4>
                      <p className="text-gray-700">
                        Frees university staff from repetitive questions, allowing them to focus on complex student
                        needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="order-1 md:order-2 bg-white p-6 rounded-lg shadow-lg">
                <div className="aspect-video relative overflow-hidden rounded-md bg-gray-100 mb-4">
                  <Image
                    src="/nhansai.svg?height=400&width=600"
                    alt="UPortoAI Demo"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#014994]">UPortoAI: AI-powered Chatbot</h3>
                <p className="text-gray-700 mb-4">
                  UPortoAI is our flagship AI-powered chatbot developed for the University of Porto. It serves as a
                  reference project showcasing our expertise in creating intelligent assistants for educational
                  institutions.
                </p>
                <Link href="#contact">
                  <Button className="demo-button w-full">Learn More About UPortoAI</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#014994]">Meet Our Team</h2>
              <div className="w-20 h-1 bg-[#01a8bd] mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our diverse team brings together expertise in artificial intelligence, education technology, and
                software development to create innovative solutions for educational institutions.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square relative bg-gray-200">
                    <Image
                      src={member.image}
                      alt={`Team Member ${member.name}`}
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-[#014994]">{member.name}</h3>
                    <p className="text-[#01a8bd] text-sm mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm">
                      {member.description || "A valuable member of our team."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#014994] text-white">
          <div className="container">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-[#01a8bd] mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto">
                Interested in learning more about how N-Hans AI can help your educational institution? Contact us today
                to schedule a demo or discuss your specific needs.
              </p>
            </div>

            <div className="max-w-2xl mx-auto rounded-lg p-8 text-center text-xl">
              <Image src="/UPAI-LOGO3.svg" alt="N-Hans AI" width={120} height={120} className="h-48 mx-auto w-auto mb-4" />
              <h3>If you wish to contact us, please do so through our email</h3>
              <Link href="mailto:nhansai.lgp23@gmail.com" className="underline">nhansai.lgp23@gmail.com</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/nhansai.svg" alt="N-Hans AI Logo" width={40} height={40} className="h-20 w-auto" />
              </div>
              <p className="mb-4">
                Making university information accessible, instant, and multilingual for students worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#product" className="hover:text-white">
                    Our Product
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-white">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin mr-2 mt-1"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Porto, Portugal</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail mr-2 mt-1"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>nhansai.lgp23@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <a href="https://www.instagram.com/n_hans_ai/" className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram mr-2 mt-1"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                    </svg>
                    <span>Follow Us on Instagram!</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} N-Hans AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
