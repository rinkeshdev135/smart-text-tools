type ToolContentSection = {
  heading: string;
  paragraphs: string[];
};

type ToolExample = {
  title: string;
  before: string;
  after: string;
};

type ToolContent = {
  intro: string[];
  sections: ToolContentSection[];
  examples: ToolExample[];
  faq: Array<{ question: string; answer: string }>;
};

export const toolContent: Record<string, ToolContent> = {
  "text-cleaner": {
    intro: [
      "Text Cleaner helps you remove the clutter that appears when text is copied from websites, documents, spreadsheets, or chat threads. Instead of fixing spacing, line breaks, and symbols by hand, you can paste the raw text and clean it in seconds.",
      "This kind of cleanup matters when you are preparing content for publishing, sending polished client notes, importing text into another tool, or standardizing messy source material before a second step such as case conversion or word counting."
    ],
    sections: [
      {
        heading: "How to use this tool",
        paragraphs: [
          "Paste the text you want to fix into the input area, then switch the cleanup options on or off depending on the problem you need to solve. The output updates automatically, so you can compare changes in real time without submitting a form.",
          "Use extra-space removal for pasted text with inconsistent spacing, line-break removal for copied paragraphs that were broken across multiple lines, and trim whitespace when you want a clean final result with no stray spaces at the start or end."
        ]
      },
      {
        heading: "When Text Cleaner is useful",
        paragraphs: [
          "Writers can use it to fix pasted article drafts, marketers can clean ad copy before publishing, and developers can normalize snippets before moving text into configs, spreadsheets, or CMS fields.",
          "It is also helpful when copied text contains HTML fragments or symbol noise that makes content harder to read or harder to process in later tools."
        ]
      },
      {
        heading: "Why clean text before anything else",
        paragraphs: [
          "Text cleanup improves accuracy for later transformations. Cleaner input leads to better word counts, better keyword density checks, and more predictable case conversion output.",
          "It also reduces manual editing time, especially when you are working with repeated blocks of messy text across landing pages, reports, support docs, or classroom material."
        ]
      }
    ],
    examples: [
      {
        title: "Remove double spaces",
        before: "This  sentence    has uneven spacing.",
        after: "This sentence has uneven spacing."
      },
      {
        title: "Flatten line breaks",
        before: "Line one\nLine two\nLine three",
        after: "Line one Line two Line three"
      },
      {
        title: "Strip HTML noise",
        before: "<p>Hello <strong>world</strong></p>",
        after: "Hello world"
      }
    ],
    faq: [
      {
        question: "How do I clean text online for free?",
        answer:
          "Paste your content into the tool, enable the cleanup options you need, and copy the cleaned version from the output panel."
      },
      {
        question: "Can this remove extra spaces from copied text?",
        answer:
          "Yes. The tool can collapse repeated spaces so pasted text becomes easier to read and reuse."
      },
      {
        question: "Does Text Cleaner remove line breaks too?",
        answer:
          "Yes. You can turn on line-break removal when you want separate lines merged into a continuous paragraph."
      },
      {
        question: "Can I strip HTML tags from text?",
        answer:
          "Yes. There is a dedicated option for stripping simple HTML tags from pasted content."
      },
      {
        question: "Is the cleanup done in the browser?",
        answer:
          "That is the intended Phase 1 behavior. The tool processes text client-side so you can get instant results without a server round trip."
      }
    ]
  },
  "case-converter": {
    intro: [
      "Case Converter helps you switch text into the exact letter style you need without retyping it by hand. Whether you are formatting headings, cleaning spreadsheet exports, or preparing variable names, the output updates instantly.",
      "This is especially useful for people who move text between writing tools and technical tools. A single paragraph might need title case for a heading, lowercase for normalization, or snake_case for a code-friendly identifier."
    ],
    sections: [
      {
        heading: "How to use this tool",
        paragraphs: [
          "Paste your text into the input box, then click the conversion mode you want. Each button applies its format immediately so you can compare results and copy the right version for your next step.",
          "The page is designed for quick iteration. You can test multiple modes on the same input without extra setup or page reloads."
        ]
      },
      {
        heading: "Where case conversion helps",
        paragraphs: [
          "Writers often need sentence case or title case for headings, while developers and analysts often need camelCase or snake_case for identifiers, file labels, or structured exports.",
          "Marketers also use case conversion when cleaning ad headlines, metadata drafts, and CTA variants that need consistent capitalization across campaigns."
        ]
      },
      {
        heading: "Why consistency matters",
        paragraphs: [
          "Consistent capitalization improves readability and makes content look more professional. It also reduces editing mistakes when the same phrase is reused across documents, UI labels, or structured content fields.",
          "For technical workflows, consistent casing can prevent naming drift and make copied values easier to scan inside code or documentation."
        ]
      }
    ],
    examples: [
      {
        title: "Title Case",
        before: "smart text tools project plan",
        after: "Smart Text Tools Project Plan"
      },
      {
        title: "Sentence case",
        before: "hello world. this is a test.",
        after: "Hello world. This is a test."
      },
      {
        title: "snake_case",
        before: "Project Launch Checklist",
        after: "project_launch_checklist"
      }
    ],
    faq: [
      {
        question: "How do I convert text to uppercase online?",
        answer:
          "Paste your text into the tool and click the UPPERCASE button to transform it instantly."
      },
      {
        question: "Can I change text to title case for headlines?",
        answer:
          "Yes. Title Case is included and works well for headings, section labels, and article titles."
      },
      {
        question: "Does this support camelCase and snake_case?",
        answer:
          "Yes. Both formats are available so you can quickly prepare code-friendly naming styles."
      },
      {
        question: "Is there a lowercase option too?",
        answer:
          "Yes. You can convert any input to lowercase with one click."
      },
      {
        question: "Do I need to upload a file?",
        answer:
          "No. You can paste text directly into the page and copy the converted result right away."
      }
    ]
  },
  "word-counter": {
    intro: [
      "Word Counter gives you a fast snapshot of how long a piece of writing is and how that text is structured. It tracks words, characters, sentences, paragraphs, reading time, and top keyword frequency in one place.",
      "That makes it useful for essays, blog drafts, social copy, product descriptions, and SEO-focused writing where length and repetition both matter."
    ],
    sections: [
      {
        heading: "How to use this tool",
        paragraphs: [
          "Paste your text into the input area and the metrics update immediately. There is no submit button because the goal is to make length checks and content adjustments feel instant while you edit.",
          "The stat grid is designed to answer the most common questions quickly: how many words are here, how long will it take to read, and which words are appearing most often."
        ]
      },
      {
        heading: "When Word Counter is useful",
        paragraphs: [
          "Students can use it to stay inside essay limits, content teams can check article length before publishing, and SEO writers can use the keyword table to spot repeated wording before a final pass.",
          "It is also helpful for UI or product teams who need to estimate text length for labels, descriptions, or small content blocks."
        ]
      },
      {
        heading: "Why these metrics matter",
        paragraphs: [
          "Word count and character count help with publishing constraints, while sentence and paragraph counts give a quick view of readability and structure.",
          "Reading time helps you estimate audience effort, and keyword density helps you notice whether a few terms are dominating the draft too heavily."
        ]
      }
    ],
    examples: [
      {
        title: "Essay check",
        before: "A short draft that feels longer than it is.",
        after: "Use the tool to confirm the actual word count before submission."
      },
      {
        title: "SEO review",
        before: "A blog draft repeats one phrase too often.",
        after: "Use top keywords to spot overused terms and revise naturally."
      },
      {
        title: "Reading estimate",
        before: "A long article with unknown reading time.",
        after: "Use the reading time card to estimate how long the content will take."
      }
    ],
    faq: [
      {
        question: "How do I count words online for free?",
        answer:
          "Paste your text into the word counter and the page calculates the totals instantly."
      },
      {
        question: "Does this show characters without spaces?",
        answer:
          "Yes. The stat grid includes both character count with spaces and character count without spaces."
      },
      {
        question: "Can I estimate reading time here?",
        answer:
          "Yes. The tool estimates reading time based on a 200 words per minute pace."
      },
      {
        question: "Does this include keyword density?",
        answer:
          "Yes. The page shows the top five keyword-density results for the current input."
      },
      {
        question: "Is this useful for essays and articles?",
        answer:
          "Yes. It works well for academic writing, blog posts, product copy, and general drafting."
      }
    ]
  },
  "remove-duplicate-lines": {
    intro: [
      "Duplicate Line Remover is built for line-based cleanup. It helps when lists, exports, logs, or copied rows contain repeated entries and you need to keep only the first version of each line.",
      "Instead of scanning manually, you can paste the entire block, choose how duplicates should be compared, and get a clean unique list instantly."
    ],
    sections: [
      {
        heading: "How to use this tool",
        paragraphs: [
          "Paste one item per line into the input area, then decide whether comparison should be case sensitive and whether surrounding whitespace should be trimmed before matching.",
          "The output updates automatically and shows how many duplicate lines were removed, making it easy to confirm the result before copying it."
        ]
      },
      {
        heading: "Where duplicate-line cleanup helps",
        paragraphs: [
          "This is useful for keyword lists, email lists, inventory rows, log snippets, copied spreadsheet columns, and any workflow where repeated lines create noise or errors.",
          "It is especially handy when copied values look different only because of case or spacing, which is why the comparison toggles matter."
        ]
      },
      {
        heading: "Why keeping the first occurrence matters",
        paragraphs: [
          "Many cleanup workflows need stable order. Keeping the first version preserves the original sequence while removing redundant repeats later in the list.",
          "That makes the result easier to trust when you are preparing imports, cleaning lists for research, or simplifying large pasted datasets."
        ]
      }
    ],
    examples: [
      {
        title: "Basic dedupe",
        before: "Apple\nBanana\nApple\nOrange",
        after: "Apple\nBanana\nOrange"
      },
      {
        title: "Case-insensitive matching",
        before: "alpha\nAlpha\nALPHA",
        after: "alpha"
      },
      {
        title: "Trim before comparing",
        before: "Item A\nItem A \n Item A",
        after: "Item A"
      }
    ],
    faq: [
      {
        question: "How do I remove duplicate lines online?",
        answer:
          "Paste your lines into the tool, choose the comparison options you want, and copy the unique-line result."
      },
      {
        question: "Does it keep the first occurrence?",
        answer:
          "Yes. The tool removes repeated matches later in the list and keeps the first matching line."
      },
      {
        question: "Can I compare lines without case sensitivity?",
        answer:
          "Yes. Case-sensitive comparison is optional, so you can treat Alpha and alpha as the same line when needed."
      },
      {
        question: "What does trim whitespace before comparing mean?",
        answer:
          "It means leading and trailing spaces are removed before duplicate matching, which helps when visually identical values were pasted with spacing differences."
      },
      {
        question: "Can I copy the cleaned list?",
        answer:
          "Yes. The output panel includes a copy action so you can reuse the unique list immediately."
      }
    ]
  },
  "text-to-bullet-points": {
    intro: [
      "Text to Bullet Points turns unstructured writing into a list you can scan, share, or reuse. It is useful when a paragraph needs to become meeting notes, checklist items, outline points, or formatted summary bullets.",
      "The tool supports multiple split modes and list styles, so you can adapt the result to different writing contexts without reformatting manually."
    ],
    sections: [
      {
        heading: "How to use this tool",
        paragraphs: [
          "Paste the source text into the input box, choose whether to split by sentence, line, or paragraph, then select the list style you want. The formatted list appears automatically in the output area.",
          "If you need a custom marker for documentation or a brand style guide, switch to the custom option and enter your own short bullet symbol."
        ]
      },
      {
        heading: "When list conversion helps",
        paragraphs: [
          "This tool works well for turning article notes into outline points, converting raw ideas into action lists, or reformatting paragraphs into presentation-ready bullets.",
          "It is also useful for students, marketers, and operations teams who frequently need cleaner list structure without opening a full editor."
        ]
      },
      {
        heading: "Why bullets improve readability",
        paragraphs: [
          "Lists make dense information easier to scan because each point becomes visually distinct. That helps readers find key ideas faster and makes the text easier to reuse in slides, briefs, or checklists.",
          "Structured lists can also reduce editing time because you are starting from a clean, copy-ready format instead of manually inserting symbols and spacing."
        ]
      }
    ],
    examples: [
      {
        title: "Sentence to bullets",
        before: "Review the brief. Update the draft. Send the final copy.",
        after: "* Review the brief.\n* Update the draft.\n* Send the final copy."
      },
      {
        title: "Line to numbered list",
        before: "Design\nBuild\nLaunch",
        after: "1. Design\n2. Build\n3. Launch"
      },
      {
        title: "Paragraph to custom bullets",
        before: "First idea.\n\nSecond idea.",
        after: "-> First idea.\n-> Second idea."
      }
    ],
    faq: [
      {
        question: "How do I convert text to bullet points?",
        answer:
          "Paste your text into the tool, choose a split mode and list style, then copy the formatted result."
      },
      {
        question: "Can I create a numbered list instead of bullets?",
        answer:
          "Yes. The list-style menu includes a numbered option that formats each item automatically."
      },
      {
        question: "Can I split by paragraph or by line?",
        answer:
          "Yes. You can split the source text by sentence, line, or paragraph depending on the structure you need."
      },
      {
        question: "What is the custom bullet option for?",
        answer:
          "It lets you define your own short marker so the list matches a preferred writing style or formatting rule."
      },
      {
        question: "Will it remove empty list items?",
        answer:
          "Yes. There is an option to remove empty bullets so the final output stays clean."
      }
    ]
  }
};
