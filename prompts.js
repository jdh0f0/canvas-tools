const prompts = {

    "775-literature-search": {
        title: "Literature Search",
        text: `I'm doing a literature search for a research paper. First, ask me one question at a time to (1) provide my preliminary research scope and (2) identify which database I want to use (give me a choice of the top five databases subscribed to by the University of Kentucky for finding research relevant to family science, and for my preliminary research scope in particular, describing the scope of each database in one sentence). Once you have that information, complete the next two steps sequentially but without prompting: (a) provide a list of keywords and search terms that will help me find academic papers relevant to this topic and (b) give them some thought and show me the best keyword combinations to use in the specified database (using Boolean, parentheses, wildcards, and truncation, as needed).`
    },

    "775-notebooklm-filenames": {
        title: "NotebookLM File Naming",
        text: `Create a two-column table listing all sources in the exact order they appear. Column 1 (File name): reproduce the source file name exactly as it currently appears in NotebookLM. Column 2 (Author_Year): output only the author’s last name (or multiple authors’ last names) followed by an underscore and the four-digit publication year, using hyphens to separate multiple authors’ last names (e.g., Smith-Jones_2021). Include no first names, initials, titles, journal names, URLs, publishers, or extra text. Use one source per row, and output only the table with no additional commentary.`
    },

    "775-apa-reference-list": {
        title: "Create APA Reference List",
        text: `Create a reference list that includes every uploaded source in correct APA (7th edition) format. Double- and triple-check each entry for accuracy before sharing it. If any sources seem incomplete or uncertain, list them after the reference section in bullet form, identifying what information is missing or unclear.`
    },

    "775-apa-reference-review": {
        title: "Review APA Reference List",
        text: `Review my reference list (I will provide it) for APA 7th-edition accuracy and consistency—including punctuation, capitalization, italics, and completeness. Then create a downloadable Microsoft Word document formatted according to APA 7th-edition reference-list standards, including Times New Roman 12-point font; double-spaced throughout (no extra spacing before or after paragraphs); left-aligned text, one-inch margins; 0.5-inch hanging indent for each entry; centered and bold “References” title; publisher name only (no location) for books and book chapters; italicize journal titles and volume numbers (but not the comma between them); use en-dashes for page ranges, and format DOIs as live URLs. After generating the file, share a download link and briefly note any remaining uncertainties about accuracy or missing information.`
    }

};
