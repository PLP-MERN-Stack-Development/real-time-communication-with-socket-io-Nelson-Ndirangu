// socketio-chat/client/src/components/Notifications.jsx
import React from 'react';

const Notifications = ({ notifications, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-96 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Notifications</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-80">
          {notifications.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <div className="text-6xl mb-4">🔔</div>
              <p className="text-lg font-medium">No notifications</p>
              <p className="text-sm">You're all caught up!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map(notification => (
                <div key={notification.id} className="p-4 hover:bg-gray-50 transition">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      💬
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        New message from {notification.from}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        In #{notification.roomId}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {notifications.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <button 
              onClick={onClose}
              className="w-full py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition font-medium"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;