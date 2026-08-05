// Ported from the iOS app: code/constants/aiIqTest.ts
// Keep the two in sync. The bank holds more questions than are shown, and both
// the question order and the option order are shuffled per attempt, so the
// answer position can never be memorised.
//
// Note there are deliberately NO population statistics here. The app used to
// claim "you beat X% of people" from a hard-coded array; that was removed
// because it was never measured. Do not add one back without real cohort data.

export interface IqQuestion {
  /** The prompt shown to the user */
  question: string;
  /** Options in display order */
  options: string[];
  /** Index into `options` of the correct answer */
  correctIndex: number;
  /** One-line teach-back shown after answering (the "learn something" payoff) */
  explanation: string;
}

export interface IqBand {
  /** Brand rank-style title for the score */
  title: string;
  /** Short, encouraging blurb tuned to the score */
  blurb: string;
  /** Rough "you beat X% of people" figure for share/social copy */
  /** Which palette accent to theme the result with: 'accent' | 'success' | 'secondary' */
  tone: 'secondary' | 'accent' | 'success';
  /** Mascot mood for the result screen */
  mood: 'thinking' | 'happy' | 'excited';
}

export const AI_IQ_SHOWN = 10;
export const AI_IQ_TOTAL = AI_IQ_SHOWN;

export const AI_IQ_QUESTIONS: IqQuestion[] = [
  {
    question: 'You need the same original character to recur across a dozen generated images. What actually does it?',
    options: [
      'Give the model a character reference (cref)',
      'Turn the temperature all the way down',
      'Add a negative prompt for the variation',
      'Use a bigger aspect ratio, then upscale',
    ],
    correctIndex: 0,
    explanation: 'A character reference locks identity across renders; temperature, negative prompts and aspect ratio do nothing to control who appears.',
  },
  {
    question: 'Your app calls an AI and must get back valid JSON every single time. The dependable move?',
    options: [
      "Use the model's structured output mode",
      'Lower the temperature down to zero',
      'Add a stop sequence after the JSON',
      'Raise the maximum output token limit',
    ],
    correctIndex: 0,
    explanation: 'Structured output constrains the format as the model decodes, so it is always valid JSON. The others only nudge it and still break at scale.',
  },
  {
    question: 'You have one image whose exact look you want applied to new, different images. What transfers it?',
    options: [
      'Pass it as a style reference (sref)',
      'Push the stylize value much higher',
      'Reuse the exact same seed number',
      'Stack more style adjectives in the prompt',
    ],
    correctIndex: 0,
    explanation: "A style reference carries an image's look across new subjects; stylize, seed and adjectives cannot copy a specific reference.",
  },
  {
    question: 'You want a two-host, listenable audio summary of your own research PDFs for the commute. Best fit?',
    options: [
      "A notebook tool's audio overview feature",
      'A voice cloner reading the PDFs aloud',
      'A chatbot summary piped into text-to-speech',
      'A meeting notetaker pointed at the files',
    ],
    correctIndex: 0,
    explanation: 'Audio overview turns your uploaded sources into a grounded two-host conversation; the others just read text or lose the grounding.',
  },
  {
    question: 'You want your AI coding agent to always follow your team conventions without repeating them. How?',
    options: [
      'Put them in a project rules file it reads',
      "Enlarge the model's context window size",
      'Paste the conventions into every prompt',
      'Scatter them as comments across the code',
    ],
    correctIndex: 0,
    explanation: 'A rules file is auto-loaded on every run; per-prompt reminders and stray comments are inconsistent and do not scale.',
  },
  {
    question: 'You resend the same large document with every question and the bill keeps climbing. The fix?',
    options: [
      'Enable prompt caching for that context',
      'Switch to a smaller and cheaper model',
      'Lower the temperature on every call',
      'Trim a few lines off each request',
    ],
    correctIndex: 0,
    explanation: 'Prompt caching reuses the already-processed context, so you stop paying to reprocess the same document on every call.',
  },
  {
    question: 'You need AI to actually finish a task inside a web app that has no API. What works?',
    options: [
      'A computer-use browser agent that clicks',
      'A chatbot listing the exact click steps',
      'A recorded spreadsheet macro for the task',
      'An image model reading a page screenshot',
    ],
    correctIndex: 0,
    explanation: 'Computer-use agents operate the real interface; a chatbot can only describe the clicks and cannot perform them.',
  },
  {
    question: 'You must analyze sensitive text with nothing leaving your machine at all. The right setup?',
    options: [
      'A local open-weights model like Ollama',
      'A cloud chatbot with history turned off',
      'An enterprise tier with a privacy policy',
      'A private browser window into a chatbot',
    ],
    correctIndex: 0,
    explanation: 'Only local inference keeps data on-device; every cloud option, policy or private window still sends your text to a server.',
  },
  {
    question: 'An AI gives you a confident statistic for a client report, but you cannot find it anywhere. Do what?',
    options: [
      'Ask for its source, then open and check it',
      'Ask "are you sure?" and keep it if it agrees',
      'Regenerate a few times and keep what repeats',
      'Use it, confident answers are usually right',
    ],
    correctIndex: 0,
    explanation: 'Models state made-up facts with full confidence and will happily "confirm" them. Repetition proves nothing; verify at the source.',
  },
  {
    question: 'You need reliable answers about a specific 30-page contract. The most dependable approach?',
    options: [
      'Attach the contract and ask about that text',
      'Name the contract; big models have read it',
      'Describe it from memory and ask what is usual',
      'Put everything you recall in one long question',
    ],
    correctIndex: 0,
    explanation: 'The model only truly knows what you show it. Give it the real document and its answers become grounded instead of guessed.',
  },
  {
    question: "The AI's first draft is about 70% right. The fastest path to a finished version?",
    options: [
      'Stay in the chat and fix the 30% specifically',
      'Start fresh with a longer, more detailed prompt',
      'Hit regenerate until a perfect version appears',
      'Take it as-is; output rarely improves after one',
    ],
    correctIndex: 0,
    explanation: 'The chat already holds your goal and draft, so precise feedback ("cut point 2, drop the jargon") converges faster than restarting.',
  },
  {
    question: 'You need output in an exact structure, a table with specific columns. The pro move?',
    options: [
      'Show one filled-in example of the exact format',
      'Ask for "a professional table" and fix it after',
      'Tell it to use the standard format for your field',
      'Describe the format in words; examples confuse it',
    ],
    correctIndex: 0,
    explanation: 'Showing beats telling: one worked example (a few-shot prompt) gets near-perfect structure on the first try.',
  },
  {
    question: "You need this week's pricing for three competitor products. Which habit is right?",
    options: [
      'Use a live-web answer engine and open its links',
      'Any chatbot works; their knowledge updates daily',
      'Ask twice in different words and trust the overlap',
      'Ask its knowledge cutoff, then trust anything prior',
    ],
    correctIndex: 0,
    explanation: 'For anything current you need live web search and you still open the cited links; plain chatbot "knowledge" is stale and can misremember.',
  },
  {
    question: 'You have 20 PDFs and need answers grounded only in them, with citations. Best fit?',
    options: [
      'A source-grounded notebook tool over your files',
      'A web answer engine searching about those papers',
      'One chat with all twenty pasted in together',
      'A chatbot summarizing each from its training',
    ],
    correctIndex: 0,
    explanation: 'You want answers grounded in your documents, not the open web; a notebook tool cites the exact passage it used.',
  },
  {
    question: 'You want an AI to always write in your brand tone without re-explaining it each chat. Set up what?',
    options: [
      'Save the tone once in custom instructions',
      'Paste your full tone guide into every chat',
      'Keep one endless chat so it holds the tone',
      'Say your tone once and trust it to remember',
    ],
    correctIndex: 0,
    explanation: 'Custom instructions or memory persist across chats and can be shared; one endless chat degrades and pasting every time is brittle.',
  },
];

