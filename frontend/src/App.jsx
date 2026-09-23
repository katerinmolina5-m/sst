import React from 'react';
import Sidebar from "./components/layout/Sidebar";
import Header from './components/layout/Header';
import NursingTopic from './pages/NursingTopic';

function App() {
  return (
    <div className="flex h-screen bg-slate-200 text-slate-900 font-sans overflow-hidden text-xs">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-5 bg-slate-200">
          <NursingTopic />
        </main>
      </div>
    </div>
  );
}

export default App;