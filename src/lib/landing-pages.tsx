// SEO/GEO landing pages. Plain-data content (no JSX) so it stays easy to edit and
// safe to render. Each page becomes a root-level route via src/app/[slug]/page.tsx.
// Facts are sourced from constants.ts; keep pre-launch framing truthful.

export interface LandingSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LandingFaq {
  q: string;
  a: string;
}

export interface LandingLink {
  href: string;
  label: string;
}

export interface LandingHighlight {
  title: string;
  description: string;
}

export interface LandingPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  headline: string;
  accentWord: string; // a word inside headline to highlight in accent orange
  intro: string;
  highlights: LandingHighlight[];
  sections: LandingSection[];
  faqs: LandingFaq[];
  related: LandingLink[];
  ctaHeading: string;
}

export const LANDING_PAGES: LandingPage[] = [
  {
    slug: "best-ai-learning-app",
    metaTitle: "The Best App to Learn AI in 2026 | WiseAI",
    metaDescription:
      "What to look for in an AI learning app, and how WiseAI compares: daily AI news, 457 lessons, 71 tools, and a free AI IQ test.",
    keywords: [
      "best AI learning app",
      "best app to learn AI",
      "learn AI 2026",
      "AI learning app",
      "AI education app",
    ],
    eyebrow: "Buyer's guide",
    headline: "The best app to learn AI in 2026",
    accentWord: "AI",
    intro:
      "There are a lot of ways to learn AI now, and most of them do not stick. Long video courses get abandoned in week one. Newsletters pile up unread. The apps that actually work share a few traits: they fit into your day, they make you practice instead of just watch, and they keep you current as the field moves. Here is what to look for, and where WiseAI lands.",
    highlights: [
      {
        title: "A daily habit, not a weekend project",
        description:
          "The best AI learning happens in short, repeated sessions. WiseAI is built around 10 minutes a day, so it becomes routine instead of a course you quit.",
      },
      {
        title: "Learn from what is actually happening",
        description:
          "AI changes weekly. WiseAI ties lessons to 25 curated daily news picks, so you learn the field as it moves, not a snapshot from a year ago.",
      },
      {
        title: "Practice, not passive watching",
        description:
          "Quizzes, prompt challenges, and spaced repetition make you produce and recall, which is how knowledge sticks.",
      },
    ],
    sections: [
      {
        heading: "What separates a great AI learning app from a course",
        paragraphs: [
          "A course teaches a fixed body of knowledge and then it ends. That works for stable subjects. AI is not stable, so a static course is out of date before you finish it.",
          "A great AI learning app does three things a course cannot. It shows up daily so the habit forms. It refreshes its content as the tools change. And it makes you do the thing, prompting a real model and getting feedback, instead of watching someone else do it.",
        ],
      },
      {
        heading: "Why daily beats binge",
        paragraphs: [
          "Cramming feels productive and fades fast. Short daily sessions with spaced review are how anything actually moves into long-term memory.",
          "WiseAI leans into this with four quick daily missions: read an update, finish a lesson, explore a tool, and warm up. Do all four for a bonus, or do one and keep your streak alive.",
        ],
      },
      {
        heading: "Where WiseAI fits",
        paragraphs: [
          "WiseAI bundles four things most apps split apart: a personalized daily AI news briefing, 457 interactive lessons, a directory of 71 AI tools compared honestly, and gamified practice through prompt challenges, an AI IQ test, and spaced repetition.",
          "WiseAI is a subscription, $49.99 a year or $9.99 a week, and it is live on the App Store. You can gauge your level first with the free AI IQ test on the site, which needs no signup.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best app to learn AI as a beginner?",
        a: "Look for one that fits a daily habit, adapts to your level, and makes you practice. WiseAI does all three with bite-sized lessons that adapt during onboarding, plus a daily news briefing so beginners learn from what is actually happening. It is free to start.",
      },
      {
        q: "Is WiseAI free?",
        a: "No. WiseAI is a subscription app, $49.99 a year or $9.99 a week. New users get one sample lesson before the paywall, and the AI IQ test on the website is free with no signup.",
      },
      {
        q: "Do I need a technical background?",
        a: "No. WiseAI is built for students, professionals in non-technical roles, founders, and creators. It adapts to your level, role, and goals when you start.",
      },
      {
        q: "How much time does it take each day?",
        a: "About 10 minutes, structured around a short daily session. You can do all four or just keep your streak going with one.",
      },
    ],
    related: [
      { href: "/duolingo-for-ai", label: "Is there a Duolingo for AI?" },
      { href: "/ai-news-app", label: "The AI news app that keeps you current" },
      { href: "/ai-for-work", label: "Using AI at work" },
    ],
    ctaHeading: "Start learning AI the way that sticks",
  },
  {
    slug: "duolingo-for-ai",
    metaTitle: "The Duolingo for AI | WiseAI",
    metaDescription:
      "WiseAI is the Duolingo for AI: daily missions, streaks, XP, and an AI IQ test that turn learning AI into a habit.",
    keywords: [
      "Duolingo for AI",
      "gamified AI learning",
      "learn AI with streaks",
      "AI learning game",
      "AI skills test app",
    ],
    eyebrow: "What is it",
    headline: "The Duolingo for AI",
    accentWord: "Duolingo",
    intro:
      "Duolingo did not win because it had the best language content. It won because it made a daily habit feel good: short sessions, streaks you do not want to break, and a sense of progress. WiseAI applies that exact playbook to the one skill everyone now needs, using and understanding AI.",
    highlights: [
      {
        title: "Streaks and daily missions",
        description:
          "Four quick missions a day, XP, badges, and streaks that make coming back tomorrow feel automatic.",
      },
      {
        title: "Practice, not just lessons",
        description:
          "Challenge an honest AI Trainer bot or a friend to a prompt battle and climb Bronze-to-Diamond ranks on the weekly leaderboard.",
      },
      {
        title: "An AI IQ test to benchmark you",
        description:
          "See how AI-fluent you really are, get a shareable score, and find exactly where to focus next.",
      },
    ],
    sections: [
      {
        heading: "Why the Duolingo model works",
        paragraphs: [
          "Motivation is unreliable. Systems are not. Duolingo replaced willpower with a loop: a tiny daily goal, instant feedback, visible streaks, and gentle competition. That loop is why people stick with it for years.",
          "The same loop works for AI, which is arguably a better fit. AI is genuinely useful the moment you learn it, so every lesson pays off in your real work the same day.",
        ],
      },
      {
        heading: "What that looks like for AI",
        paragraphs: [
          "Instead of translating sentences, you write and refine real prompts, spot AI hallucinations, decide when to delegate to AI and when not to, and compare tools for a task.",
          "Instead of a language tree, you move through learning paths that adapt to your level, with quizzes, flashcards, and prompt challenges that lock in what you learn.",
        ],
      },
      {
        heading: "How WiseAI does it",
        paragraphs: [
          "WiseAI wraps 457 interactive lessons in the gamified loop: daily missions, XP, streaks, ranks, and certificates for finished paths. It also adds something a language app does not need, a daily AI news briefing, so you are always learning the current field.",
          "WiseAI is a subscription, $49.99 a year or $9.99 a week, and it is live on the App Store.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there really a Duolingo for AI?",
        a: "Yes, WiseAI is built on the same idea: short daily sessions, streaks, XP, and an AI IQ test that make learning AI a habit instead of a chore. The difference is it also keeps you current with daily AI news.",
      },
      {
        q: "How does WiseAI make me practice?",
        a: "Head-to-head prompt battles. You can challenge an honest AI Trainer bot that plays it straight, or a friend, get scored, and climb ranks from Bronze to Diamond on the leaderboard.",
      },
      {
        q: "Is it free like Duolingo?",
        a: "No. WiseAI is a subscription app, $49.99 a year or $9.99 a week. The AI IQ test on the website is free and needs no signup.",
      },
      {
        q: "Who is it for?",
        a: "Anyone who wants to get fluent in AI without the overwhelm: students, professionals, founders, and creators. It adapts to your level and goals.",
      },
    ],
    related: [
      { href: "/best-ai-learning-app", label: "The best app to learn AI" },
      { href: "/learn-chatgpt", label: "Learn ChatGPT the practical way" },
      { href: "/ai-news-app", label: "Stay current on AI news" },
    ],
    ctaHeading: "Make learning AI a daily habit",
  },
  {
    slug: "ai-news-app",
    metaTitle: "The AI News App That Actually Keeps You Current | WiseAI",
    metaDescription:
      "25 personalized AI news picks daily from 30+ sources in a 60-second briefing, tied to lessons so it sticks. WiseAI is the AI news app for busy people.",
    keywords: [
      "AI news app",
      "AI news daily",
      "stay updated on AI",
      "best AI newsletter alternative",
      "AI updates app",
    ],
    eyebrow: "Stay current",
    headline: "The AI news app that actually keeps you current",
    accentWord: "AI",
    intro:
      "AI news is a firehose. A dozen newsletters, endless threads, and hype you cannot separate from what matters. Most of it goes unread, and you still feel behind. WiseAI fixes the signal-to-noise problem: 25 updates picked for you each day, condensed into a 60-second briefing, and tied to short lessons so the news becomes knowledge.",
    highlights: [
      {
        title: "25 picks, not a firehose",
        description:
          "Hand-picked daily from 30+ sources and filtered by your role and interests, so you read what matters to you and skip the rest.",
      },
      {
        title: "A 60-second briefing",
        description:
          "Today's AI in a swipeable story format you can finish over coffee, instead of a dozen tabs you never open.",
      },
      {
        title: "News that turns into knowledge",
        description:
          "Updates connect to lessons and your AI chat tutor, so a headline becomes something you actually understand and can use.",
      },
    ],
    sections: [
      {
        heading: "The problem with AI news",
        paragraphs: [
          "The volume is the problem. There is more AI news in a week than anyone can read, and most sources optimize for clicks, not for what will matter to your work.",
          "Newsletters help but they are one-size-fits-all and email-bound. You end up with a graveyard of unread issues and no sense of what you can safely ignore.",
        ],
      },
      {
        heading: "How WiseAI filters it",
        paragraphs: [
          "WiseAI pulls from 30+ trusted sources including OpenAI, Anthropic, Google DeepMind, MIT Technology Review, and more, then ranks and picks 25 updates a day based on your role and interests.",
          "It is condensed into a 60-second briefing in a swipeable story format. You get the signal without the doomscroll.",
        ],
      },
      {
        heading: "News that actually sticks",
        paragraphs: [
          "Reading a headline is not the same as understanding it. WiseAI connects updates to short lessons and an AI chat tutor grounded in your reading history, so a new model release or technique becomes something you can explain and use.",
          "The daily briefing is included with a WiseAI subscription. WiseAI is live on the App Store.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best app to stay updated on AI?",
        a: "WiseAI is built for exactly this. Each day it picks 25 AI updates from 30+ sources based on your role and condenses them into a 60-second briefing, then ties them to lessons so the news sticks.",
      },
      {
        q: "How is this different from an AI newsletter?",
        a: "Newsletters are one-size-fits-all and stuck in your inbox. WiseAI personalizes your picks, delivers them in a fast swipeable briefing, and connects each update to lessons and an AI tutor so it becomes knowledge, not just another unread email.",
      },
      {
        q: "Which sources does it pull from?",
        a: "30+ sources including OpenAI, Anthropic, Google DeepMind, Hugging Face, MIT Technology Review, The Verge, Ars Technica, and more.",
      },
      {
        q: "Is the news feed free?",
        a: "Yes, unlimited daily AI news is part of the free core experience.",
      },
    ],
    related: [
      { href: "/best-ai-learning-app", label: "The best app to learn AI" },
      { href: "/ai-for-work", label: "Using AI at work" },
      { href: "/duolingo-for-ai", label: "The Duolingo for AI" },
    ],
    ctaHeading: "Get the 60-second AI briefing",
  },
  {
    slug: "learn-chatgpt",
    metaTitle: "Learn ChatGPT the Practical Way | WiseAI",
    metaDescription:
      "Learn to actually use ChatGPT for real work with WiseAI: bite-sized lessons, prompt challenges, and honest tool comparisons.",
    keywords: [
      "learn ChatGPT",
      "how to use ChatGPT",
      "ChatGPT course app",
      "ChatGPT prompts",
      "ChatGPT for work",
    ],
    eyebrow: "Tool mastery",
    headline: "Learn ChatGPT the practical way",
    accentWord: "ChatGPT",
    intro:
      "Most people use ChatGPT at maybe 20 percent of what it can do. They type a question, take the first answer, and move on. Learning ChatGPT properly, how to prompt it, when to push back, and what it is genuinely good at, is one of the highest-return skills you can pick up right now. WiseAI teaches it by having you do it.",
    highlights: [
      {
        title: "Real prompts, real feedback",
        description:
          "Practice writing and refining prompts on real tasks, with instant feedback, instead of reading a list of tricks you forget by tomorrow.",
      },
      {
        title: "Know what it is good at",
        description:
          "Learn where ChatGPT shines and where another tool is the better call, so you stop forcing every task through one model.",
      },
      {
        title: "Spot the failure modes",
        description:
          "Practice catching hallucinations and weak answers so you can trust the output you ship.",
      },
    ],
    sections: [
      {
        heading: "What ChatGPT is actually best at",
        paragraphs: [
          "ChatGPT's strength is breadth. It is the most capable general-purpose assistant for everyday tasks: drafting, brainstorming, explaining, planning, and light coding, with a huge ecosystem of custom GPTs and integrations.",
          "Knowing that lets you use it well: reach for ChatGPT as your default all-rounder, and know when a task calls for something more specialized.",
        ],
      },
      {
        heading: "The mistakes that hold people back",
        paragraphs: [
          "The biggest one is treating it like a search box. Short, vague prompts get generic answers. The skill is giving it context, a role, a format, and a constraint.",
          "The second is taking the first answer as final. The best results come from a short back-and-forth: ask, review, refine. WiseAI's prompt challenges build exactly this reflex.",
        ],
      },
      {
        heading: "How WiseAI teaches ChatGPT",
        paragraphs: [
          "WiseAI has lessons and prompt challenges focused on getting real work done with ChatGPT, plus a 71-tool directory that compares it honestly against Claude, Gemini, and others so you pick the right tool per task.",
          "WiseAI is a subscription, $49.99 a year or $9.99 a week, and it is live on the App Store.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I learn to use ChatGPT properly?",
        a: "By practicing on real tasks with feedback, not by memorizing prompt lists. WiseAI teaches ChatGPT through bite-sized lessons and prompt challenges where you write, refine, and get scored.",
      },
      {
        q: "Is there a ChatGPT course in the app?",
        a: "WiseAI includes learning paths and prompt challenges focused on real ChatGPT use, plus honest comparisons with other tools so you know when ChatGPT is the right choice.",
      },
      {
        q: "Do I need to pay for ChatGPT to learn it here?",
        a: "No. WiseAI teaches the skills and lets you practice prompting; you can apply them in the free version of ChatGPT or any model you use.",
      },
      {
        q: "Will this help at work?",
        a: "Yes. The lessons focus on practical output: drafting, summarizing, planning, and using AI for common professional tasks.",
      },
    ],
    related: [
      { href: "/learn-claude", label: "Learn Claude" },
      { href: "/learn-gemini", label: "Learn Gemini" },
      { href: "/ai-for-work", label: "Using AI at work" },
    ],
    ctaHeading: "Get genuinely good at ChatGPT",
  },
  {
    slug: "learn-claude",
    metaTitle: "Learn Claude the Practical Way | WiseAI",
    metaDescription:
      "Learn to use Anthropic's Claude for writing, analysis, and code with WiseAI: bite-sized lessons, prompt challenges, and honest tool comparisons.",
    keywords: [
      "learn Claude",
      "how to use Claude",
      "Claude AI course",
      "Claude prompts",
      "Anthropic Claude",
    ],
    eyebrow: "Tool mastery",
    headline: "Learn Claude the practical way",
    accentWord: "Claude",
    intro:
      "Claude, from Anthropic, has quietly become the tool of choice for people who write, edit, and code for a living. It tends to be more careful, more thoughtful with long documents, and stronger at nuanced writing. Learning where it fits, and how to prompt it well, is worth having in your toolkit. WiseAI teaches it by having you use it.",
    highlights: [
      {
        title: "Best for writing and code",
        description:
          "Learn why Claude is many people's pick for careful writing, editing, and code you can trust, and how to get the most out of it.",
      },
      {
        title: "Work with long context",
        description:
          "Practice using Claude on long documents and multi-step tasks where it is especially strong.",
      },
      {
        title: "Prompt it well",
        description:
          "Real prompt challenges with feedback, so you learn Claude's style instead of guessing.",
      },
    ],
    sections: [
      {
        heading: "What Claude is actually best at",
        paragraphs: [
          "Claude's edge is quality on language-heavy work. It is careful, it is comfortable saying when it is unsure, and it handles long documents and nuanced writing especially well.",
          "For writing, editing, summarizing dense material, and code you want to trust, many power users keep Claude open in a second tab next to their general assistant.",
        ],
      },
      {
        heading: "How to get the most out of it",
        paragraphs: [
          "Give Claude room. It rewards clear context, a defined role, and examples of the tone or format you want. It is well suited to iterative work: draft, critique, revise.",
          "WiseAI's prompt challenges build these habits on real tasks, so you learn Claude's strengths by using them, not by reading about them.",
        ],
      },
      {
        heading: "How WiseAI teaches Claude",
        paragraphs: [
          "WiseAI includes lessons and prompt challenges for Claude, plus a 71-tool directory that compares Claude honestly against ChatGPT, Gemini, and others so you pick the right tool per task.",
          "WiseAI is a subscription, $49.99 a year or $9.99 a week, and it is live on the App Store.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Claude best for?",
        a: "Language-heavy work: careful writing, editing, summarizing long documents, and code you want to trust. WiseAI teaches where Claude fits and how to prompt it well through hands-on challenges.",
      },
      {
        q: "How is Claude different from ChatGPT?",
        a: "Claude tends to be more careful and stronger on nuanced writing and long documents, while ChatGPT has the widest general-purpose ecosystem. WiseAI compares them honestly so you know when to reach for each.",
      },
      {
        q: "Can I learn Claude for free here?",
        a: "No. WiseAI is a subscription, $49.99 a year or $9.99 a week. The AI IQ test on the website is free and needs no signup.",
      },
      {
        q: "Do I need a Claude subscription?",
        a: "No. WiseAI teaches the skills; you can apply them in Claude's free tier or any model you use.",
      },
    ],
    related: [
      { href: "/learn-chatgpt", label: "Learn ChatGPT" },
      { href: "/learn-gemini", label: "Learn Gemini" },
      { href: "/best-ai-learning-app", label: "The best app to learn AI" },
    ],
    ctaHeading: "Get genuinely good at Claude",
  },
  {
    slug: "learn-gemini",
    metaTitle: "Learn Gemini the Practical Way | WiseAI",
    metaDescription:
      "Learn to use Google's Gemini across Gmail, Docs, and Sheets with WiseAI: bite-sized lessons, prompt challenges, and honest tool comparisons.",
    keywords: [
      "learn Gemini",
      "how to use Gemini",
      "Google Gemini course",
      "Gemini prompts",
      "Gemini for work",
    ],
    eyebrow: "Tool mastery",
    headline: "Learn Gemini the practical way",
    accentWord: "Gemini",
    intro:
      "If your day runs on Gmail, Docs, and Sheets, Google's Gemini is already halfway into your workflow. Used well, it can draft, summarize, and pull things together right where you already work. Most people never get past the basics. WiseAI teaches Gemini the way you will actually use it, by doing.",
    highlights: [
      {
        title: "Built into your workspace",
        description:
          "Learn to use Gemini where your work already lives, across Google's apps, so it saves real time.",
      },
      {
        title: "Everyday task recipes",
        description:
          "Practical prompts for drafting, summarizing, and organizing, practiced with feedback.",
      },
      {
        title: "Know when to switch",
        description:
          "Learn where Gemini is the right call and where another tool wins, with honest comparisons.",
      },
    ],
    sections: [
      {
        heading: "What Gemini is actually best at",
        paragraphs: [
          "Gemini's advantage is integration. It lives inside the Google apps most people already use all day, which makes it the path of least resistance for drafting an email, summarizing a doc, or working through a spreadsheet.",
          "If your work runs on Google Workspace, learning Gemini pays off immediately because it meets you where you already are.",
        ],
      },
      {
        heading: "Getting real value from it",
        paragraphs: [
          "The wins come from using it in context: ask it to summarize the thread you are reading, draft the reply you need, or turn rough notes into a clean doc.",
          "WiseAI's prompt challenges build these habits on realistic tasks, so Gemini becomes a genuine time-saver instead of a novelty.",
        ],
      },
      {
        heading: "How WiseAI teaches Gemini",
        paragraphs: [
          "WiseAI includes lessons and prompt challenges for Gemini, plus a 71-tool directory that compares it honestly against ChatGPT, Claude, and others so you pick the right tool per task.",
          "WiseAI is a subscription, $49.99 a year or $9.99 a week, and it is live on the App Store.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Gemini best for?",
        a: "Working inside Google's apps: drafting in Gmail, summarizing in Docs, and analyzing in Sheets. WiseAI teaches practical Gemini use through hands-on prompt challenges.",
      },
      {
        q: "How is Gemini different from ChatGPT and Claude?",
        a: "Gemini's edge is deep integration with Google Workspace, while ChatGPT is the broadest general assistant and Claude leads on careful writing and code. WiseAI compares them honestly so you know when to use each.",
      },
      {
        q: "Is it free to learn Gemini here?",
        a: "No. WiseAI is a subscription, $49.99 a year or $9.99 a week. The AI IQ test on the website is free and needs no signup.",
      },
      {
        q: "Does WiseAI itself use Gemini?",
        a: "Yes, WiseAI's in-app AI chat tutor is powered by Gemini and grounded in your reading history and the latest AI news.",
      },
    ],
    related: [
      { href: "/learn-chatgpt", label: "Learn ChatGPT" },
      { href: "/learn-claude", label: "Learn Claude" },
      { href: "/ai-for-work", label: "Using AI at work" },
    ],
    ctaHeading: "Get genuinely good at Gemini",
  },
  {
    slug: "ai-for-work",
    metaTitle: "How to Use AI at Work Without the Overwhelm | WiseAI",
    metaDescription:
      "Get practical, job-ready AI skills with WiseAI: role-relevant lessons, prompt challenges, honest tool comparisons, and a daily AI briefing.",
    keywords: [
      "AI for work",
      "AI skills for professionals",
      "AI at work",
      "AI productivity",
      "upskill AI",
    ],
    eyebrow: "AI at work",
    headline: "Use AI at work without the overwhelm",
    accentWord: "AI",
    intro:
      "AI is moving into every job, and the pressure to keep up is real. The good news is you do not need to become an engineer or take a 40-hour course. You need a handful of practical skills, a way to stay current, and a habit that fits a busy schedule. That is what WiseAI is built for.",
    highlights: [
      {
        title: "Job-relevant, not academic",
        description:
          "Lessons focus on real work: drafting, summarizing, analysis, and using AI for common professional tasks, not data-science theory.",
      },
      {
        title: "Stay current in 10 minutes",
        description:
          "A daily AI briefing keeps you ahead of what is changing in your field without a research rabbit hole.",
      },
      {
        title: "Pick the right tool",
        description:
          "An honest 71-tool directory helps you choose the right AI for a task instead of guessing.",
      },
    ],
    sections: [
      {
        heading: "The skills that actually matter at work",
        paragraphs: [
          "Most workplace AI value comes from a few reliable moves: writing a clear prompt, giving the model the right context, checking its output, and knowing which tool fits which task.",
          "These are learnable in short sessions and they compound. Every hour you save with a better prompt is an hour back, every day.",
        ],
      },
      {
        heading: "Staying current without the overwhelm",
        paragraphs: [
          "Half the stress of AI at work is the feeling of falling behind. A short, personalized daily briefing fixes that: you see what changed, what matters for your role, and you move on.",
          "WiseAI picks 25 updates a day from 30+ sources and filters them to your role, so staying current takes a minute, not an afternoon.",
        ],
      },
      {
        heading: "How WiseAI fits into a workday",
        paragraphs: [
          "WiseAI is built for 10 minutes a day: read your briefing, finish a lesson, try a prompt challenge, explore a tool. It adapts to your role and goals when you start.",
          "WiseAI is a subscription, $49.99 a year or $9.99 a week, and it is live on the App Store.",
        ],
      },
    ],
    faqs: [
      {
        q: "What AI skills do I need for work?",
        a: "A few practical ones: writing clear prompts, giving good context, checking output, and picking the right tool for a task. WiseAI teaches these in short, job-relevant lessons rather than academic theory.",
      },
      {
        q: "I am not technical. Can I still learn this?",
        a: "Yes. WiseAI is built for professionals in non-technical roles and adapts to your level and job. No coding required.",
      },
      {
        q: "How do I keep up with AI changes for my job?",
        a: "WiseAI delivers a personalized 60-second daily briefing of 25 AI updates filtered to your role, so staying current takes about a minute a day.",
      },
      {
        q: "Is it free?",
        a: "WiseAI is a subscription, $49.99 a year or $9.99 a week.",
      },
    ],
    related: [
      { href: "/best-ai-learning-app", label: "The best app to learn AI" },
      { href: "/ai-news-app", label: "Stay current on AI news" },
      { href: "/learn-chatgpt", label: "Learn ChatGPT" },
    ],
    ctaHeading: "Build the AI skills your job needs",
  },
];

export function getLandingPage(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug);
}
