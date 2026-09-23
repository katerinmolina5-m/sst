import React from 'react';
import TopStats from '../components/dashboard/TopStats';
import QueueList from '../components/dashboard/QueueList';
import PatientDetails from '../components/dashboard/PatientDetails';
import ActionPanel from '../components/dashboard/ActionPanel';

export default function NursingTopic() {
  return (
    <div className="space-y-4">
      <TopStats />
      <div className="grid grid-cols-12 gap-4">
        <QueueList />
        <PatientDetails />
        <ActionPanel />
      </div>
    </div>
  );
}