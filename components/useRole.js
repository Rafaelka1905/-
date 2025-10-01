'use client';
import { useEffect, useState } from 'react';

export function useRole(defaultRole = 'buyer') {
  const [role, setRole] = useState(defaultRole);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('rm_role') : null;
    if (saved === 'buyer' || saved === 'seller') {
      setRole(saved);
    } else {
      localStorage.setItem('rm_role', defaultRole);
      setRole(defaultRole);
    }
  }, [defaultRole]);

  const switchRole = (next) => {
  	localStorage.setItem('rm_role', next);
  	setRole(next);
  };

  return { role, switchRole };
}
