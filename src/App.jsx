import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Download, Upload, Twitter, Linkedin, Instagram, Facebook, Menu, X } from 'lucide-react';



const ScreenshotEditor = () => {
  const [media, setMedia] = useState(null);
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaType, setMediaType] = useState(null); 
  const [isScaling, setIsScaling] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('');
  
  const wrapperRef = useRef();
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const scaleTimeoutRef = useRef(null);
  
  const [settings, setSettings] = useState({
    // Platform dimensions
    platform: 'twitter',
    customWidth: 1200,
    customHeight: 630,
    
    // Media properties
    scale: 100,
    rotate: 0,
    blur: 0,
    brightness: 100,
    contrast: 100,
    opacity: 100,
    borderRadius: 12,
    border: 0,
    
    // Gradient background
    gradientType: 'linear',
    gradientDirection: 45,
    color1: '#667eea',
    color2: '#764ba2',
    color3: '#f093fb',
    useThreeColors: false,
    
    // Shadow
    shadowIntensity: 30,
  });

  const platforms = {
    twitter: { width: 1200, height: 675, name: 'Twitter Post' },
    linkedin: { width: 1200, height: 627, name: 'LinkedIn Post' },
    instagram: { width: 1080, height: 1080, name: 'Instagram Square' },
    'instagram-story': { width: 1080, height: 1920, name: 'Instagram Story' },
    facebook: { width: 1200, height: 630, name: 'Facebook Post' },
    custom: { width: 1200, height: 630, name: 'Custom Size' }
  };

  const gradientPresets = [
    { name: 'Purple Blue', color1: '#667eea', color2: '#764ba2' },
    { name: 'Pink Orange', color1: '#f093fb', color2: '#f5576c' },
    { name: 'Blue Green', color1: '#4facfe', color2: '#00f2fe' },
    { name: 'Sunset', color1: '#ff7e5f', color2: '#feb47b' },
    { name: 'Ocean', color1: '#2193b0', color2: '#6dd5ed' },
    { name: 'Forest', color1: '#11998e', color2: '#38ef7d' },
    { name: 'Cosmic', color1: '#9b59b6', color2: '#3498db' },
    { name: 'Fire', color1: '#fc4a1a', color2: '#f7b733' },
  ];

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) { // 50MB
        setDownloadStatus('⚠️ Large file detected. This might cause performance issues.');
        setTimeout(() => setDownloadStatus(''), 3000);
      }
      
      if (file.type.startsWith('video/')) {
        const objectUrl = URL.createObjectURL(file);
        setMediaUrl(objectUrl);
        setMedia(file);
        setMediaType('video');
      } else if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setMediaUrl(e.target.result);
          setMedia(file);
          setMediaType('image');
        };
        reader.onerror = (error) => {
          console.error('Error reading file:', error);
          setDownloadStatus('❌ Error reading file');
          setTimeout(() => setDownloadStatus(''), 3000);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleScaleChange = useCallback((value) => {
    setIsScaling(true);
    setSettings(prev => ({ ...prev, scale: value }));
    
    if (scaleTimeoutRef.current) {
      clearTimeout(scaleTimeoutRef.current);
    }
    
    scaleTimeoutRef.current = setTimeout(() => {
      setIsScaling(false);
    }, 150);
  }, []);

  const handlePlatformChange = (platform) => {
    const platformData = platforms[platform];
    setSettings(prev => ({
      ...prev,
      platform,
      customWidth: platformData.width,
      customHeight: platformData.height
    }));
  };

  const applyGradientPreset = (preset) => {
    setSettings(prev => ({
      ...prev,
      color1: preset.color1,
      color2: preset.color2,
      useThreeColors: false
    }));
  };



const handleDownload =() => {
  return 
};


  const getGradientStyle = () => {
    const { gradientType, gradientDirection, color1, color2, color3, useThreeColors } = settings;
    
    if (gradientType === 'radial') {
      return useThreeColors 
        ? `radial-gradient(circle, ${color1}, ${color2}, ${color3})`
        : `radial-gradient(circle, ${color1}, ${color2})`;
    } else {
      return useThreeColors 
        ? `linear-gradient(${gradientDirection}deg, ${color1}, ${color2}, ${color3})`
        : `linear-gradient(${gradientDirection}deg, ${color1}, ${color2})`;
    }
  };

  const getShadowStyle = () => {
    const intensity = settings.shadowIntensity;
    const shadowOffset = Math.round(intensity * 0.2);
    const shadowBlur = Math.round(intensity );
    const shadowOpacity = Math.round(intensity * 1.1) / 100;
    
    return `${shadowOffset}px ${shadowOffset}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity})`;
  };

  const currentDimensions = settings.platform === 'custom' 
    ? { width: settings.customWidth, height: settings.customHeight }
    : platforms[settings.platform];

  const getPreviewScale = () => {
    if (window.innerWidth >= 1024) {
      return settings.platform === 'instagram-story' ? 0.3 : 0.6;
    } else if (window.innerWidth >= 768) {
      return settings.platform === 'instagram-story' ? 0.25 : 0.4;
    } else {
      return settings.platform === 'instagram-story' ? 0.2 : 0.3;
    }
  };

  const previewScale = getPreviewScale();

  const closeSidebar = () => setSidebarOpen(false);

  // Effect to handle video playback
  useEffect(() => {
    if (mediaType === 'video' && videoRef.current) {
      videoRef.current.load();
    }
  }, [mediaUrl, mediaType]);

  return (
    <div className="flex w-full h-screen bg-gray-900 text-white overflow-hidden">
      {/* Status Message */}
      {downloadStatus && (
        <div className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
          {downloadStatus}
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-50
        w-80 sm:w-96 lg:w-80 bg-gray-800 overflow-y-auto h-full
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-4 sm:p-6">
          {/* Mobile Close Button */}
          <button
            onClick={closeSidebar}
            className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>

          <h2 className="text-lg sm:text-xl font-bold mb-6 text-blue-400">Media Editor</h2>

          {/* Upload Section */}
          <div className="mb-6">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
            >
              <Upload size={20} />
              Upload Media
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              onChange={handleMediaUpload}
              className="hidden"
            />
          </div>

          {/* Platform Selection */}
          <div className="mb-6">
            <h3 className="text-yellow-400 font-semibold mb-3 text-sm sm:text-base">Platform</h3>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {Object.entries(platforms).map(([key, platform]) => (
                <button
                  key={key}
                  onClick={() => handlePlatformChange(key)}
                  className={`p-2 rounded text-xs transition-colors ${
                    settings.platform === key 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {key === 'twitter' && <Twitter size={10} />}
                    {key === 'linkedin' && <Linkedin size={10} />}
                    {key === 'instagram' && <Instagram size={10} />}
                    {key === 'facebook' && <Facebook size={10} />}
                    <span className="text-xs">{platform.name}</span>
                  </div>
                  <div className="text-xs text-gray-400">{platform.width}×{platform.height}</div>
                </button>
              ))}
            </div>
            
            {settings.platform === 'custom' && (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs mb-1">Width</label>
                  <input
                    type="number"
                    value={settings.customWidth}
                    onChange={(e) => handleSettingChange('customWidth', Number(e.target.value))}
                    className="w-full bg-gray-700 text-white p-2 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">Height</label>
                  <input
                    type="number"
                    value={settings.customHeight}
                    onChange={(e) => handleSettingChange('customHeight', Number(e.target.value))}
                    className="w-full bg-gray-700 text-white p-2 rounded text-sm"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Gradient Presets */}
          <div className="mb-6">
            <h3 className="text-purple-400 font-semibold mb-3 text-sm sm:text-base">Gradient Presets</h3>
            <div className="grid grid-cols-2 gap-2">
              {gradientPresets.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => applyGradientPreset(preset)}
                  className="h-10 sm:h-12 rounded-lg text-xs font-medium text-white shadow-lg hover:scale-103 transition-transform"
                  style={{
                    background: `linear-gradient(45deg, ${preset.color1}, ${preset.color2})`
                  }}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gradient Controls */}
          <div className="mb-6">
            <h3 className="text-green-400 font-semibold mb-3 text-sm sm:text-base">Gradient Controls</h3>
            
            <div className="mb-4">
              <label className="block text-sm mb-2">Type</label>
              <select
                value={settings.gradientType}
                onChange={(e) => handleSettingChange('gradientType', e.target.value)}
                className="w-full bg-gray-700 text-white p-2 rounded text-sm"
              >
                <option value="linear">Linear</option>
                <option value="radial">Radial</option>
              </select>
            </div>

            {settings.gradientType === 'linear' && (
              <div className="mb-4">
                <label className="block text-sm mb-1">Direction: {settings.gradientDirection}°</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={settings.gradientDirection}
                  onChange={(e) => handleSettingChange('gradientDirection', Number(e.target.value))}
                  className="w-full"
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <label className="block text-sm mb-1">Color 1</label>
                <input
                  type="color"
                  value={settings.color1}
                  onChange={(e) => handleSettingChange('color1', e.target.value)}
                  className="w-full h-8 sm:h-10 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Color 2</label>
                <input
                  type="color"
                  value={settings.color2}
                  onChange={(e) => handleSettingChange('color2', e.target.value)}
                  className="w-full h-8 sm:h-10 rounded cursor-pointer"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings.useThreeColors}
                  onChange={(e) => handleSettingChange('useThreeColors', e.target.checked)}
                  className="rounded"
                />
                <span className="text-sm">Use 3 colors</span>
              </label>
            </div>

            {settings.useThreeColors && (
              <div className="mb-4">
                <label className="block text-sm mb-1">Color 3</label>
                <input
                  type="color"
                  value={settings.color3}
                  onChange={(e) => handleSettingChange('color3', e.target.value)}
                  className="w-full h-8 sm:h-10 rounded cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Media Controls */}
          {mediaUrl && (
            <div className="mb-6">
              <h3 className="text-pink-400 font-semibold mb-3 text-sm sm:text-base">Media Controls</h3>
              
              <div className="mb-3">
                <label className="block text-sm mb-1">Scale: {settings.scale}%</label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={settings.scale}
                  onChange={(e) => handleScaleChange(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm mb-1">Rotation: {settings.rotate}°</label>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={settings.rotate}
                  onChange={(e) => handleSettingChange('rotate', Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm mb-1">Border Radius: {settings.borderRadius}px</label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={settings.borderRadius}
                  onChange={(e) => handleSettingChange('borderRadius', Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm mb-1">Shadow Intensity: {settings.shadowIntensity}%</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.shadowIntensity}
                  onChange={(e) => handleSettingChange('shadowIntensity', Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm mb-1">Blur: {settings.blur}px</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={settings.blur}
                  onChange={(e) => handleSettingChange('blur', Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm mb-1">Brightness: {settings.brightness}%</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={settings.brightness}
                  onChange={(e) => handleSettingChange('brightness', Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm mb-1">Contrast: {settings.contrast}%</label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={settings.contrast}
                  onChange={(e) => handleSettingChange('contrast', Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm mb-1">Opacity: {settings.opacity}%</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.opacity}
                  onChange={(e) => handleSettingChange('opacity', Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          )}

          {/* Download Button */}
          {mediaUrl && (
            <button
              onClick={handleDownload}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
            >
              <Download size={20} />
              Download Image
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
        <div className="relative w-full max-w-4xl">
          <div
            className="relative border border-gray-600 shadow-2xl mx-auto"
            ref={wrapperRef} 
            style={{
              width: `${Math.min(currentDimensions.width * previewScale, window.innerWidth - 32)}px`,
              height: `${Math.min(currentDimensions.height * previewScale, window.innerHeight - 150)}px`,
              maxWidth: '100%',
              aspectRatio: `${currentDimensions.width}/${currentDimensions.height}`,
              background: getGradientStyle(),
              overflow: 'hidden',
              transition: isScaling ? 'none' : 'all 0.3s ease-out'
            }}
          >
            {!mediaUrl ? (
              <div className="flex items-center justify-center h-full text-gray-400">
                <div className="text-center p-4">
                  <Upload size={window.innerWidth >= 640 ? 48 : 32} className="mx-auto mb-4 opacity-50" />
                  <p className="text-sm sm:text-lg mb-2">Upload a media file</p>
                  <p className="text-xs sm:text-sm">to get started</p>
                  <p className="text-xs mt-2 text-gray-500">
                    {currentDimensions.width} × {currentDimensions.height}
                  </p>
                </div>
              </div>
            ) : mediaType === 'image' ? (
              <div className="flex items-center justify-center h-full p-4 sm:p-6 lg:p-8">
                <img
                  src={mediaUrl}
                  alt="Uploaded media"
                  className="max-w-full max-h-full object-contain"
                  style={{
                    transform: `scale(${settings.scale / 100}) rotate(${settings.rotate}deg)`,
                    borderRadius: `${settings.borderRadius}px`,
                    boxShadow: getShadowStyle(),
                    filter: `blur(${settings.blur}px) brightness(${settings.brightness}%) contrast(${settings.contrast}%) opacity(${settings.opacity}%)`,
                    transition: 'none',
                    willChange: isScaling ? 'transform' : 'auto'
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full p-4 sm:p-6 lg:p-8">
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  loop
                  muted
                  className="max-w-full max-h-full object-contain"
                  style={{
                    transform: `scale(${settings.scale / 100}) rotate(${settings.rotate}deg)`,
                    borderRadius: `${settings.borderRadius}px`,
                    boxShadow: getShadowStyle(),
                    filter: `blur(${settings.blur}px) brightness(${settings.brightness}%) contrast(${settings.contrast}%) opacity(${settings.opacity}%)`,
                    transition: 'none',
                    willChange: isScaling ? 'transform' : 'auto'
                  }}
                >
                  <source src={mediaUrl} type={media.type} />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
          
          <div className="mt-4 text-center text-xs sm:text-sm text-gray-400">
            {platforms[settings.platform]?.name || 'Custom'} - {currentDimensions.width} × {currentDimensions.height}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotEditor;