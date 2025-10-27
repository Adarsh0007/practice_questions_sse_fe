export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  businessName?: string;
  streetAddress?: string;
  tags: string[];
  owner: string;
  followers: string[];
  avatar?: string;
  isVip?: boolean;
  isSharedContact?: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  content: string;
  timestamp: Date;
  type: 'message' | 'order_update' | 'follow_up';
  isFromUser: boolean;
  hasTrackingLink?: boolean;
  trackingUrl?: string;
}

export interface Conversation {
  id: string;
  contactId: string;
  messages: Message[];
  lastActivity: Date;
  isTyping: boolean;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  type: 'default' | 'vip' | 'shared' | 'custom';
}

export interface Theme {
  mode: 'light' | 'dark';
}

export interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

export type ViewMode = 'all_fields' | 'dnd' | 'actions';

export interface ContactFormData extends Omit<Contact, 'id' | 'tags' | 'followers'> {
  tags?: string[];
  followers?: string[];
}