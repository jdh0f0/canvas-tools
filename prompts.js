const prompts = {

    /* =========================================================
       ASSIGNMENT 1 — IDENTIFY AND ORGANIZE RELEVANT LITERATURE
       ========================================================= */

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
    },


    /* =========================================================
       ASSIGNMENT 2 — IDENTIFY A RESEARCH GAP
       ========================================================= */

    "775-summary-setup": {
        title: "Summary Spreadsheet Setup",
        text: `Generate a concise summary of all source articles as a single markdown table. This prompt will be run multiple times. In each run, generate only the columns listed in the follow-up message.

Global rules (always required): Create one row per source visible in this run. Sort rows alphabetically by File Name. Output one markdown table and no other text. Inside each cell, if there is more than one item, place "!!!" between each item. Base all content only on the sources; do not speculate. Keep formatting and row order identical across runs. Do not generate columns not listed. Column headers in the output table must match the column names provided in the follow-up message exactly (case and spelling). If metadata is missing, leave fields blank rather than guessing. Before finalizing the table, verify that the number of rows equals the number of visible sources and that the File Name column is in exact alphabetical order.

Output requirements: Produce one markdown table with one row per article and only the columns specified in the follow-up message. Do not add commentary or extra formatting.

Do not generate output until the follow-up message specifies the columns.`
    },

    "775-summary-article-identification": {
        title: "Article Identification",
        text: `Column names and content instructions for this run:

File Name: Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

APA Reference: Provide the full and formatted APA-style reference, including author(s), year, title, journal, volume(issue), page range, DOI—or corresponding APA format for other types of sources (e.g., book chapters).

Publication Type: Specify the publication type (e.g., peer-reviewed journal article, book chapter, conference paper, policy report, or dissertation).

Article Type: Specify the article type (e.g., empirical study, theoretical analysis, literature review, systematic review, meta-analysis, or position paper).

Year: Provide the publication year (four digits). Leave blank if not stated.

Year Range: Indicate the data collection or analysis period (e.g., 2015–2020; March–August 2022). Leave blank if not stated.

Discipline: Specify the primary academic discipline(s) or field(s) represented in the study.

Geographic Focus: Identify the geographic focus or jurisdiction(s) examined (e.g., country, region, or policy context).`
    },

    "775-summary-purpose": {
        title: "Summary and Purpose",
        text: `Column names and content instructions for this run:

File Name: Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

TL;DR: Summarize the article’s main purpose, scope, and core argument in 4–5 short statements.

Problem Statement: Summarize the central issue, question, or problem the article seeks to address.

Objectives: List 4–5 primary research objectives, questions, or hypotheses stated by the authors.

Research Gap: Identify 4–5 unresolved methodological, theoretical, or empirical issues, inconsistencies, or limitations identified by the authors.

Theoretical Framework: Specify the key theory, conceptual model, or guiding framework underlying the study.

Literature Survey: Summarize in 4–5 concise points the background and context drawn from prior research or foundational works cited.`
    },

    "775-summary-methodology": {
        title: "Research Design and Methodology",
        text: `Column names and content instructions for this run:

File Name: Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

Study Design: Indicate the study design (e.g., cross-sectional, longitudinal, experimental, case study, or comparative).

Methods Used: List 4–5 research methods or methodological approaches used, noting essential procedures or instruments.

Dataset: Describe the data source, scope, and content (e.g., surveys, interviews, archival records, legal cases, or observational data).

Data Source Type: Indicate whether data are primary, secondary, or mixed, and specify the principal data modality.

Population Sampled: Describe the population, sample, or corpus studied.

Sample Size: Provide the total number of participants, cases, or units analyzed.

Inclusion/Exclusion Criteria: List the key criteria used to include or exclude participants, cases, or documents.

Level of Analysis: Specify the analytical level(s), such as individual, group, organizational, or national.

Independent Variables: List 4–5 independent or predictor variables, if applicable.

Dependent Variables: List 4–5 outcome or response variables measured; for non-empirical studies, specify the principal evaluative focus.

Ethical Considerations: Note any ethical approvals, compliance procedures, or ethical issues discussed.`
    },

    "775-summary-findings": {
        title: "Findings and Results",
        text: `Column names and content instructions for this run:

File Name: Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

Results: Summarize the 4–5 main results, findings, or interpretations reported by the authors.

Findings: Provide 4–5 additional empirical, thematic, or conceptual insights that expand on the results.

Conclusions: List 4–5 overarching conclusions or synthesized takeaways drawn by the authors.`
    },

    "775-summary-evaluation": {
        title: "Interpretation and Evaluation",
        text: `Column names and content instructions for this run:

File Name: Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

Contributions: Describe 4–5 specific contributions the article makes to its field.

Challenges: Identify 4–5 challenges, tensions, or methodological difficulties acknowledged by the authors or apparent in the literature.

Limitations: List 4–5 limitations or caveats related to study design, generalizability, data quality, or timeframe.

Quality / Rigor Assessment: Summarize indicators of methodological rigor, quality, or potential bias described or inferable from the study.`
    },

    "775-summary-implications": {
        title: "Implications and Future Directions",
        text: `Column names and content instructions for this run:

File Name: Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

Applications: List 4–5 applied or professional domains where findings or models could be implemented.

Practical Implications: Summarize 4–5 actionable implications or recommendations for practitioners, policymakers, or stakeholders.

Future Research: List 4–5 key recommendations or proposed directions for future research, based only on the source.

Relevance to Research Question: Briefly explain how the study contributes to or informs the overarching research question or synthesis.`
    },

    "775-summary-metadata": {
        title: "Supporting Metadata",
        text: `Column names and content instructions for this run:

File Name: Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

Key Terms / Keywords: List 4–5 central keywords or recurring concepts identified by the authors.

Funding / Sponsorship: Note any funding source, grant number, or institutional sponsor if reported.

Study Setting / Context: Describe the study setting or context (e.g., clinical, educational, online, policy, or community).

Citation Count / Impact: Provide citation count or other available indicators of scholarly impact.

Summarized Abstract: Summarize in 4–5 concise points the article’s abstract, including its research question, design, main findings, and conclusion.

Summarized Introduction: Summarize in 4–5 concise points the introduction, focusing on background, rationale, and research motivation.`
    },

    "775-gap-notebooklm": {
        title: "Identify Future Directions Using NotebookLM Sources",
        text: `Task: Analyze all uploaded sources to identify future research directions, including both directions explicitly stated by the authors and directions implied by remaining limitations or unanswered questions.

Instructions:
1. Search for sections or language indicating next steps, including “future research,” “further investigation,” “limitations,” and “unresolved questions.”
2. Prioritize insights from newer sources that update, refine, or resolve gaps identified in earlier work.
3. When an older study proposed a direction that newer research appears to have addressed, identify it as Addressed or Partially Addressed.
4. Group unresolved directions by theme, such as theoretical, methodological, applied, policy, or ethical.

Output one table with these columns:
Theme | Research Question or Direction | First Source Mention (Author, Year or File Name) | Most Recent Source Update (Author, Year or File Name) | Status (Addressed / Unresolved / Partially Addressed) | Summary of How Addressed or Why Still Needed

Conclude with 3–5 sentences summarizing current frontiers and emerging research priorities.

Use only the uploaded sources. Remain factual and do not speculate beyond the evidence in those sources.`
    },

    "775-gap-scite": {
        title: "Identify Future Directions Using Scite",
        text: `Identify the main research gaps and future directions regarding [insert the preliminary research scope].

Focus on:
1. Areas where findings remain inconsistent, underexplored, or theoretically unresolved.
2. Methodological or data limitations that hinder progress.
3. Directions explicitly identified as “future research,” “next steps,” or “remaining challenges.”
4. Older gaps that later research has addressed. Where appropriate, identify these as Resolved or Partially Addressed and indicate which studies addressed them.

Present the results as a structured table with these columns:

Theme | Specific Research Gap or Question | Supporting Studies (APA citation) | First Mentioned (Year) | Most Recent Discussion (Year) | Status (Unresolved / Partially Addressed / Resolved)

Conclude with a 4–6 sentence summary describing the most pressing or emerging priorities for future research.`
    }

};
