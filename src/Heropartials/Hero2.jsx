import React from 'react';
import { Heart, MessageCircle, Repeat2, Share, MapPin, Search, Play, Star, Users, BarChart3, TrendingUp, Check, X, Clock } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Footer from './Footer';



export default function ColorfulUIGrid() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 ">
          <h1 className="md:text-5xl mt-20 md:mt-0 text-3xl text-white font-extrabold leading-tight text-center">Made to be shared</h1>
     {/* section 2 */}
     
      <div className="max-w-7xl mt-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* Twitter Card */}
          <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">J</span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm">Jack</span>
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs">@jack</span>
                </div>
              </div>
              <p className="text-sm mb-3">just setting up my twttr</p>
              <div className="text-xs text-gray-500 mb-3">8:50 PM · Mar 21, 2006 · Twitter Web Client</div>
              <div className="flex justify-between text-xs text-gray-500 mb-3">
                <span><strong>121.6K</strong> Retweets</span>
                <span><strong>17.9K</strong> Quote Tweets</span>
                <span><strong>173.5K</strong> Likes</span>
              </div>
              <div className="flex justify-between items-center">
                <MessageCircle className="w-4 h-4 text-gray-500" />
                <Repeat2 className="w-4 h-4 text-gray-500" />
                <Heart className="w-4 h-4 text-gray-500" />
                <Share className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Travel App Card */}
          <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-4 shadow-lg h-full">
              <div className="flex items-center justify-between mb-4">
                <Search className="w-5 h-5 text-gray-400" />
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-2">
                  <span className="text-sm text-gray-600">Where are you going?</span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold mb-3">Explore nearby</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=40&h=40&fit=crop&crop=center" 
                         className="w-8 h-8 rounded-lg object-cover" alt="Dublin" />
                    <div>
                      <div className="text-xs font-medium">Dublin</div>
                      <div className="text-xs text-gray-500">15-minute drive</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=40&h=40&fit=crop&crop=center" 
                         className="w-8 h-8 rounded-lg object-cover" alt="Galway" />
                    <div>
                      <div className="text-xs font-medium">Galway</div>
                      <div className="text-xs text-gray-500">2-hour drive</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Live anywhere</h3>
                <div className="grid grid-cols-2 gap-2">
                  <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=60&h=40&fit=crop&crop=center" 
                       className="w-full h-12 rounded-lg object-cover" alt="Outdoor getaways" />
                  <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=60&h=40&fit=crop&crop=center" 
                       className="w-full h-12 rounded-lg object-cover" alt="Unique stays" />
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Outdoor getaways</span>
                  <span>Unique stays</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Cards */}
          <div className="bg-gradient-to-br from-pink-400 via-gray-200 to-gray-100 rounded-3xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <Play className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">Video Title</span>
                </div>
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop&crop=center" 
                     className="w-full h-20 rounded-lg object-cover" alt="Video thumbnail" />
              </div>
              
              <div className="bg-blue-500 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Premium</span>
                  <Star className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Crypto Portfolio Card */}
          <div className="bg-gradient-to-br from-orange-400 via-purple-500 to-blue-600 rounded-3xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <span className="font-semibold">coinbase</span>
              </div>
              
              <h2 className="text-xl font-bold mb-2">Jump start your crypto portfolio</h2>
              <p className="text-sm text-gray-600 mb-4">Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</p>
              
              <div className="flex gap-2 mb-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get started</button>
                <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm">Learn more</button>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3">
                <img src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=200&h=80&fit=crop&crop=center" 
                     className="w-full h-16 object-cover rounded" alt="Crypto chart" />
              </div>
            </div>
          </div>

          {/* Git Status Card */}
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Review requested</span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="text-xs text-gray-600">
                  <span className="font-medium">john-doe</span> requested your review on this pull request. <span className="text-blue-500">Learn more</span>
                </div>
                
                <div className="text-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>2 approvals</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">All checks have passed</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Red</span>
                    <span className="text-gray-500">Commented by Tan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-500">Waiting / Changes / Other</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium">This branch has no conflicts with the base branch</span>
              </div>
              
              <button className="w-full bg-green-500 text-white py-2 rounded-lg text-sm font-medium">Merge pull request</button>
            </div>
          </div>

          {/* Analytics Card */}
          <div className="bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 rounded-3xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <BarChart3 className="w-4 h-4 text-gray-400" />
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">Acme Inc.</h3>
                  <p className="text-sm text-gray-600">Team</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Members</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Analytics</span>
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Reports</span>
                    <BarChart3 className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-3 text-white">
                  <div className="text-xs mb-2">Mobile App Preview</div>
                  <div className="bg-gray-800 rounded p-2">
                    <div className="text-xs">App Interface</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Card */}
          <div className="bg-gradient-to-br from-gray-400 via-gray-500 to-purple-600 rounded-3xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-black rounded-2xl p-4 text-green-400 font-mono text-xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400">terminal</span>
              </div>
              
              <div className="space-y-2">
                <div>
                  <span className="text-blue-400">user@computer</span>
                  <span className="text-white">:</span>
                  <span className="text-purple-400">~/project</span>
                  <span className="text-white">$ </span>
                </div>
                
                <div className="text-center py-8">
                  <div className="text-lg mb-2">Grow your terms.</div>
                  <div className="text-sm mb-2">Get paid by the year, charge by the month</div>
                  <div className="text-xs text-gray-400 mb-4">
                    Retain clients for the long haul and get recurring revenue by offering terms with different billing schedules.
                  </div>
                  <button className="bg-green-500 text-black px-4 py-2 rounded text-xs font-bold">Get Started →</button>
                </div>
              </div>
            </div>
          </div>

          {/* Directory Card */}
          <div className="bg-gradient-to-br from-lime-400 to-green-500 rounded-3xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-4 shadow-lg h-full flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <div className="text-2xl">🤝</div>
              </div>
              
              <h3 className="font-bold text-lg mb-2">A directory of trusted pros</h3>
              <p className="text-sm text-gray-600 mb-4">Take your marketing to the next level when you work with a Mailchimp partner.</p>
              
              <button className="text-blue-500 text-sm font-medium border-b border-blue-500">Browse partners</button>
            </div>
          </div>

        </div>
      </div>

      {/* section 3 */}
      <Footer/>
      
    
      
    </div>
  );
}