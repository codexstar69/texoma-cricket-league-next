'use client';

import ScrollToTopInner from '@/components/ui/ScrollToTop';
import { usePathname } from 'next/navigation';

export default function ConditionalScrollToTop() {
  const pathname = usePathname();
  const legalPages = ['/privacy', '/terms', '/disclaimer'];
  
  if (legalPages.includes(pathname)) {
    return null;
  }
  
  return <ScrollToTopInner />;
}
