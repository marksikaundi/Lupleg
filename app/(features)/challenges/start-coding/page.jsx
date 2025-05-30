import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function StartCoding() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-grid-primary/10 bg-[size:20px_20px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          {/* Stats Bar */}
          <div className="flex justify-center gap-8 mb-16">
            {[
              { label: "Active Learners", value: "10,000+" },
              { label: "Challenges Completed", value: "50,000+" },
              { label: "Success Rate", value: "94%" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-block animate-bounce-slow">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Choose Your Path
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Start Your Coding Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Begin your development journey with our structured learning paths. 
              Master either frontend or backend development at your own pace.
            </p>
            {/* Quick Start Guide */}
            <div className="flex justify-center gap-4 mt-8">
              {[
                { text: "Choose Path", icon: "📍" },
                { text: "Start Learning", icon: "📚" },
                { text: "Practice", icon: "💻" },
                { text: "Get Feedback", icon: "🎯" }
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-2">{step.icon}</span>
                    <span className="text-sm text-muted-foreground">{step.text}</span>
                  </div>
                  {index < 3 && (
                    <svg className="w-5 h-5 mx-2 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {/* React */}
            <div className="flex items-center bg-card hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300 group cursor-pointer">
              <div className="w-5 h-5 mr-2 text-[#61DAFB] group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
                  <path d="M12 21.35c-7.22 0-11-2.09-11-4.35s3.78-4.35 11-4.35 11 2.09 11 4.35-3.78 4.35-11 4.35Z"/>
                  <path d="M12 11.35c-7.22 0-11-2.09-11-4.35s3.78-4.35 11-4.35 11 2.09 11 4.35-3.78 4.35-11 4.35Z"/>
                </svg>
              </div>
              <span className="text-sm group-hover:text-primary transition-colors">React</span>
            </div>

            {/* TypeScript */}
            <div className="flex items-center bg-card hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300 group cursor-pointer">
              <div className="w-5 h-5 mr-2 text-[#3178C6] group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 3h20v18H2V3zm5.8 11.14v-1H7l3.5 3.5 3.5-3.5h-.8v-1h2.4L17 13.64v-2h-4.2v-1h4.2V9H7v1.64h4.8v1H7v1.5z"/>
                </svg>
              </div>
              <span className="text-sm group-hover:text-primary transition-colors">TypeScript</span>
            </div>

            {/* Python */}
            <div className="flex items-center bg-card hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300 group cursor-pointer">
              <div className="w-5 h-5 mr-2 text-[#3776AB] group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
                </svg>
              </div>
              <span className="text-sm group-hover:text-primary transition-colors">Python</span>
            </div>

            {/* Node.js */}
            <div className="flex items-center bg-card hover:bg-primary/5 px-4 py-2 rounded-full transition-all duration-300 group cursor-pointer">
              <div className="w-5 h-5 mr-2 text-[#339933] group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.204-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.027.129-.016.182.015l1.877 1.114c.066.037.166.037.229 0l7.319-4.237c.066-.036.111-.11.111-.202V7.768c0-.091-.045-.165-.111-.202l-7.319-4.219c-.066-.036-.162-.036-.228 0L4.552 7.566c-.066.036-.108.11-.108.201v8.457c0 .081.042.156.108.193l2.001 1.157c1.084.543 1.748-.096 1.748-.739V8.492c0-.118.095-.211.212-.211h.926c.116 0 .211.093.211.211v8.343c0 1.448-.788 2.278-2.159 2.278-.422 0-.752 0-1.679-.455l-1.913-1.102C3.303 17.285 3 16.676 3 16.033V7.577c0-.644.303-1.246.797-1.566l7.305-4.237c.482-.275 1.122-.275 1.601 0l7.318 4.237c.495.32.798.922.798 1.566v8.456c0 .644-.303 1.252-.798 1.566l-7.315 4.237c-.241.128-.498.202-.772.202h-.003zm2.261-8.43c-3.207 0-3.876-1.474-3.876-2.711 0-.117.094-.211.211-.211h.943c.104 0 .192.075.208.18.144.963.567 1.445 2.515 1.445 1.546 0 2.203-.349 2.203-1.169 0-.474-.186-.824-2.589-1.061-2.006-.197-3.246-.64-3.246-2.243 0-1.478 1.246-2.358 3.334-2.358 2.344 0 3.503.813 3.649 2.557.006.059-.016.116-.051.16-.036.038-.086.063-.14.063h-.946c-.097 0-.182-.069-.202-.164-.224-1.002-.765-1.321-2.31-1.321-1.7 0-1.9.593-1.9 1.037 0 .539.234.696 2.508.996 2.256.302 3.324.73 3.324 2.295 0 1.596-1.328 2.505-3.646 2.505h.011z"/>
                </svg>
              </div>
              <span className="text-sm group-hover:text-primary transition-colors">Node.js</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Frontend Card */}
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Frontend Development
                  </CardTitle>
                  <CardDescription className="text-base">
                    Build beautiful user interfaces and interactive experiences
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <ul className="list-none space-y-3">
                    {[
                      "Master HTML, CSS, and JavaScript",
                      "Learn modern frameworks like React",
                      "Create responsive web designs",
                      "Implement user interface animations",
                      "Build accessible web applications"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/challenges/frontend" className="block">
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      Start Frontend Challenges
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Backend Card */}
            <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    Backend Development
                  </CardTitle>
                  <CardDescription className="text-base">
                    Build robust server-side applications and APIs
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <ul className="list-none space-y-3">
                    {[
                      "Learn server-side programming",
                      "Master database management",
                      "Build RESTful and GraphQL APIs",
                      "Implement authentication and security",
                      "Handle server deployment and scaling"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/challenges/backend" className="block">
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      Start Backend Challenges
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Section */}
          <div className="mt-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              What Our Learners Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "The structured approach helped me transition from a beginner to a confident developer.",
                  author: "Sarah K.",
                  role: "Frontend Developer",
                  avatar: "/mark.jpg"
                },
                {
                  quote: "The practical challenges and community support made learning backend development enjoyable.",
                  author: "Michael R.",
                  role: "Backend Developer",
                  avatar: "/mark.jpg"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-3 text-left">
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section with enhanced styling */}
          <div className="mt-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Why Take Our Coding Challenges?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Practical Learning",
                  description: "Learn by doing with real-world projects and challenges",
                  icon: (
                    <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Step-by-Step Guide",
                  description: "Progressive difficulty levels to build your confidence",
                  icon: (
                    <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 6l6 6m0 0l-6 6"/>
                    </svg>
                  )
                },
                {
                  title: "Community Support",
                  description: "Learn alongside others and get help when needed",
                  icon: (
                    <svg className="w-8 h-8 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                }
              ].map((benefit, index) => (
                <div key={index} className="p-6 rounded-xl hover:bg-primary/5 transition-colors">
                  {benefit.icon}
                  <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-muted-foreground mb-6">Join thousands of learners who have transformed their careers through our challenges.</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}