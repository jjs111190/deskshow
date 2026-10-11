import { z } from 'zod';

export const ProjectStatusSchema = z.enum([
  'implemented',
  'in-development',
  'partial',
  'planned',
  'unverified',
]);
export type ProjectStatus = z.infer<typeof ProjectStatusSchema>;

export const ProjectVisibilitySchema = z.enum(['private-draft', 'approved']);
export type ProjectVisibility = z.infer<typeof ProjectVisibilitySchema>;

export const EvidenceSchema = z.object({
  feature: z.string(),
  evidence: z.string(),
  status: z.enum(['Implemented', 'Partially Implemented', 'Planned', 'Unverified']),
  confidence: z.enum(['High', 'Medium', 'Low']),
});
export type ProjectEvidence = z.infer<typeof EvidenceSchema>;

export const FeatureSchema = z.object({
  titleKo: z.string(),
  titleEn: z.string(),
  bodyKo: z.string(),
  bodyEn: z.string(),
});
export type ProjectFeature = z.infer<typeof FeatureSchema>;

export const ScreenshotSchema = z.object({
  src: z.string(),
  altKo: z.string(),
  altEn: z.string(),
  captionKo: z.string().optional(),
  captionEn: z.string().optional(),
  concept: z.boolean().default(false),
});
export type ProjectScreenshot = z.infer<typeof ScreenshotSchema>;

export const TranslationSchema = z.object({
  tagline: z.string(),
  shortDescription: z.string(),
  overview: z.string(),
  howItWorks: z.array(z.string()),
  developmentNotes: z.string(),
  futurePlans: z.string(),
});
export type ProjectTranslation = z.infer<typeof TranslationSchema>;

export const ProjectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  category: z.string(),
  platforms: z.array(z.string()),
  technologies: z.array(z.string()),
  status: ProjectStatusSchema,
  visibility: ProjectVisibilitySchema,
  featured: z.boolean(),
  icon: z.string().nullable(),
  screenshots: z.array(ScreenshotSchema),
  videos: z.array(z.string()),
  repositoryUrl: z.string().nullable(),
  demoUrl: z.string().nullable(),
  updatedAt: z.string(),
  ko: TranslationSchema,
  en: TranslationSchema,
  features: z.array(FeatureSchema),
  evidence: z.array(EvidenceSchema),
});
export type Project = z.infer<typeof ProjectSchema>;

export const ProjectsArraySchema = z.array(ProjectSchema);
