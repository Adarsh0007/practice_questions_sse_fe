import React, { useState } from 'react';
import { Send, ChevronDown, Info } from 'lucide-react';
import { Conversation, Message } from '../../types';
import { Button, Avatar } from '../ui';
import { getInitials } from '../../utils/mockData';

interface ConversationPanelProps {
  conversation: Conversation;
  contactName: string;
  onSendMessage?: (message: string) => void;
}

export const ConversationPanel: React.FC<ConversationPanelProps> = ({
  conversation,
  contactName,
  onSendMessage
}) => {
  const [newMessage, setNewMessage] = useState('');
  const [showFollowUp, setShowFollowUp] = useState(true);

  const handleSendMessage = () => {
    if (newMessage.trim() && onSendMessage) {
      onSendMessage(newMessage.trim());
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderMessage = (message: Message) => (
    <div key={message.id} className="mb-6">
      <div className="flex items-start space-x-3">
        <Avatar
          initials={getInitials(message.senderName.split(' ')[0], message.senderName.split(' ')[1] || '')}
          size="sm"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
              {message.senderName}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              To: Me
            </span>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-2">
            <p className="text-sm text-gray-900 dark:text-gray-100 whitespace-pre-line">
              {message.content}
            </p>
            
            {message.hasTrackingLink && (
              <Button 
                variant="primary" 
                size="sm" 
                className="mt-3"
                onClick={() => window.open(message.trackingUrl, '_blank')}
              >
                Track Your Order
              </Button>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="primary" size="sm">
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFollowUpSection = () => (
    <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
      <div className="flex items-center space-x-2 mb-2">
        <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
          Set up a new time to follow up on the mail chain
        </span>
        <button 
          onClick={() => setShowFollowUp(!showFollowUp)}
          className="ml-auto"
        >
          <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </button>
      </div>
    </div>
  );

  const renderTypingIndicator = () => {
    if (!conversation.isTyping) return null;
    
    return (
      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
        </div>
        <span>Olivia is typing</span>
      </div>
    );
  };

  const renderMessageInput = () => (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
      <div className="flex items-start space-x-3">
        <Button variant="ghost" size="sm" className="mt-2">
          <ChevronDown className="w-4 h-4" />
        </Button>
        
        <div className="flex-1">
          <div className="relative">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full min-h-[60px] max-h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              rows={2}
            />
            
            <div className="absolute bottom-2 right-2 flex items-center space-x-2">
              <Button
                variant="primary"
                size="sm"
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Conversations
          </h2>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-4">
        {showFollowUp && renderFollowUpSection()}
        
        <div className="space-y-6">
          {conversation.messages.map(renderMessage)}
        </div>
        
        {renderTypingIndicator()}
      </div>

      {/* Message Input */}
      <div className="p-4">
        {renderMessageInput()}
      </div>
    </div>
  );
};