import React, { useEffect, useState } from 'react'




export default function Dashboard() {

    const [username,setUsername]=useState('')

  async function GetName() {
    let username=await localStorage.getItem("username")
    setUsername(username)
  }    

  useEffect(()=>{
    GetName()
  },[])

  return (
    <>
  {/* Sidebar + Content Wrapper */}
  <div className="flex h-screen">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-md px-4 py-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">Dashboard</h1>
      <nav className="space-y-4">
        <a href="#" className="block text-gray-700 hover:text-blue-600">
          🏠 Home
        </a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">
          📊 Analytics
        </a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">
          ⚙️ Settings
        </a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">
          🔒 Logout
        </a>
      </nav>
    </aside>
    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Welcome Back!</h2>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Hi, {username}</span>
          <img
            src="https://i.pravatar.cc/40"
            alt="Avatar"
            className="rounded-full w-10 h-10"
          />
        </div>
      </header>
      {/* Content Area */}
      <main className="p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">📈 Widget 1</div>
          <div className="bg-white p-4 rounded shadow">📉 Widget 2</div>
          <div className="bg-white p-4 rounded shadow">📅 Widget 3</div>
        </div>
        <div className="mt-6 bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
          <p className="text-gray-600">
            Here’s where you can display some recent data or logs...
          </p>
        </div>
      </main>
    </div>
  </div>
</>

  )
}
