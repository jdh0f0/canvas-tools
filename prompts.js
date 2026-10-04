const prompts = {

    "775-literature-search": {
        title: "Literature Search",
        text: `I'm doing a literature search for a research paper. First, ask me one question at a time to (1) provide my preliminary research scope and (2) identify which database I want to use (give me a choice of the top five databases subscribed to by the University of Kentucky for finding research relevant to family science, and for my preliminary research scope in particular, describing the scope of each database in one sentence). Once you have that information, complete the next two steps sequentially but without prompting: (a) provide a list of keywords and search terms that will help me find academic papers relevant to this topic and (b) give them some thought and show me the best keyword combinations to use in the specified database (using Boolean, parentheses, wildcards, and truncation, as needed).`
    },

    "775-notebooklm-filenames": {
        title: "NotebookLM File Naming",
        text: `Create a two-column table listing all sources in the exact order they appear. Column 1 (File name): reproduce the source file name exactly as it currently appears in NotebookLM. Column 2 (Author_Year): output only the author’s last name (or multiple authors’ last names) followed by an underscore and the four-digit publication year, using hyphens to separate multiple authors’ last names (e.g., Smith-Jones_2021). Include no first names, initials, titles, journal names, URLs, publishers, or extra text. Use one source per row, and output only the table with no additional commentary.`
    },

    "second-prompt": {
        title: "Second Prompt",
        text: `PLACE YOUR SECOND PROMPT HERE.`
    }

};