export function scoreToBand(score: number): IqBand {
  if (score <= 3) {
    return {
      title: 'AI Curious',
      blurb: "You're just getting started, and honestly that's the best place to be. These were tough. A few minutes a day and you'll climb fast.",
      tone: 'secondary',
      mood: 'thinking',
    };
  }
  if (score <= 5) {
    return {
      title: 'AI Aware',
      blurb: "Right around average on a genuinely hard test. You know the basics, and a daily lesson or two will pull you well ahead of the pack.",
      tone: 'accent',
      mood: 'happy',
    };
  }
  if (score <= 7) {
    return {
      title: 'AI Fluent',
      blurb: "Strong result on hard questions. You already use AI better than most people around you. Let's turn that into real daily fluency.",
      tone: 'accent',
      mood: 'happy',
    };
  }
  if (score <= 9) {
    return {
      title: 'AI Power User',
      blurb: "Seriously impressive on a test built to be hard. You really know your tools, and WiseAI will keep you on the very edge of what's new.",
      tone: 'success',
      mood: 'excited',
    };
  }
  return {
    title: 'AI Wizard',
    blurb: "Perfect score, you clearly know your stuff. But honestly, this was the easy part. Using AI well in real work goes much deeper than a quiz, and WiseAI has a lot more to throw at you.",
    tone: 'success',
    mood: 'excited',
  };
}

/** A fresh attempt: AI_IQ_SHOWN random questions, each with shuffled options. */
export function buildAttempt(): IqQuestion[] {
  const pick = [...AI_IQ_QUESTIONS];
  for (let i = pick.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pick[i], pick[j]] = [pick[j], pick[i]];
  }
  return pick.slice(0, AI_IQ_SHOWN).map((q) => {
    const order = q.options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return {
      ...q,
      options: order.map((i) => q.options[i]),
      correctIndex: order.indexOf(q.correctIndex),
    };
  });
}
