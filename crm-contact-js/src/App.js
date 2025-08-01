import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { ContactDetails } from './components/contact/ContactDetails';
import { ConversationPanel } from './components/conversations/ConversationPanel';
import { mockContact, mockConversation } from './utils/mockData';

function App() {
  const [contact, setContact] = useState(mockContact);
  const [conversation, setConversation] = useState(mockConversation);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactChange = (direction) => {
    // In a real app, this would fetch the next/previous contact
    console.log(`Navigate ${direction}`);
  };

  const handleFieldChange = (field, value) => {
    setContact(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSendMessage = (message) => {
    const newMessage = {
      id: Date.now().toString(),
      senderId: 'user',
      senderName: 'Me',
      content: message,
      timestamp: new Date(),
      type: 'message',
      isFromUser: true
    };

    setConversation(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
      lastActivity: new Date()
    }));
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-theme">
        <Header />
        
        <main className="h-[calc(100vh-64px)] flex">
          {/* Contact Details Panel */}
          <div className={`
            w-full md:w-96 lg:w-1/3 border-r border-gray-200 dark:border-gray-700
            ${isMobileMenuOpen ? 'block' : 'hidden md:block'}
          `}>
            <ContactDetails
              contact={contact}
              currentIndex={1}
              totalContacts={356}
              onContactChange={handleContactChange}
              onFieldChange={handleFieldChange}
            />
          </div>

          {/* Conversation Panel */}
          <div className={`
            flex-1 bg-white dark:bg-gray-800 transition-theme
            ${isMobileMenuOpen ? 'hidden md:block' : 'block'}
          `}>
            <ConversationPanel
              conversation={conversation}
              contactName={`${contact.firstName} ${contact.lastName}`}
              onSendMessage={handleSendMessage}
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden fixed bottom-4 right-4 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
