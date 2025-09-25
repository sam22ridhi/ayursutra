import React, { useState } from 'react';
import { 
  Calendar, 
  Heart, 
  TrendingUp, 
  Clock,
  MessageCircle,
  FileText,
  Award,
  Activity,
  CheckCircle,
  AlertCircle,
  Play,
  Pause
} from 'lucide-react';

const PatientDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const treatmentStats = [
    { title: 'Sessions Completed', value: '8/12', progress: 67, icon: <CheckCircle className="w-6 h-6" /> },
    { title: 'Overall Progress', value: '78%', progress: 78, icon: <TrendingUp className="w-6 h-6" /> },
    { title: 'Wellness Score', value: '8.4/10', progress: 84, icon: <Heart className="w-6 h-6" /> },
    { title: 'Days Active', value: '24', progress: 100, icon: <Activity className="w-6 h-6" /> }
  ];

  const upcomingSessions = [
    { date: '2024-01-15', time: '09:00 AM', treatment: 'Abhyanga Massage', therapist: 'Maya Sharma', room: 'Room 1' },
    { date: '2024-01-16', time: '10:30 AM', treatment: 'Shirodhara', therapist: 'Raj Patel', room: 'Room 2' },
    { date: '2024-01-18', time: '02:00 PM', treatment: 'Herbal Steam Bath', therapist: 'Priya Nair', room: 'Room 3' }
  ];

  const dailyRoutines = [
    { time: '06:00 AM', activity: 'Morning Meditation', duration: '20 mins', completed: true },
    { time: '07:30 AM', activity: 'Herbal Tea (Tulsi)', duration: '5 mins', completed: true },
    { time: '09:00 AM', activity: 'Abhyanga Session', duration: '60 mins', completed: false },
    { time: '12:00 PM', activity: 'Ayurvedic Lunch', duration: '30 mins', completed: false },
    { time: '08:00 PM', activity: 'Evening Walk', duration: '15 mins', completed: false }
  ];

  const progressData = [
    { week: 'Week 1', stress: 8, energy: 4, sleep: 5, digestion: 6 },
    { week: 'Week 2', stress: 7, energy: 5, sleep: 6, digestion: 7 },
    { week: 'Week 3', stress: 5, energy: 7, sleep: 7, digestion: 8 },
    { week: 'Week 4', stress: 4, energy: 8, sleep: 8, digestion: 8 }
  ];

  return (
    <div className="min-h-screen bg-mint-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-serif font-bold text-charcoal">Your Healing Journey</h1>
                <p className="text-gray-600 mt-1">Welcome back, Priya</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Next Session</p>
                  <p className="font-semibold text-sage-600">Tomorrow 9:00 AM</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-sage-600 to-teal-600 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm mb-8">
          {[
            { key: 'overview', label: 'Overview' },
            { key: 'sessions', label: 'Sessions' },
            { key: 'progress', label: 'Progress' },
            { key: 'guidance', label: 'Daily Guidance' }
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
              {treatmentStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-sage-100 rounded-lg">
                      <div className="text-sage-600">{stat.icon}</div>
                    </div>
                    <span className="text-xs text-gray-600">{stat.progress}%</span>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm mb-3">{stat.title}</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-sage-600 to-teal-600 rounded-full transition-all duration-500"
                      style={{ width: `${stat.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Sessions */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-charcoal flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-sage-600" />
                    Upcoming Sessions
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-sage-50 to-beige-50 rounded-lg border-l-4 border-sage-600">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-sage-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {new Date(session.date).getDate()}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-charcoal">{session.treatment}</h4>
                        <p className="text-sm text-gray-600">{session.time} • {session.therapist}</p>
                        <p className="text-xs text-sage-600 mt-1">{session.room}</p>
                      </div>
                      <button className="text-sage-600 hover:text-sage-700">
                        <CheckCircle className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Routine */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-charcoal flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-sage-600" />
                    Today's Routine
                  </h2>
                </div>
                <div className="p-6 space-y-3">
                  {dailyRoutines.map((routine, index) => (
                    <div key={index} className={`flex items-center space-x-4 p-3 rounded-lg ${
                      routine.completed 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <button className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        routine.completed 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-300 text-gray-600'
                      }`}>
                        {routine.completed ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${routine.completed ? 'text-green-800' : 'text-charcoal'}`}>
                            {routine.activity}
                          </h4>
                          <span className="text-xs text-gray-600">{routine.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{routine.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sessions Tab */}
        {activeTab === 'sessions' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">Treatment Sessions</h2>
              
              {/* Session Timeline */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-charcoal">Abhyanga Massage - Session 8</h3>
                    <p className="text-sm text-gray-600">Completed on Jan 12, 2024 • 60 minutes</p>
                    <p className="text-sm text-green-700 mt-1">Great progress! Your stress levels have improved significantly.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">Completed</div>
                    <div className="text-xs text-gray-500">Rating: 9/10</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Play className="w-8 h-8 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-charcoal">Shirodhara - Session 9</h3>
                    <p className="text-sm text-gray-600">Tomorrow, Jan 16, 2024 • 10:30 AM</p>
                    <p className="text-sm text-blue-700 mt-1">Prepare with light breakfast, avoid caffeine.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-600">Upcoming</div>
                    <button className="text-xs text-blue-600 hover:underline mt-1">View Details</button>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
                  <Pause className="w-8 h-8 text-gray-400" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-charcoal">Herbal Steam Bath - Session 10</h3>
                    <p className="text-sm text-gray-600">Jan 18, 2024 • 2:00 PM</p>
                    <p className="text-sm text-gray-500 mt-1">Scheduled after Shirodhara completion.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-600">Scheduled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">Your Progress Journey</h2>
              
              {/* Progress Chart */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-charcoal mb-4">Weekly Wellness Trends</h3>
                <div className="overflow-x-auto">
                  <div className="min-w-full bg-gray-50 rounded-lg p-4">
                    {progressData.map((week, index) => (
                      <div key={index} className="mb-6 last:mb-0">
                        <h4 className="font-medium text-charcoal mb-3">{week.week}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-white rounded p-3">
                            <div className="text-sm text-gray-600 mb-1">Stress Level</div>
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 h-2 bg-gray-200 rounded">
                                <div 
                                  className="h-full bg-red-500 rounded"
                                  style={{ width: `${(10 - week.stress) * 10}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{week.stress}/10</span>
                            </div>
                          </div>
                          <div className="bg-white rounded p-3">
                            <div className="text-sm text-gray-600 mb-1">Energy Level</div>
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 h-2 bg-gray-200 rounded">
                                <div 
                                  className="h-full bg-green-500 rounded"
                                  style={{ width: `${week.energy * 10}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{week.energy}/10</span>
                            </div>
                          </div>
                          <div className="bg-white rounded p-3">
                            <div className="text-sm text-gray-600 mb-1">Sleep Quality</div>
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 h-2 bg-gray-200 rounded">
                                <div 
                                  className="h-full bg-blue-500 rounded"
                                  style={{ width: `${week.sleep * 10}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{week.sleep}/10</span>
                            </div>
                          </div>
                          <div className="bg-white rounded p-3">
                            <div className="text-sm text-gray-600 mb-1">Digestion</div>
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 h-2 bg-gray-200 rounded">
                                <div 
                                  className="h-full bg-yellow-500 rounded"
                                  style={{ width: `${week.digestion * 10}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{week.digestion}/10</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-lg font-medium text-charcoal mb-4">Recent Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-sage-50 to-beige-50 rounded-lg p-4 border-l-4 border-sage-600">
                    <Award className="w-8 h-8 text-sage-600 mb-2" />
                    <h4 className="font-medium text-charcoal">Consistency Champion</h4>
                    <p className="text-sm text-gray-600">Completed 7 consecutive sessions</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-600">
                    <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                    <h4 className="font-medium text-charcoal">Progress Leader</h4>
                    <p className="text-sm text-gray-600">50% improvement in wellness score</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border-l-4 border-blue-600">
                    <Heart className="w-8 h-8 text-blue-600 mb-2" />
                    <h4 className="font-medium text-charcoal">Mindful Healer</h4>
                    <p className="text-sm text-gray-600">20 days of daily meditation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guidance Tab */}
        {activeTab === 'guidance' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">Daily Ayurvedic Guidance</h2>
              
              {/* Pre-therapy Instructions */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-charcoal mb-4">Pre-Treatment Preparation</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-900 mb-2">Tomorrow's Shirodhara Session</h4>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• Have a light breakfast 2 hours before treatment</li>
                        <li>• Avoid caffeine and heavy meals</li>
                        <li>• Wear comfortable, loose clothing</li>
                        <li>• Arrive 15 minutes early for preparation</li>
                        <li>• Bring a towel and hair tie</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Daily Recommendations */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-charcoal mb-4">Today's Personalized Recommendations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-sage-50 rounded-lg p-4">
                    <h4 className="font-medium text-sage-900 mb-2">Morning Routine</h4>
                    <ul className="space-y-1 text-sm text-sage-800">
                      <li>• Start with warm water and lemon</li>
                      <li>• 15 minutes of gentle yoga</li>
                      <li>• Self-massage with sesame oil</li>
                    </ul>
                  </div>
                  <div className="bg-beige-50 rounded-lg p-4">
                    <h4 className="font-medium text-amber-900 mb-2">Dietary Guidance</h4>
                    <ul className="space-y-1 text-sm text-amber-800">
                      <li>• Focus on warm, cooked foods</li>
                      <li>• Include ginger and turmeric</li>
                      <li>• Avoid cold drinks and raw foods</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* AI Assistant */}
              <div>
                <h3 className="text-lg font-medium text-charcoal mb-4">Ask Your AI Assistant</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="w-6 h-6 text-sage-600" />
                    <div>
                      <h4 className="font-medium text-charcoal">AyurSutra Assistant</h4>
                      <p className="text-sm text-gray-600">Available 24/7 in multiple languages</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Ask about your treatment, diet, or wellness..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                    />
                    <button className="px-6 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors">
                      Ask
                    </button>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Recent Question:</strong> "What should I eat before my Shirodhara session?"
                    </p>
                    <p className="text-sm text-gray-800 mt-2">
                      <strong>AI Response:</strong> For optimal results, have a light meal 2-3 hours before Shirodhara. 
                      Consider warm rice porridge with ghee, or steamed vegetables. Avoid dairy and heavy proteins 
                      as they can interfere with the treatment's effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;