export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Generate 5 engaging blog titles as bullet points based on the provided niche and outline. Ensure the titles are concise, catchy, and relevant to the blog’s theme. Present the result in a format suitable for a Rich Text Editor.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that generates engaging and structured blog content based on your provided topic and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Create a well-structured blog post based on the provided topic and outline. The content should be engaging, informative, and divided into clear sections (introduction, body, conclusion). Format the result for a Rich Text Editor, ensuring proper use of headings, paragraphs, and bullet points where necessary.",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that generates catchy and relevant blog topic ideas based on your niche.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate the top 5 blog topic ideas as bullet points, without descriptions, based on the provided niche. Ensure the ideas are unique and relevant to the niche. Present the result in a Rich Text Editor format.",
    form: [
      {
        label: "Enter your niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "YouTube SEO Title",
    desc: "An AI tool that generates SEO-optimized titles for your YouTube videos.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Generate 5 high-ranking, SEO-optimized YouTube video titles based on the provided keywords and outline. Format each title as an HTML list item (`<li>`). Ensure titles are concise, impactful, and include relevant keywords for better search visibility.",
    form: [
      {
        label: "Enter your YouTube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter YouTube description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube Description",
    desc: "An AI tool that generates engaging YouTube video descriptions, complete with emojis.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate a concise YouTube description (4-5 lines) with relevant emojis based on the provided topic and outline. Present the result in a format suitable for a Rich Text Editor.",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter YouTube outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube Tags",
    desc: "An AI tool that generates relevant tags for your YouTube videos.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",
    aiPrompt:
      "Generate 10 relevant YouTube tags as bullet points based on the provided title and outline. Present the result in a format suitable for a Rich Text Editor.",
    form: [
      {
        label: "Enter your YouTube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter YouTube video outline here (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing articles or blog posts to make them plagiarism-free and bypass AI detectors.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite the provided article to be 100% plagiarism-free while retaining the original meaning and tone. Ensure the output is well-structured, grammatically correct, and formatted for a Rich Text Editor, with proper use of paragraphs and bullet points where applicable.",
    form: [
      {
        label:
          "🤖 Provide your article/blog post or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This tool refines your writing, eliminating errors and redundancies for a clear, readable result.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Rewrite the provided text to improve clarity, eliminate errors, and ensure a professional tone. Format the result for a Rich Text Editor, with correct grammar and punctuation.",
    form: [
      {
        label: "Enter text that you want to rewrite or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that enhances your text by adding relevant emojis.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "Blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add relevant emojis to the provided text, enhancing its meaning and emotional impact. Format the result for a Rich Text Editor.",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Bio",
    desc: "An AI tool that generates a catchy and concise bio for your social media profiles.",
    icon: "https://cdn-icons-png.flaticon.com/128/1077/1077012.png",
    category: "Social Media",
    slug: "social-media-bio",
    aiPrompt:
      "Generate a catchy and concise bio for a social media profile based on the provided keywords and desired tone. Format the result for a Rich Text Editor.",
    form: [
      {
        label: "Enter keywords describing you/your profile",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Desired tone (e.g., professional, casual, humorous)",
        field: "input",
        name: "tone",
      },
    ],
  },
  {
    name: "Product Description",
    desc: "An AI tool that generates compelling product descriptions for e-commerce platforms.",
    icon: "https://cdn-icons-png.flaticon.com/128/2721/2721259.png",
    category: "E-commerce",
    slug: "product-description",
    aiPrompt:
      "Write a compelling and concise product description based on the provided product details. The description should highlight key features, benefits, and any unique selling points. Format the result for a Rich Text Editor.",
    form: [
      {
        label: "Enter product details (features, benefits, etc.)",
        field: "textarea",
        name: "productDetails",
        required: true,
      },
    ],
  },
  {
    name: "Email Subject Line",
    desc: "An AI tool that generates attention-grabbing subject lines for your emails.",
    icon: "https://cdn-icons-png.flaticon.com/128/1233/1233933.png",
    category: "Email",
    slug: "email-subject-line",
    aiPrompt:
      "Generate 5 attention-grabbing email subject lines based on the provided email content or purpose. Format each subject line as an HTML list item (`<li>`). Ensure the subject lines are concise, relevant, and engaging.",
    form: [
      {
        label: "Enter email content or purpose",
        field: "textarea",
        name: "emailContent",
        required: true,
      },
    ],
  },
  {
    name: "Cold Email Template",
    desc: "An AI tool that generates professional cold email templates based on your input.",
    icon: "https://cdn-icons-png.flaticon.com/128/2374/2374090.png",
    category: "Email",
    slug: "cold-email-template",
    aiPrompt:
      "Generate a professional cold email template based on the provided purpose and details. The email should include a polite introduction, the main message, and a clear call to action. Format the result for a Rich Text Editor, ensuring proper structure and tone.",
    form: [
      {
        label: "Enter the purpose of your cold email",
        field: "input",
        name: "purpose",
        required: true,
      },
      {
        label: "Enter any additional details to include",
        field: "textarea",
        name: "details",
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammer and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI model to generate programming code in any language based on user input.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",
    slug: "write-code",
    aiPrompt:
      "Generate code in the specified programming language based on the provided description. Ensure the code is well-commented and follows best practices for the language. Output the code in a rich text editor format with proper syntax highlighting.",
    form: [
      {
        label:
          "Enter description of the code you want along with the programming language",
        field: "textarea",
        name: "desc",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI model to explain programming code in any language line by line.",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",
    slug: "explain-code",
    aiPrompt:
      "Explain the provided code line by line, detailing its function and purpose. Format the explanation in a rich text editor with each line's explanation clearly separated in a code block.",
    form: [
      {
        label: "Enter the code you want to understand",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "AI tool to detect and fix bugs in your code, offering detailed solutions.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "Coding",
    slug: "code-bug-detector",
    aiPrompt:
      "Analyze the provided code for errors or bugs, and provide detailed solutions or fixes. Output the results in a rich text editor format, including code blocks for better readability.",
    form: [
      {
        label: "Enter the code you want to test for bugs",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Generate catchy taglines for your brand or product with the help of AI.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketing",
    slug: "tagline-generator",
    aiPrompt:
      "Generate 5-10 catchy and creative taglines for the given product or brand based on the provided name and outline. Output the taglines in a rich text editor format for easy use.",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Description of what you are selling or marketing",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "Create engaging and SEO-friendly product descriptions for e-commerce.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing",
    slug: "product-description",
    aiPrompt:
      "Generate a concise and compelling product description based on the product name and details provided. Ensure the description is SEO-friendly and formatted for a rich text editor.",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Lyrics Maker",
    desc: "Generate song lyrics based on a given topic and outline.",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186734.png",
    category: "Blog",
    slug: "generate-lyrics",
    aiPrompt:
      "Create song lyrics based on the provided topic and outline. Output the lyrics in a rich text editor format with proper structure and creativity.",
    form: [
      {
        label: "Enter your song topic",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter song outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "HTML Generator",
    desc: "Generate HTML code based on your UI design and requirements.",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    category: "Blog",
    slug: "generate-html",
    aiPrompt:
      "Generate HTML code based on the provided UI design and outline. Ensure the code is clean, well-structured, and suitable for the given requirements. Output the HTML code in a rich text editor format.",
    form: [
      {
        label: "Enter your UI design description",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter UI outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Personalized Learning Pathway",
    desc: "Create personalized learning paths based on skills and goals.",
    icon: "https://cdn-icons-png.flaticon.com/128/2917/2917883.png",
    category: "Education",
    slug: "personalized-learning-pathway",
    aiPrompt:
      "Generate a personalized learning path based on the Learning Goals, Current Skills, we can use roadmap.sh for better guidance or copy there.",
    form: [
      {
        label: "Learning Goals",
        field: "textarea",
        name: "learningGoals",
        required: true,
      },
      {
        label: "Current Skills",
        field: "textarea",
        name: "currentSkills",
        required: true,
      },
    ],
  },
  // {
  //   name: "AI Language Converter",
  //   desc: "Translate text from one language to another seamlessly.",
  //   icon: "https://cdn-icons-png.flaticon.com/128/2655/2655700.png",
  //   category: "Language",
  //   slug: "ai-language-converter",
  //   aiPrompt:
  //     "Translate the given text from the selected source language to the target language using advanced AI models. Consider the context, idiomatic expressions, and cultural nuances to ensure an accurate and natural translation.",
  //   form: [
  //     {
  //       label: "Source Language",
  //       field: "dropdown",
  //       name: "sourceLanguage",
  //       options: [
  //         { label: "English", value: "en" },
  //         { label: "Spanish", value: "es" },
  //         { label: "French", value: "fr" },
  //         // Add more languages as needed
  //       ],
  //       required: true,
  //     },
  //     {
  //       label: "Target Language",
  //       field: "dropdown",
  //       name: "targetLanguage",
  //       options: [
  //         { label: "Spanish", value: "es" },
  //         { label: "French", value: "fr" },
  //         { label: "German", value: "de" },
  //         // Add more languages as needed
  //       ],
  //       required: true,
  //     },
  //     {
  //       label: "Text to Translate",
  //       field: "textarea",
  //       name: "textToTranslate",
  //       required: true,
  //     },
  //   ],
  // },
  // {
  //   name: "AI Language Converter with Auto-Detect",
  //   desc: "Translate text from one language to another with automatic source language detection.",
  //   icon: "https://cdn-icons-png.flaticon.com/128/2655/2655700.png",
  //   category: "Language",
  //   slug: "ai-language-converter-auto-detect",
  //   aiPrompt:
  //     "Automatically detect the source language of the given text and translate it to the selected target language textToTranslate using advanced AI models. Consider the context, idiomatic expressions, and cultural nuances to ensure an accurate and natural translation.",
  //   form: [
  //     {
  //       label: "Source Language",
  //       field: "input",
  //       name: "sourceLanguage",
  //       options: [
  //         { label: "Auto-Detect", value: "auto" },
  //         { label: "English", value: "en" },
  //         { label: "Spanish", value: "es" },
  //         { label: "French", value: "fr" },
  //         // Add more languages as needed
  //       ],
  //       required: true,
  //     },
  //     {
  //       label: "Target Language",
  //       field: "input",
  //       name: "targetLanguage",
  //       required: true,
  //     },
  //     {
  //       label: "Text to Translate",
  //       field: "textarea",
  //       name: "textToTranslate",
  //       required: true,
  //     },
  //   ],
  // },

  // {
  //   name: "Customized Recipe Creator",
  //   desc: "Create a personalized recipe based on available ingredients and dietary preferences.",
  //   icon: "https://cdn-icons-png.flaticon.com/128/3296/3296828.png",
  //   category: "Cooking",
  //   slug: "customized-recipe-creator",
  //   aiPrompt:
  //     "Generate a recipe based on the provided list of ingredients and preferences given by user. The recipe should include a list of ingredients, step-by-step instructions, and cooking time. Format the result for a Rich Text Editor, with clear sections for ingredients and instructions.",
  //   form: [
  //     {
  //       label: "List of available ingredients",
  //       field: "textarea",
  //       name: "ingredients",
  //       required: true,
  //     },
  //     {
  //       label: "Dietary preferences (e.g., vegetarian, gluten-free)",
  //       field: "input",
  //       name: "preferences",
  //     },
  //   ],
  // },
  // {
  //   name: "Customized Workout Plan Generator",
  //   desc: "Generate personalized workout plans based on fitness goals, available equipment, and time constraints.",
  //   icon: "https://cdn-icons-png.flaticon.com/128/1052/1052910.png",
  //   category: "Fitness",
  //   slug: "customized-workout-plan-generator",
  //   aiPrompt:
  //     "Generate a personalized workout plan based on the user’s fitness goals, available equipment, and time constraints.",
  //   form: [
  //     {
  //       label: "Fitness Goals",
  //       field: "textarea",
  //       name: "fitnessGoals",
  //       required: true,
  //     },
  //     {
  //       label: "Available Equipment",
  //       field: "textarea",
  //       name: "equipment",
  //     },
  //     {
  //       label: "Time Available",
  //       field: "input",
  //       name: "timeAvailable",
  //       required: true,
  //     },
  //   ],
  // },
];
