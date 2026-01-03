
import React from 'react';
import { Rule, FAQ } from './types';

export const RULES: Rule[] = [
  {
    id: '1',
    category: 'General',
    title: 'Maturity & Respect',
    description: 'All players must be 18+. Discrimination, harassment, or toxic behavior will result in an immediate ban.'
  },
  {
    id: '2',
    category: 'Roleplay',
    title: 'Value Your Life',
    description: 'You must act realistically. Fear for your life in dangerous situations. No "invincible cowboy" mentalities.'
  },
  {
    id: '3',
    category: 'Metagaming',
    title: 'No Metagaming',
    description: 'Using out-of-character information for in-character gains is strictly prohibited.'
  },
  {
    id: '4',
    category: 'Roleplay',
    title: 'New Life Rule',
    description: 'If your character "dies" in a roleplay scenario, you forget the immediate events leading to your death.'
  }
];

export const FAQS: FAQ[] = [
  {
    question: "How do I join the server?",
    answer: "You must first apply for the whitelist via our application form. Once approved, join our Discord to get the connection details."
  },
  {
    question: "Which platform is this on?",
    answer: "We are currently exclusively hosting on PC using the RedM framework."
  },
  {
    question: "Is voice chat required?",
    answer: "Yes, high-quality microphone and voice-based roleplay are mandatory for our community."
  }
];

export const ASSETS = {
  heroBg: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=1920", // Rocky landscape
  // Using a local reference for the logo provided by the user. 
  // User should ensure the attached image is named logo.png in the project root.
  logo: (
    <img 
      src="logo.png" 
      alt="Dust Peek Logo" 
      className="h-12 w-auto object-contain brightness-110"
      onError={(e) => {
        // Fallback if the image isn't found yet
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  )
};
