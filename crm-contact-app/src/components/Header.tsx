import React from 'react';
import { ArrowLeft, Bookmark, Bell, Menu, Sun, Moon } from 'lucide-react';
import { Button } from './ui';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  title?: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title = "CRM Contacts - Lead Eng...",
  onBack
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3 transition-theme">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {onBack && (
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">
            {title}
          </h1>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Bookmark className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="sm">
            <Bell className="w-5 h-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
          
          <Button variant="ghost" size="sm">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};