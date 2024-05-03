import Nextauth from 'next-auth';
import type { Admin } from '@/shared/types/prisma';

declare module 'next-auth' {
  interface Session {
    user: Admin & { token: 'string' };
  }
}
