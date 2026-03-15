export interface Course {
  slug: string;
  title: string;
  description: string;
  price: number;
  status: "available" | "coming-soon";
  duration: string;
  lessonCount: number;
  level: "beginner" | "intermediate" | "advanced";
  category: "persona" | "use-case" | "free";
  outcomes: string[];
  lessons: { title: string; duration: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: "general" | "courses" | "pricing" | "technical";
}
