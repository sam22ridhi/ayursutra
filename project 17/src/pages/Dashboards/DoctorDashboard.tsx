import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Brain, 
  TrendingUp, 
  FileText, 
  Clock,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Camera
} from 'lucide-react';

const DoctorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Patients', value: '247', change: '+12%', icon: <Users className="w-6 h-6" /> },
    { title: 'Active Treatments', value: '45', change: '+8%', icon: <Calendar className="w-6 h-6" /> },
    { title: 'AI Prescriptions', value: '156', change: '+23%', icon: <Brain className="w-6 h-6" /> },
    { title: 'Success Rate', value: '94%', change: '+2%', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const recentPatients = [
    { id: 1, name: 'Priya Sharma', condition: 'Stress Management', nextSession: '2024-01-15', progress: 75 },
    { id: 2, name: 'Raj Patel', condition: 'Digestive Issues', nextSession: '2024-01-16', progress: 60 },
    { id: 3, name: 'Anita Kumar', condition: 'Joint Pain', nextSession: '2024-01-17', progress: 85 },
    { id: 4, name: 'Vikram Singh', condition: 'Insomnia', nextSession: '2024-01-18', progress: 40 }
  ];

  const todaySchedule = [
    { time: '09:00 AM', patient: 'Meera Gupta', treatment: 'Abhyanga', room: 'Room 1' },
    { time: '10:30 AM', patient: 'Suresh Reddy', treatment: 'Shirodhara', room: 'Room 2' },
    { time: '02:00 PM', patient: 'Kavya Nair', treatment: 'Panchakarma Consultation', room: 'Consultation' },
    { time: '03:30 PM', patient: 'Arjun Das', treatment: 'Nasya', room: 'Room 3' }
  ];

  return (
    <div className="min-h-screen bg-mint-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-2xl font-serif font-bold text-charcoal">Doctor Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, Dr. Sharma</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm mb-8">
          {[
            { key: 'overview', label: 'Overview' },
            { key: 'patients', label: 'Patients' },
            { key: 'prescriptions', label: 'AI Prescriptions' },
            { key: 'schedule', label: 'Schedule' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-sage-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-sage-600 hover:bg-sage-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-sage-100 rounded-lg">
                      <div className="text-sage-600">{stat.icon}</div>
                    </div>
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                </div>
              ))}
            </div>

            {/* Recent Activity Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Patients */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-charcoal">Recent Patients</h2>
                </div>
                <div className="p-6 space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-charcoal">{patient.name}</h4>
                        <p className="text-sm text-gray-600">{patient.condition}</p>
                        <p className="text-xs text-gray-500 mt-1">Next: {patient.nextSession}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="text-sm font-medium text-charcoal">{patient.progress}%</div>
                          <div className="w-16 h-2 bg-gray-200 rounded-full mt-1">
                            <div 
                              className="h-full bg-sage-600 rounded-full"
                              style={{ width: `${patient.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Schedule */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-charcoal">Today's Schedule</h2>
                </div>
                <div className="p-6 space-y-4">
                  {todaySchedule.map((appointment, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 border-l-4 border-sage-600 bg-sage-50 rounded-r-lg">
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-sage-600 rounded-full"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-charcoal">{appointment.time}</p>
                          <span className="text-xs text-sage-600 bg-sage-200 px-2 py-1 rounded-full">
                            {appointment.room}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900 mt-1">{appointment.patient}</p>
                        <p className="text-xs text-gray-600">{appointment.treatment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AI Prescriptions Tab */}
        {activeTab === 'prescriptions' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-charcoal">AI Prescription Analysis</h2>
              <button className="flex items-center space-x-2 bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition-colors">
                <Camera className="w-4 h-4" />
                <span>Scan Prescription</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-charcoal mb-2">Upload Handwritten Prescription</h3>
                <p className="text-gray-600 mb-4">Our AI will analyze and convert it to a structured treatment plan</p>
                <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                  Choose File or Take Photo
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Recent AI Analysis</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-charcoal">Patient: Priya Sharma</h4>
                      <p className="text-sm text-gray-600">Analyzed: 2 hours ago</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">99% Accuracy</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">AI Interpretation:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Abhyanga massage - 7 days</li>
                        <li>• Shirodhara therapy - 3 sessions</li>
                        <li>• Herbal steam bath - daily</li>
                        <li>• Meditation guidance - 20 mins/day</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Dosage & Timing:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Morning: 6-8 AM</li>
                        <li>• Pre-meal treatments</li>
                        <li>• Rest period: 30 mins post-therapy</li>
                        <li>• Diet: Vata pacifying foods</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Patients Tab */}
        {activeTab === 'patients' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-charcoal">Patient Management</h2>
              <button className="flex items-center space-x-2 bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Add Patient</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex space-x-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search patients..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Patient</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Condition</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Progress</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Next Session</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPatients.map((patient) => (
                      <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-sage-600">
                                {patient.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <span className="font-medium text-charcoal">{patient.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{patient.condition}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-16 h-2 bg-gray-200 rounded-full">
                              <div 
                                className="h-full bg-sage-600 rounded-full"
                                style={{ width: `${patient.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{patient.progress}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{patient.nextSession}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-gray-400 hover:text-sage-600">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-sage-600">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-charcoal">Smart Scheduling</h2>
              <button className="flex items-center space-x-2 bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span>New Appointment</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Weekly Schedule</h3>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <div key={day} className="text-center py-2 text-sm font-medium text-gray-600">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => (
                    <div key={i} className="aspect-square border border-gray-200 rounded p-1 text-xs">
                      <div className="text-gray-600">{((i % 31) + 1)}</div>
                      {i === 14 && (
                        <div className="bg-sage-100 text-sage-700 text-xs px-1 rounded mt-1">
                          3 apt
                        </div>
                      )}
                      {i === 15 && (
                        <div className="bg-teal-100 text-teal-700 text-xs px-1 rounded mt-1">
                          2 apt
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-charcoal mb-4">Today's Appointments</h3>
                <div className="space-y-3">
                  {todaySchedule.map((appointment, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <Clock className="w-4 h-4 text-sage-600 mt-1" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-charcoal">{appointment.time}</p>
                        <p className="text-sm text-gray-600">{appointment.patient}</p>
                        <p className="text-xs text-gray-500">{appointment.treatment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;