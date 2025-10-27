import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Plus, ChevronDown } from 'lucide-react';
import { Contact, ViewMode } from '../../types';
import { Card, Button, Input, Avatar, Tag } from '../ui';
import { cn } from '../../utils/cn';
import { getInitials, formatPhoneNumber } from '../../utils/mockData';

interface ContactDetailsProps {
  contact: Contact;
  currentIndex: number;
  totalContacts: number;
  onContactChange?: (direction: 'prev' | 'next') => void;
  onFieldChange?: (field: string, value: any) => void;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({
  contact,
  currentIndex,
  totalContacts,
  onContactChange,
  onFieldChange
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('all_fields');
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(true);

  const handleInputChange = (field: string, value: string) => {
    onFieldChange?.(field, value);
  };

  const renderViewModeButtons = () => (
    <div className="flex items-center space-x-2 mb-4">
      <Button
        variant={viewMode === 'all_fields' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setViewMode('all_fields')}
      >
        All Fields
      </Button>
      <Button
        variant={viewMode === 'dnd' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setViewMode('dnd')}
      >
        DND
      </Button>
      <Button
        variant={viewMode === 'actions' ? 'primary' : 'ghost'}
        size="sm"
        onClick={() => setViewMode('actions')}
      >
        Actions
      </Button>
    </div>
  );

  const renderContactHeader = () => (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onContactChange?.('prev')}
          disabled={currentIndex === 1}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Contact Details
        </div>
        
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {currentIndex} of {totalContacts}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onContactChange?.('next')}
          disabled={currentIndex === totalContacts}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  const renderContactInfo = () => (
    <div className="mb-6">
      <div className="flex items-center space-x-3 mb-4">
        <Avatar
          initials={getInitials(contact.firstName, contact.lastName)}
          size="lg"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {contact.firstName} {contact.lastName}
          </h2>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-sm text-gray-600 dark:text-gray-400">Owner</span>
            <Button variant="ghost" size="sm" className="text-sm px-2 py-1">
              {contact.owner} <ChevronDown className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <Phone className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">Followers</span>
        <div className="flex items-center space-x-1">
          {contact.followers.map((follower, index) => (
            <Avatar
              key={index}
              initials={follower.split(' ').map(n => n[0]).join('')}
              size="xs"
            />
          ))}
          <Button variant="ghost" size="sm" className="w-6 h-6 p-0">
            <ChevronDown className="w-3 h-3" />
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-400 block mb-2">Tags</span>
        <div className="flex flex-wrap gap-2">
          <Tag variant="primary">{contact.tags[0]}</Tag>
          <Tag variant="warning">VIP</Tag>
          <Tag variant="success">+15</Tag>
          <Button variant="ghost" size="sm" className="text-xs">
            <Plus className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  );

  const renderContactForm = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Contact</h3>
        <Button variant="ghost" size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Add
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First Name"
          value={contact.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
        />
        <Input
          label="Last Name"
          value={contact.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
        />
      </div>

      <Input
        label="Phone Number"
        type="tel"
        value={formatPhoneNumber(contact.phoneNumber)}
        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
        leftIcon={
          <div className="flex items-center space-x-1">
            <div className="w-4 h-3 bg-red-500 rounded-sm"></div>
            <div className="w-4 h-2 bg-white border border-red-500 rounded-sm"></div>
          </div>
        }
      />

      <Input
        label="Email"
        type="email"
        value={contact.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
      />

      <Input
        label="Address"
        value={`${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zipCode}, ${contact.address.country}`}
        onChange={(e) => handleInputChange('address', e.target.value)}
      />
    </div>
  );

  const renderAdditionalInfo = () => (
    <div className="mt-6">
      <button
        onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
        className="flex items-center justify-between w-full text-left mb-4"
      >
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Additional Info
        </h3>
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            showAdditionalInfo && "rotate-180"
          )}
        />
      </button>

      {showAdditionalInfo && (
        <div className="space-y-4">
          <Input
            label="Business Name"
            value={contact.businessName || ''}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
          />
          
          <Input
            label="Street Address"
            value={contact.streetAddress || ''}
            onChange={(e) => handleInputChange('streetAddress', e.target.value)}
          />
          
          <Input
            label="City"
            value={contact.address.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
          
          <Input
            label="Country"
            value={contact.address.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
          />
        </div>
      )}
    </div>
  );

  return (
    <Card className="h-full overflow-y-auto scrollbar-thin">
      {renderContactHeader()}
      {renderContactInfo()}
      {renderViewModeButtons()}
      {renderContactForm()}
      {renderAdditionalInfo()}
    </Card>
  );
};