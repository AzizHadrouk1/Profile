import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <ProfileHeader />
      <ExpertiseSection />
      <ProjectsSection />
    </div>
  );
}

export default App;