import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProgramModule {
  title: string;
  description: string;
}

export interface DetailedProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  targetAudience: string;
  methodology: string[];
  modules: ProgramModule[];
  externalLink?: string;
}

export interface Credential {
  title: string;
  institution?: string;
  details?: string;
}