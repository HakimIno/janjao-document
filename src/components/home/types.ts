import React from 'react';

export interface Feature {
    icon: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
}

export interface Stat {
    label: React.ReactNode;
    value: React.ReactNode;
    icon: React.ReactNode;
}

export interface FeatureCardProps {
    feature: Feature;
    index: number;
}

export interface StatItemProps {
    stat: Stat;
    index: number;
}

export interface TestimonialProps {
    quote: string;
    author: {
        name: string;
        role: string;
        initial: string;
    };
}

export interface Sponsor {
    name: string;
    logo: string;
    tier: 'platinum' | 'gold' | 'silver';
    link: string;
}

export interface SponsorCardProps {
    sponsor: Sponsor;
} 