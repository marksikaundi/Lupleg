import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Building, ChevronRight, Users } from 'lucide-react'

export default function Component() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Link href="#" className="inline-flex items-center text-sm text-purple-600 hover:text-purple-800 mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Blog
      </Link>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">WorkOS acquires Warrant</h1>
      
      <div className="flex items-center mb-6">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Michael Grinich"
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <p className="font-medium text-gray-900">Michael Grinich</p>
          <p className="text-sm text-gray-500">April 23, 2024</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-8">
        Today, we are excited to announce the acquisition of Warrant, the Fine Grained Authorization (FGA) service for developers. This is a major step in WorkOS' vision to become the world's best platform for identity, authentication, and authorization.
      </p>
      
      <div className="flex justify-center space-x-2 mb-8">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
      </div>
      
      <div className="bg-purple-100 p-8 rounded-lg mb-8">
        <div className="flex justify-center items-center space-x-8">
          <div className="bg-white p-4 rounded-full shadow-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-sm transform rotate-45"></div>
            </div>
          </div>
          <div className="text-4xl font-bold text-purple-600">+</div>
          <div className="bg-white p-4 rounded-full shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="w-10 h-8 bg-purple-600 rounded-sm flex items-center justify-center">
                <div className="w-6 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">
        Today we are thrilled to announce that WorkOS has acquired Warrant, the Fine Grained Authorization (FGA) service.
      </p>
      
      <p className="text-gray-700 mb-8">
        FGA allows developers to implement precise access controls within their applications, ensuring robust security and data compliance. In other words, it determines who has access to what and what they can do within an app. Warrant's product is based on a groundbreaking authorization system called Zanzibar, which was originally developed by Google to power Google Docs and YouTube. This enables fast authorization checks at enormous scale while maintaining a flexible model that can be adapted to any application.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Users className="text-purple-600 w-6 h-6 mr-2" />
            <h3 className="text-lg font-semibold text-purple-600">We're hiring</h3>
          </div>
          <p className="text-gray-600 mb-4">Our global team is growing and we're hiring all types of roles.</p>
          <Link href="#" className="text-purple-600 hover:text-purple-800 inline-flex items-center">
            View open roles
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Building className="text-purple-600 w-6 h-6 mr-2" />
            <h3 className="text-lg font-semibold text-purple-600">About us</h3>
          </div>
          <p className="text-gray-600 mb-4">WorkOS builds developer tools for quickly adding enterprise features to applications.</p>
          <Link href="#" className="text-purple-600 hover:text-purple-800 inline-flex items-center">
            Learn more
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}