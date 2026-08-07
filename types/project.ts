export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description?: string;
  role?: string;
  status: string;
  stack: string[];
  highlights: string[];
  featured: boolean;
  kind: "product" | "interface";
  liveUrl?: string;
  repositoryUrl?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};
