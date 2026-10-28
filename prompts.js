const prompts = {

    /* =========================================================
       ASSIGNMENT 1 — IDENTIFY AND ORGANIZE RELEVANT LITERATURE
       ========================================================= */

    "775-literature-search": {
        title: "Literature Search",
        text: `I'm doing a literature search for a research paper. First, ask me one question at a time to (1) provide my preliminary research scope and (2) identify which database I want to use (give me a choice of the top five databases subscribed to by the University of Kentucky for finding research relevant to family science, and for my preliminary research scope in particular, describing the scope of each database in one sentence).

Once you have that information, complete the next two steps sequentially but without prompting: (a) provide a list of keywords and search terms that will help me find academic papers relevant to this topic and (b) give them some thought and show me the best keyword combinations to use in the specified database (using Boolean, parentheses, wildcards, and truncation, as needed).`
    },

    "775-notebooklm-filenames": {
        title: "NotebookLM File Naming",
        text: `Create a two-column table listing all sources in the exact order they appear. Column 1 (File name): reproduce the source file name exactly as it currently appears in NotebookLM. Column 2 (Author_Year): output only the author’s last name (or multiple authors’ last names) followed by an underscore and the four-digit publication year, using hyphens to separate multiple authors’ last names (e.g., Smith-Jones_2021).

Include no first names, initials, titles, journal names, URLs, publishers, or extra text. Use one source per row, and output only the table with no additional commentary.`
    },

    "775-apa-reference-list": {
        title: "Create APA Reference List",
        text: `Create a reference list that includes every uploaded source in correct APA (7th edition) format. Double- and triple-check each entry for accuracy before sharing it. If any sources seem incomplete or uncertain, list them after the reference section in bullet form, identifying what information is missing or unclear.`
    },

    "775-apa-reference-review": {
        title: "Review APA Reference List",
        text: `Review my reference list (I will provide it) for APA 7th-edition accuracy and consistency—including punctuation, capitalization, italics, and completeness.

Then create a downloadable Microsoft Word document formatted according to APA 7th-edition reference-list standards, including Times New Roman 12-point font; double-spaced throughout (no extra spacing before or after paragraphs); left-aligned text, one-inch margins; 0.5-inch hanging indent for each entry; centered and bold “References” title; publisher name only (no location) for books and book chapters; italicize journal titles and volume numbers (but not the comma between them); use en-dashes for page ranges, and format DOIs as live URLs.

After generating the file, share a download link and briefly note any remaining uncertainties about accuracy or missing information.`
    },


    /* =========================================================
       ASSIGNMENT 2 — IDENTIFY A RESEARCH GAP
       ========================================================= */

    "775-summary-setup": {
        title: "Summary Spreadsheet Setup",
        text: `Generate a concise summary of all source articles as a single markdown table. This prompt will be run multiple times. In each run, generate only the columns listed in the follow-up message.

**Global rules (always required):** Create one row per source visible in this run. Sort rows alphabetically by File Name. Output one markdown table and no other text. Inside each cell, if there is more than one item, place "!!!" between each item. Base all content only on the sources; do not speculate. Keep formatting and row order identical across runs. Do not generate columns not listed.

Column headers in the output table must match the column names provided in the follow-up message exactly (case and spelling). If metadata is missing, leave fields blank rather than guessing. Before finalizing the table, verify that the number of rows equals the number of visible sources and that the File Name column is in exact alphabetical order.

**Output requirements:** Produce one markdown table with one row per article and only the columns specified in the follow-up message. Do not add commentary or extra formatting.

Do not generate output until the follow-up message specifies the columns.`
    },


    /* PROMPT 1 */

    "775-summary-article-identification": {
        title: "Article Identification",
        text: `**Column names and content instructions for this run:**

**File Name:** Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

**APA Reference:** Provide the full and formatted APA-style reference, including author(s), year, title, journal, volume(issue), page range, DOI—or corresponding APA format for other types of sources (e.g., book chapters).

**Publication Type:** Specify the publication type (e.g., peer-reviewed journal article, book chapter, conference paper, policy report, or dissertation).

**Article Type:** Specify the article type (e.g., empirical study, theoretical analysis, literature review, systematic review, meta-analysis, or position paper).

**Year:** Provide the publication year (four digits). Leave blank if not stated.

**Year Range:** Indicate the data collection or analysis period (e.g., 2015–2020; March–August 2022). Leave blank if not stated.

**Discipline:** Specify the primary academic discipline(s) or field(s) represented in the study.

**Geographic Focus:** Identify the geographic focus or jurisdiction(s) examined (e.g., country, region, or policy context).`
    },


    /* PROMPT 2 */

    "775-summary-purpose": {
        title: "Summary and Purpose",
        text: `**Column names and content instructions for this run:**

**File Name:** Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

**TL;DR:** Summarize the article’s main purpose, scope, and core argument in 4–5 short statements.

**Problem Statement:** Summarize the central issue, question, or problem the article seeks to address.

**Objectives:** List 4–5 primary research objectives, questions, or hypotheses stated by the authors.

**Research Gap:** Identify 4–5 unresolved (methodological, theoretical, or empirical) issues, inconsistencies, or limitations identified by the authors.

**Theoretical Framework:** Specify the key theory, conceptual model, or guiding framework underlying the study.

**Literature Survey:** Summarize in 4–5 bullet points the background and context drawn from prior research or foundational works cited.`
    },


    /* PROMPT 3 */

    "775-summary-methodology": {
        title: "Research Design and Methodology",
        text: `**Column names and content instructions for this run:**

**File Name:** Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

**Study Design:** Indicate the study design (e.g., cross-sectional, longitudinal, experimental, case study, or comparative).

**Methods Used:** List 4–5 research methods or methodological approaches used, noting essential procedures or instruments.

**Dataset:** Describe the data source, scope, and content (e.g., surveys, interviews, archival records, legal cases, or observational data).

**Data Source Type:** Indicate whether data are primary, secondary, or mixed, and specify the principal data modality.

**Population Sampled:** Describe the population, sample, or corpus studied (e.g., individuals, institutions, or countries).

**Sample Size:** Provide the total number of participants, cases, or units analyzed (e.g., N = 450 participants; 27 legal cases).

**Inclusion/Exclusion Criteria:** List the key criteria used to include or exclude participants, cases, or documents (e.g., adults aged 18–65, English-language peer-reviewed studies, excluded cases with incomplete data).

**Level of Analysis:** Specify the analytical level(s) (e.g., individual, group, organizational, or national).

**Independent Variables:** List 4–5 independent or predictor variables, if applicable.

**Dependent Variables:** List 4–5 outcome or response variables measured; for non-empirical studies, specify the principal evaluative focus (e.g., “soundness of argumentation”).

**Ethical Considerations:** Note any ethical approvals, compliance procedures, or ethical issues discussed (e.g., IRB approval, informed consent, data protection).`
    },


    /* PROMPT 4 */

    "775-summary-findings": {
        title: "Findings and Results",
        text: `**Column names and content instructions for this run:**

**File Name:** Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

**Results:** Summarize the 4–5 main results, findings, or interpretations reported by the authors.

**Findings:** Provide 4–5 additional empirical, thematic, or conceptual insights that expand on the results.

**Conclusions:** List 4–5 overarching conclusions or synthesized takeaways drawn by the authors.`
    },


    /* PROMPT 5 */

    "775-summary-evaluation": {
        title: "Interpretation and Evaluation",
        text: `**Column names and content instructions for this run:**

**File Name:** Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

**Contributions:** Describe 4–5 specific contributions the article makes to its field (e.g., introducing new data, proposing a conceptual model, refining methodology, clarifying policy).

**Challenges:** Identify 4–5 challenges, tensions, or methodological difficulties acknowledged by the authors or apparent in the literature.

**Limitations:** List 4–5 limitations or caveats related to study design, generalizability, data quality, or timeframe.

**Quality / Rigor Assessment:** Summarize any indicators of methodological rigor, quality, or potential bias described or inferable from the study.`
    },


    /* PROMPT 6 */

    "775-summary-implications": {
        title: "Implications and Future Directions",
        text: `**Column names and content instructions for this run:**

**File Name:** Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

**Applications:** List 4–5 applied or professional domains where findings or models could be implemented.

**Practical Implications:** Summarize 4–5 actionable implications or recommendations for practitioners, policymakers, or stakeholders.

**Future Research:** List 4–5 key recommendations or proposed directions for future research, based only on the source file.

**Relevance to Research Question:** Briefly explain how this study contributes to or informs your overarching research question or synthesis.`
    },


    /* PROMPT 7 */

    "775-summary-metadata": {
        title: "Supporting Metadata",
        text: `**Column names and content instructions for this run:**

**File Name:** Include the exact file name (e.g., Smith-Jackson-Patel_2025.pdf).

**Key Terms / Keywords:** List 4–5 central keywords or recurring concepts identified by the authors.

**Funding / Sponsorship:** Note any funding source, grant number, or institutional sponsor if reported.

**Study Setting / Context:** Describe the study setting or context (e.g., clinical, educational, online, policy, or community).

**Citation Count / Impact:** Provide citation count or other available indicators of scholarly impact.

**Summarized Abstract:** Summarize in 4–5 bullet points the article’s abstract, including its research question, design, main findings, and conclusion.

**Summarized Introduction:** Summarize in 4–5 bullet points the introduction, focusing on background, rationale, and research motivation.`
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
    },


    /* =========================================================
       ASSIGNMENT 3 — LITERATURE REVIEW DEVELOPMENT AND ENHANCEMENT
       ========================================================= */

    "775-litreview-outline-sage": {
        title: "Literature Review Outline — Research Sage",
        text: `I'm writing a literature review to introduce a research study for a manuscript I'm writing in my doctoral program. Start by asking me to provide the focus of my study, then suggest an outline for the literature review.`
    },

    "775-litreview-outline-gemini": {
        title: "Literature Review Outline — Gemini Notebook",
        text: `I'm writing a literature review centered around the source files to introduce a research study for a manuscript I'm writing in my doctoral program on **[insert one of the research gaps you identified last week]**. Given this focus, please suggest an outline for the literature review.`
    },

    "775-litreview-feedback-chatgpt": {
        title: "Literature Review Feedback — ChatGPT",
        text: `I have written the attached literature review for a study I'm working on. I would like help revising the text to enhance its clarity, coherence, and conciseness. Please ensure that each paragraph transitions smoothly into the next and that the tone is professional and suitable for academic writing. I would also appreciate feedback on sentence structure, word choice, and overall readability, along with suggestions for making the text more engaging while maintaining scholarly standards. Additionally, please identify any issues with APA style, including in-text citations, headings, or references, and provide recommendations for improvement.`
    },

    "775-litreview-feedback-sage": {
        title: "Literature Review Feedback — Research Sage",
        text: `I have written the attached literature review for a study I'm working on. I would like help revising the text to enhance its clarity, coherence, and conciseness. Please ensure that each paragraph transitions smoothly into the next and that the tone is professional and suitable for academic writing. I would also appreciate feedback on sentence structure, word choice, and overall readability, along with suggestions to make the text more engaging while adhering to scholarly standards. Additionally, please identify any issues with APA style, including in-text citations, headings, or references, and provide recommendations for improvement.`
    },

    /* =========================================================
       ASSIGNMENT 4 — PRESENTATIONS AND TEACHING
       ========================================================= */

    "775-presentations-conference": {
        title: "Research Conference Presentation",
        text: `Create a professional, visually polished PowerPoint presentation based on my attached research document. The presentation should be suitable for a 15-minute academic research conference presentation attended by family scientists.
            
        **Research Content**
        - Accurately summarize the research problem, theoretical and empirical background, and contribution to the literature.
        - Present the research questions or hypotheses and their theoretical or empirical rationale.
        - Describe the research design, sample, measures, procedures, and analytical methods, emphasizing details necessary to evaluate the study.
        - If this is completed research, prioritize the principal findings and preserve the reported statistical results, including estimates, effect sizes, and measures of uncertainty where available.
        - If this is a proposal, describe the planned methodology and anticipated contributions without inventing findings or presenting proposed analyses as completed.
        - Explain the implications, limitations, and conclusions without overstating what the evidence establishes.
        - Do not fabricate information, research findings, citations, or references.
    
        **Presentation Design**
        - Create approximately 8–12 slides, adjusting the number to fit a 15-minute presentation.
        - Use widescreen (16:9) format and a consistent, professional academic design.
        - Prioritize meaningful figures, conceptual diagrams, tables, and graphical representations of findings over lengthy bullet lists.
        - Use informative slide titles and readable typography.
        - Include appropriate citations for scholarly claims and visuals.
        - Include speaker notes with supporting explanations where feasible.
        - Conclude with the principal contributions, implications, or next steps.
    
        **Process**
        First, propose a slide-by-slide outline identifying the main message and recommended visual for each slide. Give me an opportunity to revise the outline before generating the presentation. After I approve the outline, create an editable PowerPoint presentation.`
            .replace(/^[ \t]+/gm, "")
            .trim()
    },

    "775-presentations-literature-review": {
        title: "Visual Literature Review",
        text: `Create a comprehensive, professional, and visually engaging Visual Literature Review using the scholarly articles contained in this notebook.
        The purpose is to develop an information-rich visual reference resource that will help me understand, organize, and synthesize this body of research. This is not an oral presentation.

        **Scholarly Content**
        - Organize the literature thematically rather than summarizing articles individually.
        - Identify the major theoretical perspectives, conceptual frameworks, research questions, and empirical findings across the sources.
        - Synthesize findings across studies, emphasizing patterns, convergent findings, contradictory evidence, and unresolved questions.
        - Compare studies based on research design, populations, measurement, analytical approaches, and findings when useful.
        - Incorporate specific quantitative findings where informative, preserving the reported values and interpretations.
        - Distinguish well-supported conclusions from preliminary, mixed, or contested evidence.
        - Identify methodological limitations, gaps in the literature, and promising directions for future research.
        - Provide citations identifying the original articles supporting substantive claims.

        **Visual Design**
        - Treat each slide as a relatively self-contained, infographic-style visual summary addressing one important concept, theory, empirical pattern, methodological issue, or theme.
        - Use conceptual diagrams, evidence maps, comparison tables, thematic groupings, timelines, and other meaningful visuals.
        - Favor informative, content-rich layouts over traditional oral-presentation slides with sparse bullet points.
        - Maintain consistent academic styling, logical organization, clear headings, and readable text.
        - Include an integrated overview of the literature and its principal unanswered questions.
        - Do not target a predetermined number of slides. Instead, generate as many as are useful to provide a thorough, coherent synthesis without unnecessary repetition.

        **Accuracy**
        Base all scholarly claims on the documents in this notebook. Do not invent research findings, statistical results, citations, theoretical relationships, or visual representations of data. Identify limitations and inconsistencies in the evidence rather than concealing them.`
            .replace(/^[ \t]+/gm, "")
            .trim()
    },

    "775-presentations-undergraduate-lecture": {
        title: "Research-Based Undergraduate Lecture",
        text: `I am developing a 75-minute undergraduate lecture for an undergraduate family science course. Help me select a topic, research the scholarly literature, develop an engaging instructional plan, and create a professional PowerPoint presentation.

        **STEP 1: Topic Selection**
        First, ask me to choose one of these topics:
        - Adolescent Romantic Relationships and Partner Selection
        - Early Childhood Self-Regulation and Socioemotional Development
        - Couple Dynamics and Relationship Quality: A Systems Perspective
        - Family Structure, Socioeconomic Inequality, and Child Well-Being
        Do not proceed until I select a topic.

        **STEP 2: Research the Literature**
        Identify and synthesize credible theoretical and empirical scholarship relevant to the selected topic.
        - Prioritize peer-reviewed empirical research, systematic reviews, meta-analyses, and foundational theoretical contributions.
        - Include contemporary findings alongside influential classic theories and research.
        - Identify major theoretical perspectives, empirical findings, scholarly debates, methodological limitations, and unresolved questions.
        - Incorporate quantitative findings where useful, preserving reported statistics and interpretations.
        - Distinguish correlational from causal evidence, theoretical explanations from empirical findings, and established conclusions from tentative interpretations.
        - Provide accurate, independently verifiable scholarly citations, with DOI or publisher links when available.
        - Do not invent citations, research findings, numerical results, or theoretical claims. Identify uncertainty where information cannot be verified.

        **STEP 3: Develop a 75-Minute Instructional Plan**
        Assume students have introductory knowledge of family science but limited familiarity with the selected topic.
        Develop an instructional plan that includes:
        - Four to six clear learning objectives.
        - Major concepts, theories, empirical findings, and contemporary debates.
        - Accessible explanations, meaningful examples, and practical applications.
        - Approximately 50 minutes of instructional content and 25 minutes distributed across audience-response questions, classroom activities, and discussions.
        - At least three Mentimeter-style audience-response questions using varied formats, such as multiple choice, ranking, word cloud, or open-ended response.
        - At least two short classroom activities requiring students to apply, analyze, or critically evaluate the material.
        - Logical transitions between lecture content and interactive exercises.
        For each Mentimeter-style question, provide the question wording, response options where relevant, the learning objective, and brief guidance for discussing students' responses.
        For each classroom activity, provide instructions, an estimated duration, and the intended learning outcome.

        **STEP 4: Review the Plan**
        Before generating slides, present:
        - The proposed lecture title and learning objectives.
        - An overview of the relevant theories and empirical evidence.
        - A 75-minute instructional outline with estimated timings.
        - The planned Mentimeter-style questions.
        - The classroom activities and discussion exercises.
        - A list of scholarly references.
        Ask whether I want to revise the plan before proceeding. Do not generate the presentation until I approve the plan.

        **STEP 5: Generate the PowerPoint**
        After I approve the plan, create a professional, visually engaging PowerPoint presentation suitable for delivering the complete 75-minute undergraduate class.
        - Use widescreen (16:9) slides with a professional, consistent visual design.
        - Use readable fonts, informative slide titles, and concise on-slide text.
        - Include meaningful conceptual diagrams, theoretical models, research figures, comparisons, and illustrations.
        - Include slides containing the Mentimeter-style questions, with clear wording and response options where appropriate.
        - Include slides with instructions for classroom activities and discussions.
        - Include useful speaker notes with additional explanations, source citations, activity guidance, and approximate timings where supported.
        - Include citations and a scholarly reference list.
        - Preserve the accuracy and nuance of the approved lecture plan.
        - Do not invent research findings, statistics, citations, or data visualizations.
        - Use editable PowerPoint elements wherever feasible rather than generating images of entire slides.
        Create enough material and activities to support the complete 75-minute class session. The Mentimeter-style questions only need to appear on the slides. Do not create functioning Mentimeter polls or require integration with an external Mentimeter account.`
            .replace(/^[ \t]+/gm, "")
            .trim()
    },

    /* =========================================================
       ASSIGNMENT 5 — VISUAL COMMUNICATION WITH GENAI
       ========================================================= */

    "775-visual-chapter-infographic": {
        title: "Chapter Study-Guide Infographic",
        text: `I am creating a one-page study-guide infographic from the attached book chapter. I previously made my own chapter cheat sheet, and I will compare it with the AI-created version. Use only the attached chapter as your source. Do not use outside information or add claims that are not supported by the chapter.

**First, prepare the content for review.** Identify the chapter's central idea, 4–6 essential concepts or findings, and the most important relationships, distinctions, or examples. Propose concise wording and a visual hierarchy for a one-page study guide. For each major point, identify the chapter heading and page number that support it when those are available. Flag any ambiguity or information you cannot verify. Do not create the infographic yet. Wait for me to review and approve or correct the content.

**After I approve the content, create the visual.** Make a readable, one-page portrait study-guide infographic for a graduate student reviewing the chapter. Use concise labels, clear grouping, and a visual structure that shows relationships among ideas. Preserve the approved wording and distinctions. Do not invent quotations, statistics, examples, citations, or connections. Keep the design useful for studying rather than decorative. If you cannot render exact text reliably, provide the approved text in an editable, clearly organized layout for me to place in PowerPoint or another design tool.`
    },

    "775-visual-article-abstract": {
        title: "Research Article Visual Abstract",
        text: `I am creating a one-page visual abstract of the attached scholarly research article. Use only this article as your source. The visual must represent the study accurately for a graduate student or academic audience. Do not use outside sources, infer details that the authors did not report, or treat association as causation.

**First, prepare the content for review.** Identify the article's research question or purpose, theoretical rationale if stated, study design, sample or data, measures or procedures, analysis if important, principal findings, and limitations. Preserve reported numbers and qualifications exactly. Distinguish the authors' findings from their interpretations. For each point, identify the article section and page number when available. Flag information that is absent or uncertain. Propose a concise visual-abstract outline, but do not create the graphic yet. Wait for me to review and approve or correct the content.

**After I approve the content, create the visual.** Make a one-page landscape visual abstract with a clear reading order and short, accurate labels. Include the article's full citation in a small, readable footer using the citation details printed in the article; do not guess at missing information. Do not create a chart from unreported values, overstate causal conclusions, or add claims from outside the article. If you cannot render exact text reliably, provide the approved text in an editable, clearly organized layout for me to place in PowerPoint or another design tool.`
    },

    "775-visual-apa-napkin": {
        title: "APA Quick-Reference Visual — Napkin",
        text: `I want to turn one specific rule or process from an APA Manual chapter I have read into a quick-reference visual using Napkin. I will provide my own concise, verified outline of the guidance and the Manual's chapter or section details. Use only the outline I provide. Do not add rules from memory, other editions, websites, or other sources.

**Before creating the visual, review the outline.** Identify the main decision or task, the steps or conditions, and any exceptions or distinctions included in my outline. Point out wording that is ambiguous or seems incomplete, and ask me to verify it in the APA Manual. Do not fill gaps by guessing. Wait for me to confirm the outline.

**After I confirm it, create one quick-reference visual in Napkin.** Choose the format that best fits the content: a decision tree for conditional choices, a flowchart for a sequence of steps, or a checklist for a set of requirements. Use short labels, clear arrows or grouping, and a readable layout. Preserve the confirmed rules and exceptions exactly. Include a small source note using the Manual chapter or section details I provide. Do not invent page numbers or guidance. If the visual would become crowded, simplify the layout without dropping a rule and tell me what was condensed.`
    },
    
};
