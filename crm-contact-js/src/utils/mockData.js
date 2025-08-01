export const mockContact = {
  id: '1',
  firstName: 'Olivia',
  lastName: 'John',
  email: 'olivia.perry@example.com',
  phoneNumber: '(555) 123-4567',
  address: {
    street: '123 Maple Street',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62704',
    country: 'United States'
  },
  businessName: 'ABC Corp',
  streetAddress: '123 Main Street',
  tags: ['Shared Contact', 'VIP'],
  owner: 'Devon Lane',
  followers: ['Devon Lane'],
  avatar: undefined,
  isVip: true,
  isSharedContact: true
};

export const mockMessages = [
  {
    id: '1',
    senderId: '1',
    senderName: 'Olivia John',
    content: 'Hey John,\n\nYour Order has reached.\nYour Urban Wellness LLP order has arrived in your real-time. Arriving on Tuesday, November.',
    timestamp: new Date('2024-01-15T10:30:00'),
    type: 'order_update',
    isFromUser: false,
    hasTrackingLink: true,
    trackingUrl: '#'
  },
  {
    id: '2',
    senderId: '1',
    senderName: 'Olivia',
    content: 'Please let me know',
    timestamp: new Date('2024-01-15T11:44:00'),
    type: 'message',
    isFromUser: false
  },
  {
    id: '3',
    senderId: '1',
    senderName: 'Olivia John',
    content: 'Hey John,\n\nYour Order has reached.\nYour Urban Wellness LLP order has arrived in your real-time. Arriving on Tuesday, November.',
    timestamp: new Date('2024-01-15T14:20:00'),
    type: 'order_update',
    isFromUser: false,
    hasTrackingLink: true,
    trackingUrl: '#'
  }
];

export const mockConversation = {
  id: '1',
  contactId: '1',
  messages: mockMessages,
  lastActivity: new Date('2024-01-15T14:20:00'),
  isTyping: true
};

export const getInitials = (firstName, lastName) => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

export const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};