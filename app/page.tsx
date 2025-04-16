"use client";

import React from 'react';
import Hero from '../components/Hero';
import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout pageId="home">
      <Hero />
    </PageLayout>
  );
} 