'use client';

import { useRouter, usePathname } from 'next/navigation';

const PAGE_TO_PATH: Record<string, string> = {
  home: '/',
  about: '/about',
  tournaments: '/tournaments',
  partners: '/partners',
  contact: '/contact',
  register: '/register',
  privacy: '/privacy',
  terms: '/terms',
  disclaimer: '/disclaimer',
};

const PATH_TO_PAGE: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([k, v]) => [v, k])
);

export function useNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = PATH_TO_PAGE[pathname] || 'home';

  const navigate = (page: string) => {
    const path = PAGE_TO_PATH[page] || '/';
    router.push(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { currentPage, navigate };
}
