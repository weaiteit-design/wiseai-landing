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
  {
    question: "A task needs careful multi-step logic and you can afford a few extra seconds. What do you reach for?",
    options: [
      "A reasoning model that works through steps before answering",
      "The fastest, cheapest chat model available",
      "A model with the largest context window",
      "A vision model, since it handles more input types",
    ],
    correctIndex: 0,
    explanation: "Reasoning models spend extra compute on intermediate steps, which is exactly what multi-step logic needs. Speed, context length and vision solve unrelated problems.",
  },
  {
    question: "Your assistant must answer from a company handbook that changes every week. The right architecture?",
    options: [
      "Retrieve the relevant handbook passages at query time",
      "Fine-tune the model on the handbook every week",
      "Paste the entire handbook into the system prompt",
      "Lower the temperature so it stops inventing answers",
    ],
    correctIndex: 0,
    explanation: "Retrieval keeps the source of truth outside the model, so an edit is live the moment it is saved. Fine-tuning bakes knowledge in and has to be redone constantly.",
  },
  {
    question: "Your agent reads public web pages and can send email. What should you design against?",
    options: [
      "Instructions hidden inside a page hijacking the agent",
      "The model running out of context window",
      "Rate limits from your email provider",
      "Pages written in a language you did not expect",
    ],
    correctIndex: 0,
    explanation: "Any text an agent reads can contain instructions. Treat fetched content as untrusted data, and never let it authorize an action on its own.",
  },
  {
    question: "Search must find \"how do I cancel\" when the document says \"ending your subscription\". What powers that?",
    options: [
      "Embedding both and comparing them by meaning",
      "A keyword index with wildcard matching",
      "A larger context window",
      "Raising the temperature for looser matches",
    ],
    correctIndex: 0,
    explanation: "Embeddings map text into vectors by meaning, so different wording for the same idea lands close together. Keyword search misses it because no words actually overlap.",
  },
  {
    question: "The model understands the task but keeps formatting the answer wrong. Cheapest reliable fix?",
    options: [
      "Show it two or three worked examples",
      "Switch to a substantially larger model",
      "Raise the maximum output token limit",
      "Repeat the instruction in capital letters",
    ],
    correctIndex: 0,
    explanation: "Examples communicate shape far more reliably than description does. Model size, token limits and emphasis do not teach format.",
  },
  {
    question: "You are brainstorming product names and want genuinely varied options. Which setting?",
    options: [
      "Raise the temperature",
      "Set the temperature to zero",
      "Increase the context window",
      "Add a stop sequence after each name",
    ],
    correctIndex: 0,
    explanation: "Temperature controls randomness during sampling. Zero makes output repeatable and samey, which is the opposite of what brainstorming needs.",
  },
  {
    question: "A generated image is perfect except for one mangled hand. Fastest route to a usable image?",
    options: [
      "Mask just the hand and inpaint that region",
      "Regenerate the whole image with a new seed",
      "Upscale it and hope the hand resolves",
      "Add \"perfect hands\" to the negative prompt and retry",
    ],
    correctIndex: 0,
    explanation: "Inpainting edits only the masked region and preserves everything else. Regenerating throws away an image that already works.",
  },
  {
    question: "You have 200 scanned invoices as images and need the totals in a spreadsheet. What does the work?",
    options: [
      "A vision model reading each image into structured fields",
      "A text-only chat model given the filenames",
      "An image generation model",
      "A speech to text model",
    ],
    correctIndex: 0,
    explanation: "Vision models read pixels and can emit structured fields per document. A text model cannot see the file at all.",
  },
  {
    question: "You tweaked a prompt and it feels better. How do you know that it actually is?",
    options: [
      "Run both versions against a fixed set of test cases and score them",
      "Try it a few times and trust your judgement",
      "Ask the model which of the two prompts is better",
      "Check whether the new output is longer and more detailed",
    ],
    correctIndex: 0,
    explanation: "A fixed test set turns \"feels better\" into a measurable comparison. Impressions drift, and a model asked to grade itself is not evidence.",
  },
  {
    question: "A 900-page manual will not fit in one prompt. Standard approach?",
    options: [
      "Split it into chunks and retrieve only the relevant ones",
      "Summarize it repeatedly until it fits",
      "Send it across twenty consecutive messages",
      "Switch to a higher temperature to compress it",
    ],
    correctIndex: 0,
    explanation: "Chunking plus retrieval sends only the passages that matter to the question. Summarizing first destroys the detail you will later need to quote.",
  },
  {
    question: "You want the model to look up a live order status mid-conversation. What makes that possible?",
    options: [
      "Give it a tool it can call for the lookup",
      "Paste the order database into the prompt",
      "Fine-tune it on a year of past orders",
      "Raise its maximum output tokens",
    ],
    correctIndex: 0,
    explanation: "Tool calling lets the model request live data and use what comes back. Pasted or fine-tuned data is a snapshot that is stale the moment it is written.",
  },
  {
    question: "Rules that must hold for every message in a long conversation belong where?",
    options: [
      "In the system prompt",
      "Repeated inside every single user message",
      "In the first user message only",
      "In the model's temperature setting",
    ],
    correctIndex: 0,
    explanation: "The system prompt persists across the whole conversation and is weighted as standing instruction. A rule stated once in the first message gets buried as the chat grows.",
  },
  {
    question: "Your AI-written summary has to be checkable by a colleague. What do you require from it?",
    options: [
      "A quoted source passage supporting each claim",
      "A confidence percentage next to each claim",
      "A longer and more thorough write-up",
      "A lower temperature during generation",
    ],
    correctIndex: 0,
    explanation: "A quoted passage can be checked against the original document. Confidence numbers are self-reported, and lower temperature does not make a claim true.",
  },
  {
    question: "You want your written lesson available as natural audio for the commute. What produces it?",
    options: [
      "A text to speech model",
      "A speech to text model",
      "An embedding model",
      "A vision model",
    ],
    correctIndex: 0,
    explanation: "Text to speech turns your text into spoken audio. Speech to text does the reverse, and neither embeddings nor vision produce sound.",
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
