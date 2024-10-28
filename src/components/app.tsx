"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Home, Building, FileText, Wrench, Banknote, BarChart, Menu, Users, Bell, MessageSquare } from "lucide-react"
import Link from "next/link"

// Import all components
import TenantDashboard from "./tenant-dashboard"
import LandlordDashboard from "./landlord-dashboard"
import CommunicationPortal from "./communication-portal"
import MaintenanceRequestForm from "./maintenance-request-form"
import AIPropertyValuation from "./ai-property-valuation"
import DocumentCenter from "./document-center"
import FinancialAnalytics from "./financial-analytics"
import TenantScreening from "./tenant-screening"
import RentalHistory from "./rental-history"
import PropertyListing from "./property-listing"
import LeaseManagement from "./lease-management"
import MaintenanceSchedule from "./maintenance-schedule"
import RentPayment from "./rent-payment"
import PropertyAnalytics from "./property-analytics"

function HomePage({ onLogin }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="border-b border-gray-200 py-4 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tov-fErG1o2ERV3FunLBDh5cjY0BhmpUnZ.png" 
                alt="TOV Logo" 
                width={100} 
                height={50} 
                className="mr-2"
              />
            </div>
            <nav className="hidden md:flex space-x-4">
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Contact</Button>
            </nav>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => onLogin("tenant")}>Tenant Login</Button>
              <Button variant="default" onClick={() => onLogin("landlord")}>Landlord Login</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Simplify Your Real Estate Management in Botswana</h1>
          <p className="text-xl mb-8 text-gray-600">Streamline your property management tasks with our all-in-one solution</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" onClick={() => onLogin("landlord")} className="bg-blue-600 hover:bg-blue-700 text-white">Get Started as Landlord</Button>
            <Button size="lg" variant="outline" onClick={() => onLogin("tenant")} className="border-blue-600 text-blue-600 hover:bg-blue-50">Get Started as Tenant</Button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-6 h-6 mr-2 text-blue-600" />
                Property Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Easily manage your properties in Gaborone, Francistown, and across Botswana</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Banknote className="w-6 h-6 mr-2 text-green-600" />
                Financial Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Streamline rent collection and expense management in Pula</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-6 h-6 mr-2 text-yellow-600" />
                Document Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Centralize all your important documents, including Botswana-specific forms</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2024 Tov Real Estate Manager Botswana. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Button variant="link" className="text-gray-600 hover:text-gray-800">Privacy Policy</Button>
            <Button variant="link" className="text-gray-600 hover:text-gray-800">Terms of Service</Button>
            <Button variant="link" className="text-gray-600 hover:text-gray-800">Contact Us</Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function AppComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [userType, setUserType] = useState("tenant")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [menuItems, setMenuItems] = useState([])

  const handleLogin = (type) => {
    setIsLoggedIn(true)
    setUserType(type)
    setActiveTab("dashboard")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setActiveTab("dashboard")
    setUserType("tenant")
    setMenuItems([])
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return userType === "tenant" ? <TenantDashboard /> : <LandlordDashboard />
      case "properties":
        return userType === "tenant" ? <RentalHistory /> : <PropertyListing />
      case "leases":
        return <LeaseManagement />
      case "maintenance":
        return userType === "tenant" ? <MaintenanceRequestForm /> : <MaintenanceSchedule />
      case "payments":
        return userType === "tenant" ? <RentPayment /> : <FinancialAnalytics />
      case "documents":
        return <DocumentCenter />
      case "analytics":
        return <PropertyAnalytics />
      case "screening":
        return <TenantScreening />
      case "valuation":
        return <AIPropertyValuation />
      case "communication":
        return <CommunicationPortal />
      default:
        return null
    }
  }

  useEffect(() => {
    const commonItems = [
      { id: "dashboard", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
      { id: "properties", label: userType === "tenant" ? "Rental History" : "Properties", icon: <Building className="h-5 w-5" /> },
      { id: "leases", label: "Leases", icon: <FileText className="h-5 w-5" /> },
      { id: "maintenance", label: "Maintenance", icon: <Wrench className="h-5 w-5" /> },
      { id: "payments", label: userType === "tenant" ? "Rent Payment" : "Financials", icon: <Banknote className="h-5 w-5" /> },
      { id: "documents", label: "Documents", icon: <FileText className="h-5 w-5" /> },
      { id: "communication", label: "Communication", icon: <MessageSquare className="h-5 w-5" /> },
    ]

    const landlordItems = [
      { id: "analytics", label: "Analytics", icon: <BarChart className="h-5 w-5" /> },
      { id: "screening", label: "Tenant Screening", icon: <Users className="h-5 w-5" /> },
      { id: "valuation", label: "Property Valuation", icon: <Building className="h-5 w-5" /> },
    ]

    setMenuItems(userType === "landlord" ? [...commonItems, ...landlordItems] : commonItems)
  }, [userType])

  if (!isLoggedIn) {
    return <HomePage onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tov-fErG1o2ERV3FunLBDh5cjY0BhmpUnZ.png" 
                  alt="TOV Logo" 
                  width={80} 
                  height={40} 
                  className="mr-2"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-1">
              {menuItems.map((item) => (
                <TooltipProvider key={item.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={activeTab === item.id ? "default" : "ghost"}
                        className="h-10 px-3"
                        onClick={() => setActiveTab(item.id)}
                      >
                        {item.icon}
                        <span className="ml-2 hidden lg:inline">{item.label}</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Select value={userType} onValueChange={setUserType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tenant">Tenant</SelectItem>
                  <SelectItem value="landlord">Landlord</SelectItem>
                </SelectContent>
              </Select>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                      <span className="sr-only">Notifications</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Notifications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Log out
              </Button>
            </div>
            <Button
              className="md:hidden"
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
            <DialogDescription>Navigate through the application</DialogDescription>
          </DialogHeader>
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className="justify-start"
                onClick={() => {
                  setActiveTab(item.id)
                  setIsMobileMenuOpen(false)
                }}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Button>
            ))}
          </nav>
          <DialogFooter>
            <Button onClick={() => setIsMobileMenuOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <main className="container mx-auto py-6 px-4">
        {renderContent()}
      </main>
    </div>
  )
}