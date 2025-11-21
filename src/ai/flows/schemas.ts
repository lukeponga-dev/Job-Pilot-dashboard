'use client';

import { z } from 'zod';

export const ExtractApplicationInputSchema = z.object({
  emailContent: z.string().min(1, 'Email content is required.'),
});
